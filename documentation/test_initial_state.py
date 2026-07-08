import urllib.request
import re
import json

url = "https://drive.google.com/drive/folders/1zzUTVgbHEGzPcdg2XIFl43GieN7E0uy9"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
req = urllib.request.Request(url, headers=headers)

try:
    with urllib.request.urlopen(req) as r:
        html = r.read().decode('utf-8')
        
    # Search for INITIAL_STATE or INITIAL_DATA
    # In modern Google Drive folders, the file names and IDs are stored in a JS variable:
    # _data_ = ... or within window._INITIAL_DATA_ or window.INITIAL_STATE
    # Let's inspect scripts containing file information
    scripts = re.findall(r'<script[^>]*>(.*?)</script>', html, re.DOTALL)
    print(f"Total script tags: {len(scripts)}")
    
    # Search for file names and IDs in scripts
    for i, s in enumerate(scripts):
        if "1zzUTVgbHEGzPcdg2XIFl43GieN7E0uy9" in s or "corporate" in s.lower():
            print(f"Script {i} contains folder info! Length: {len(s)}")
            # Print a snippet
            print(s[:500])
            
except Exception as e:
    print(f"Error: {e}")
