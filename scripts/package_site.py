"""Copy only public website files into dist, ready for GitHub Pages."""
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC_FILES = ("index.html", "guide.html", "data.html", "styles.css", "app.js", ".nojekyll")

def main():
    output = ROOT / "dist"
    output.mkdir(exist_ok=True)
    for name in PUBLIC_FILES:
        shutil.copy2(ROOT / name, output / name)
    shutil.copytree(ROOT / "assets", output / "assets", dirs_exist_ok=True)
    print(f"Packaged public site: {output}")

if __name__ == "__main__":
    main()
