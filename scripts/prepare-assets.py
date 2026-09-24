"""Create web-sized copies; source files in the Drive archive remain untouched."""
from pathlib import Path
from PIL import Image, ImageOps
import shutil

ROOT = Path(__file__).resolve().parents[1]
DRIVE = ROOT / 'drive-download-20260923T160421Z-1-001'
OUT = ROOT / 'public/images'
OUT.mkdir(parents=True, exist_ok=True)

assets = {
    'lumen-day': 'Highschool works/IMG_5421.jpg',
    'lumen-night': 'Highschool works/IMG_5422.jpg',
    'lumen-balcony': 'Highschool works/IMG_5420.jpg',
    'lumen-entry': 'Highschool works/IMG_5423.jpg',
    'lumen-light': 'Highschool works/IMG_5429.jpg',
    'lumen-terrace': 'Highschool works/IMG_5427.jpg',
    'wave-tower': 'Highschool works/IMG_5437.jpg',
    'gateway-front': 'Year 2 Work/City Planning Project/20260429 - models - 252.jpeg',
    'gateway-section': 'Year 2 Work/City Planning Project/20260429 - models - 256.jpeg',
    'gateway-angle': 'Year 2 Work/City Planning Project/20260429 - models - 254.jpeg',
    'bedroom-before': 'Year 2 Work/Bedroom Project/Render Before.png',
    'bedroom-after': 'Year 2 Work/Bedroom Project/Render After.png',
}

for name, source in assets.items():
    image = ImageOps.exif_transpose(Image.open(DRIVE / source)).convert('RGB')
    image.thumbnail((2000, 1600), Image.Resampling.LANCZOS)
    image.save(OUT / f'{name}.webp', quality=88)
    print(f'{name}: {image.size} ← {source}')

# Extract the drawing-only plate from the updated portfolio, preserving its caption.
pages = ROOT / 'tmp/drive-review/Kassidy Zastrow Portfolio 2026'
for number, name in [(10, 'wave-facade'), (19, 'bedroom-sections'), (20, 'bedroom-plans'), (22, 'gateway-planning')]:
    image = Image.open(pages / f'Kassidy Zastrow Portfolio 2026-{number}.png').convert('RGB')
    image.thumbnail((2000, 1600), Image.Resampling.LANCZOS)
    image.save(OUT / f'{name}.webp', quality=90)

docs = ROOT / 'public/documents'
docs.mkdir(parents=True, exist_ok=True)
shutil.copyfile(DRIVE / 'Resume, Cover letter, Portfolio/Kassidy Zastrow 2026 Official Resume (1).pdf', docs / 'kassidy-zastrow-resume.pdf')
