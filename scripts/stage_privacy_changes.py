"""Stage hash-guarded changes for the adjacent Android and server repositories."""
from pathlib import Path
import hashlib
import json

ROOT = Path(__file__).resolve().parents[1]
STAGE = ROOT / 'artifacts/privacy-implementation'
REPOS = {'app': Path('D:/personalApp'), 'admin': Path('D:/personalApp-admin')}

def stage(repo, relative):
    source = REPOS[repo] / relative
    target = STAGE / repo / relative
    target.parent.mkdir(parents=True, exist_ok=True)
    data = source.read_bytes() if source.exists() else None
    manifest_path = STAGE / 'manifest.json'
    manifest = json.loads(manifest_path.read_text()) if manifest_path.exists() else {}
    key = repo + '/' + relative
    if key not in manifest:
        manifest[key] = hashlib.sha256(data).hexdigest() if data is not None else None
        manifest_path.write_text(json.dumps(manifest, indent=2), encoding='utf-8')
    if not target.exists() and data is not None:
        target.write_bytes(data)
    return target

if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('--apply', action='store_true')
    parser.add_argument('--checkpoint', action='store_true')
    args = parser.parse_args()
    if args.checkpoint:
        manifest_path = STAGE / 'manifest.json'
        manifest = json.loads(manifest_path.read_text())
        for key in manifest:
            repo, relative = key.split('/', 1)
            data = (REPOS[repo] / relative).read_bytes()
            if data != (STAGE / key).read_bytes():
                raise RuntimeError(f'Concurrent change since application: {key}')
            manifest[key] = hashlib.sha256(data).hexdigest()
        manifest_path.write_text(json.dumps(manifest, indent=2), encoding='utf-8')
        print('Verified applied checkpoint; subsequent changes remain hash-guarded.')
    if args.apply:
        manifest = json.loads((STAGE / 'manifest.json').read_text())
        changes = []
        for key, expected in manifest.items():
            repo, relative = key.split('/', 1)
            destination = (REPOS[repo] / relative).resolve()
            if not destination.is_relative_to(REPOS[repo].resolve()):
                raise RuntimeError('Destination outside repository')
            actual = hashlib.sha256(destination.read_bytes()).hexdigest() if destination.exists() else None
            staged = STAGE / key
            new_hash = hashlib.sha256(staged.read_bytes()).hexdigest()
            if actual not in (expected, new_hash):
                raise RuntimeError(f'Concurrent change: {key}')
            changes.append((staged, destination))
        for staged, destination in changes:
            destination.parent.mkdir(parents=True, exist_ok=True)
            destination.write_bytes(staged.read_bytes())
        print(f'Applied {len(changes)} hash-guarded files; no deployment or database changes.')
