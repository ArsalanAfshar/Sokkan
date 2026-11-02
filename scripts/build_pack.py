#!/usr/bin/env python3
"""Build the complete, self-contained Sokkan template pack ZIP."""
from __future__ import annotations

import argparse
import os
import tempfile
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ARCHIVE_ROOT = "Sokkan-Template-Pack"
INCLUDE = (
    Path("README.md"),
    Path("LICENSE.md"),
    Path("LICENSES"),
    Path("Milad"),
    Path("Taraz"),
    Path("Chidar"),
    Path("scripts/audit_pack.py"),
    Path("scripts/build_pack.py"),
)
EXCLUDED_PARTS = {".git", "node_modules", "__pycache__", ".DS_Store", ".pytest_cache", ".venv"}


def included_files() -> list[Path]:
    files: list[Path] = []
    for item in INCLUDE:
        source = ROOT / item
        if not source.exists():
            raise FileNotFoundError(f"Required pack item is missing: {item}")
        candidates = [source] if source.is_file() else sorted(path for path in source.rglob("*") if path.is_file())
        for candidate in candidates:
            relative = candidate.relative_to(ROOT)
            if EXCLUDED_PARTS.intersection(relative.parts):
                continue
            if candidate.name.endswith((".pyc", ".tmp", ".bak")):
                continue
            if relative not in files:
                files.append(relative)
    return sorted(files)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "output",
        nargs="?",
        default="Sokkan-Template-Pack.zip",
        help="ZIP path (default: Sokkan-Template-Pack.zip in the repository root)",
    )
    args = parser.parse_args()
    target = Path(args.output).expanduser()
    if not target.is_absolute():
        target = (ROOT / target).resolve()
    target.parent.mkdir(parents=True, exist_ok=True)

    sources = included_files()
    handle, temporary_name = tempfile.mkstemp(prefix=".sokkan-pack-", suffix=".zip", dir=target.parent)
    os.close(handle)
    temporary = Path(temporary_name)
    try:
        with zipfile.ZipFile(temporary, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=8) as archive:
            for relative in sources:
                member = Path(ARCHIVE_ROOT) / relative
                archive.write(ROOT / relative, member.as_posix())
        with zipfile.ZipFile(temporary, "r") as archive:
            corrupt = archive.testzip()
            if corrupt:
                raise zipfile.BadZipFile(f"Archive verification failed at {corrupt}")
        os.replace(temporary, target)
        # mkstemp defaults to owner-only permissions; make the deliverable readable
        # by ordinary repository and download tooling.
        os.chmod(target, 0o644)
    except Exception:
        temporary.unlink(missing_ok=True)
        raise

    size_mb = target.stat().st_size / (1024 * 1024)
    print(f"Built and verified {target} ({len(sources)} files, {size_mb:.2f} MiB).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
