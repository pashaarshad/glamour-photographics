import os
from PIL import Image

paths = [
    "public/images/our_portfolio/event/",
    "public/images/our_portfolio/corporate/",
    "public/images/our_portfolio/headshots/",
    "public/images/our_portfolio/documentary/"
]

for p in paths:
    print(f"=== {p} ===")
    if not os.path.exists(p):
        print("Path does not exist")
        continue
    for f in os.listdir(p):
        if f.lower().endswith(('.jpg', '.jpeg', '.png')):
            full_path = os.path.join(p, f)
            try:
                with Image.open(full_path) as img:
                    w, h = img.size
                    ratio = w / h
                    orient = "HORIZONTAL" if ratio > 1.1 else "VERTICAL" if ratio < 0.9 else "SQUARE"
                    print(f"File: {f} | Size: {w}x{h} | Ratio: {ratio:.2f} | Orientation: {orient}")
            except Exception as e:
                print(f"File: {f} | Error: {e}")
