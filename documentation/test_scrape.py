import urllib.request
import re

url = "https://drive.google.com/drive/folders/1zzUTVgbHEGzPcdg2XIFl43GieN7E0uy9"
try:
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        print(f"Page length: {len(html)}")
        # Look for file IDs in the page
        # File IDs in google drive links are 33-44 char alphanumeric strings
        # e.g., /file/d/13dQ7S0PByUC6BpPZo8aV5FU-MuETNXYS/view
        matches = re.findall(r'href="[^"]+file/d/([^/"]+)/view', html)
        print(f"Found matches via href: {len(matches)}")
        print(matches[:5])
        
        # Also let's search for patterns in the JSON content
        # Google Drive stores folder JSON data inside window.INITIAL_STATE or similar
        ids = set(re.findall(r'"([a-zA-Z0-9_-]{33,44})"', html))
        print(f"Total unique ID-like strings: {len(ids)}")
except Exception as e:
    print(f"Error: {e}")
