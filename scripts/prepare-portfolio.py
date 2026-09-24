"""Preserve the Drive portfolio pages and package them into a downloadable PDF."""
from pathlib import Path
from zipfile import ZipFile
from io import BytesIO
from PIL import Image
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from pypdf import PdfReader
import shutil

root = Path(__file__).resolve().parents[1]
archive = root / 'drive-download-20260923T160421Z-1-001/Resume, Cover letter, Portfolio/Kassidy Zastrow Portfolio 2026 (1).zip'
output = root / 'output/pdf/kassidy-zastrow-portfolio.pdf'
output.parent.mkdir(parents=True, exist_ok=True)
pdf = canvas.Canvas(str(output), pageCompression=1)
pdf.setTitle('Kassidy Zastrow — Architecture Portfolio 2026')
pdf.setAuthor('Kassidy Zastrow')
plates = {12: 'hive-drawings', 13: 'hive-process', 14: 'hive-model', 15: 'hive-model-reverse'}
with ZipFile(archive) as source:
    pages = sorted((n for n in source.namelist() if n.endswith('.png') and not n.startswith('__MACOSX')), key=lambda n: int(Path(n).stem.rsplit('-', 1)[1]))
    assert len(pages) == 23
    for number, name in enumerate(pages, 1):
        image = Image.open(BytesIO(source.read(name))).convert('RGB')
        width, height = image.size
        pdf.setPageSize((width * .5, height * .5))
        pdf.drawImage(ImageReader(image), 0, 0, width=width * .5, height=height * .5)
        pdf.showPage()
        if number in plates:
            image.thumbnail((2000, 1600), Image.Resampling.LANCZOS)
            image.save(root / f'public/images/{plates[number]}.webp', quality=90)
pdf.save()
assert len(PdfReader(output).pages) == 23
shutil.copyfile(output, root / 'public/documents/kassidy-zastrow-portfolio.pdf')
print(f'Packaged 23 unchanged pages; PDF size {output.stat().st_size / 1024 / 1024:.1f} MB')
