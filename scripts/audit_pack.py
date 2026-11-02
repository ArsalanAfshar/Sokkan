#!/usr/bin/env python3
"""Dependency-free static QA for the Sokkan template pack."""
from __future__ import annotations

import json
import re
import subprocess
import sys
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
TEMPLATES = ("Milad", "Taraz", "Chidar")
EXTERNAL_SCHEMES = {"http", "https", "mailto", "tel", "sms", "data", "javascript", "ftp", "blob"}


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.ids: list[str] = []
        self.references: list[tuple[str, str, str]] = []
        self.local_urls: list[tuple[str, str]] = []
        self.i18n: dict[str, set[str]] = {
            "data-i18n": set(),
            "data-i18n-placeholder": set(),
            "data-i18n-aria": set(),
        }
        self.errors: list[str] = []
        self.heading_levels: list[int] = []
        self.h1_count = 0
        self.ld_json: list[str] = []
        self._script_type = ""
        self._script_chunks: list[str] = []
        self._ids = Counter()

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        data = dict(attrs)
        if "id" in data and data["id"]:
            value = str(data["id"])
            self.ids.append(value)
            self._ids[value] += 1
            if self._ids[value] > 1:
                self.errors.append(f"duplicate id: {value}")
        for attr in self.i18n:
            value = data.get(attr)
            if value:
                self.i18n[attr].add(str(value))
        for attr in ("aria-controls", "aria-labelledby", "aria-describedby", "for"):
            value = data.get(attr)
            if value:
                for ref in str(value).split():
                    self.references.append((attr, ref, tag))
        for attr in ("href", "src", "poster", "action", "data-src"):
            value = data.get(attr)
            if value is not None:
                self.local_urls.append((attr, str(value)))
        if tag == "a":
            href = data.get("href")
            if href == "#":
                self.errors.append("empty placeholder link href='#'")
            if data.get("target") == "_blank":
                rel = set(str(data.get("rel", "")).lower().split())
                if not {"noopener", "noreferrer"}.issubset(rel):
                    self.errors.append("target=_blank link is missing rel=noopener noreferrer")
        if tag == "img" and "alt" not in data:
            self.errors.append("img element is missing an alt attribute")
        if tag == "button" and data.get("type") not in {"button", "submit", "reset"}:
            self.errors.append("button element is missing an explicit type")
        if re.fullmatch(r"h[1-6]", tag):
            self.heading_levels.append(int(tag[1]))
            if tag == "h1":
                self.h1_count += 1
        if tag == "script":
            self._script_type = str(data.get("type", "")).lower()
            if self._script_type == "application/ld+json":
                self._script_chunks = []

    def handle_data(self, data: str) -> None:
        if self._script_type == "application/ld+json":
            self._script_chunks.append(data)

    def handle_endtag(self, tag: str) -> None:
        if tag == "script" and self._script_type == "application/ld+json":
            self.ld_json.append("".join(self._script_chunks))
            self._script_type = ""
            self._script_chunks = []
        elif tag == "script":
            self._script_type = ""


def local_path_from_url(value: str, base_dir: Path) -> tuple[Path | None, str | None]:
    value = value.strip()
    if not value or value.startswith("#"):
        return None, value[1:] if value.startswith("#") else None
    parts = urlsplit(value)
    if parts.scheme.lower() in EXTERNAL_SCHEMES or parts.netloc:
        return None, unquote(parts.fragment) or None
    path = unquote(parts.path)
    if not path:
        return None, unquote(parts.fragment) or None
    candidate = (base_dir / path).resolve()
    return candidate, unquote(parts.fragment) or None


def translation_keys(js: str, object_start: str, object_end: str) -> set[str]:
    keys: set[str] = set()
    cursor = 0
    while True:
        start = js.find(object_start, cursor)
        if start < 0:
            break
        body_start = start + len(object_start)
        end = js.find(object_end, body_start)
        if end < 0:
            break
        keys.update(re.findall(r"\b([A-Za-z_$][\w$]*)\s*:", js[body_start:end]))
        cursor = end + len(object_end)
    return keys


def english_translation_keys(template_name: str, js: str) -> set[str]:
    if template_name == "Taraz":
        return translation_keys(js, "    en: {", "\n    }\n  };")
    if template_name == "Chidar":
        return translation_keys(js, "  const EN = {", "\n  };")
    return (
        translation_keys(js, "const EN = {", "\n  };")
        | translation_keys(js, "Object.assign(EN, {", "\n  });")
    )


