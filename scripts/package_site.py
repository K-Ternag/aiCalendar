"""Copy only public website files into dist, ready for GitHub Pages."""
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC_FILES = ("index.html", "guide.html", "data.html", "styles.css", "app.js", ".nojekyll")

def main():
    output = ROOT / "dist"
    output.mkdir(exist_ok=True)
    if output.resolve().parent != ROOT.resolve():
        raise RuntimeError(f"Refusing to package outside {ROOT}")
    for name in PUBLIC_FILES:
        shutil.copy2(ROOT / name, output / name)
    assets_output = output / "assets"
    if assets_output.is_symlink() or assets_output.resolve().parent != output.resolve():
        raise RuntimeError(f"Refusing to replace assets outside {output}")
    if assets_output.exists():
        shutil.rmtree(assets_output)
    shutil.copytree(ROOT / "assets", assets_output)
    print(f"Packaged public site: {output}")

if __name__ == "__main__":
    main()