def english_aria_keys(template_name: str, js: str) -> set[str]:
    if template_name == "Milad":
        return translation_keys(js, "const EN_ARIA = {", "\n  };")
    return english_translation_keys(template_name, js)


def audit_page(template: Path, file: Path, js: str, errors: list[str]) -> None:
    parser = PageParser()
    try:
        parser.feed(file.read_text(encoding="utf-8"))
        parser.close()
    except Exception as exc:  # pragma: no cover - diagnostic path
        errors.append(f"{file.relative_to(ROOT)}: HTML parsing failed: {exc}")
        return

    label = file.relative_to(ROOT)
    for message in parser.errors:
        errors.append(f"{label}: {message}")
    if parser.h1_count != 1:
        errors.append(f"{label}: expected exactly one h1, found {parser.h1_count}")

    ids = set(parser.ids)
    for attr, ref, _tag in parser.references:
        if ref not in ids:
            errors.append(f"{label}: {attr} references missing id #{ref}")

    html = file.read_text(encoding="utf-8")
    for attr, value in parser.local_urls:
        path, fragment = local_path_from_url(value, file.parent)
        if path is not None and not path.exists():
            errors.append(f"{label}: missing local {attr} target {value!r}")
        elif path is not None and fragment:
            target = PageParser()
            try:
                target.feed(path.read_text(encoding="utf-8"))
                target.close()
            except (UnicodeDecodeError, OSError):
                continue
            if fragment not in set(target.ids):
                errors.append(f"{label}: {value!r} points to a missing fragment #{fragment}")
        elif path is None and fragment and value.startswith("#") and fragment not in ids:
            errors.append(f"{label}: internal link points to a missing id #{fragment}")

    if js:
        available = english_translation_keys(template.name, js)
        aria_available = english_aria_keys(template.name, js)
        for attr, used in parser.i18n.items():
            translation_table = aria_available if attr == "data-i18n-aria" else available
            missing = sorted(used - translation_table)
            for key in missing:
                errors.append(f"{label}: {attr} key {key!r} has no English translation")

    for payload in parser.ld_json:
        try:
            json.loads(payload)
        except json.JSONDecodeError as exc:
            errors.append(f"{label}: invalid JSON-LD: {exc}")

    # CSS url(...) references are local to the stylesheet containing the URL.
    for stylesheet in re.findall(r'<link\b[^>]*\bhref=["\']([^"\']+\.css(?:\?[^"\']*)?)["\']', html, flags=re.I):
        css_path, _ = local_path_from_url(stylesheet, file.parent)
        if not css_path or not css_path.exists():
            continue
        css = css_path.read_text(encoding="utf-8", errors="replace")
        for raw_url in re.findall(r"url\(\s*['\"]?([^)'\"]+)['\"]?\s*\)", css, flags=re.I):
            if raw_url.strip().startswith("%23"):
                continue
            asset, _fragment = local_path_from_url(raw_url, css_path.parent)
            if asset is not None and not asset.exists():
                errors.append(f"{css_path.relative_to(ROOT)}: missing CSS asset {raw_url!r}")


def main() -> int:
    errors: list[str] = []
    for name in TEMPLATES:
        template = ROOT / name
        index = template / "index.html"
        if not index.exists():
            errors.append(f"missing template entry point: {name}/index.html")
            continue
        js_path = template / "assets/js/main.js"
        js = js_path.read_text(encoding="utf-8") if js_path.exists() else ""
        if not js_path.exists():
            errors.append(f"missing script: {js_path.relative_to(ROOT)}")
        else:
            result = subprocess.run(["node", "--check", str(js_path)], capture_output=True, text=True)
            if result.returncode:
                errors.append(f"{js_path.relative_to(ROOT)}: node --check failed: {result.stderr.strip()}")
        audit_page(template, index, js, errors)
        legal = template / "legal.html"
        if legal.exists():
            audit_page(template, legal, js, errors)
        else:
            errors.append(f"missing legal sample page: {legal.relative_to(ROOT)}")

    if errors:
        print(f"Sokkan static audit: {len(errors)} issue(s)")
        for error in errors:
            print(f" - {error}")
        return 1
    print("Sokkan static audit passed: 3 templates, legal pages, local links/assets, IDs, translations, JSON-LD, and JavaScript syntax.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
