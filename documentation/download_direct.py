import os
import time
import random
import urllib.request
import re
import json
import gdown
import codecs

folders = {
    "our_portfolio": {
        "id": "1rsDpjvMpMSME-7uqMSQOubXZIoa8ys1U",
        "path": "public/images/our_portfolio"
    },
    "corporate_and_office": {
        "id": "1zzUTVgbHEGzPcdg2XIFl43GieN7E0uy9",
        "path": "public/images/corporate_and_office"
    },
    "cii": {
        "id": "1rdFQVs39k3DS-xVMx2IiN-GGJCuF1fHU",
        "path": "public/images/cii"
    },
    "cgi": {
        "id": "1ofYPka6WTWlMYTbirjot9T4kT8lJe5ja",
        "path": "public/images/cgi"
    },
    "tcs": {
        "id": "1-MCa3i-pLJgUQibt5r9J5wBqqtRHFf3v",
        "path": "public/images/tcs"
    },
    "rtx": {
        "id": "1cJfoE5eOCJXqJDYYnAfApzh-2dh0_YZD",
        "path": "public/images/rtx"
    },
    "tata_elxsi": {
        "id": "1rYnCIeDs6lYqv2dlxW2B2fRWds0tssbs",
        "path": "public/images/tata_elxsi"
    },
    "presidency": {
        "id": "1rJ9u79aT8gOew73QDHB4_lD84qczHZ9F",
        "path": "public/images/presidency"
    }
}

def clean_unicode_escape(raw):
    # Safe decoding of hex strings in Python 3
    # Use codecs to decode backslash escapes safely
    return codecs.escape_decode(raw.encode('utf-8'))[0].decode('utf-8', errors='ignore')

def get_folder_files(folder_id):
    url = f"https://drive.google.com/drive/folders/{folder_id}"
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
    req = urllib.request.Request(url, headers=headers)
    
    try:
        with urllib.request.urlopen(req) as r:
            html = r.read().decode('utf-8')
            
        # Match window['_DRIVE_ivd'] content
        match = re.search(r"window\['_DRIVE_ivd'\]\s*=\s*'([^']*)'", html)
        if not match:
            return []
            
        decoded = clean_unicode_escape(match.group(1))
        data = json.loads(decoded)
        
        files_list = []
        # data[0] contains the file list elements
        if data and len(data) > 0 and isinstance(data[0], list):
            for item in data[0]:
                if len(item) > 3 and isinstance(item[0], str) and isinstance(item[2], str):
                    # Check if it's a file, not a folder
                    # Folders in Google Drive initial state usually have MIME type 'application/vnd.google-apps.folder'
                    if item[3] != 'application/vnd.google-apps.folder':
                        files_list.append({
                            "id": item[0],
                            "name": item[2],
                            "mime": item[3]
                        })
        return files_list
    except Exception as e:
        print(f"Error fetching folder listing for {folder_id}: {e}")
        return []

def main():
    print("Starting direct file downloader...")
    
    for name, info in folders.items():
        print(f"\n==================================================")
        print(f"PROCESSING: {name.upper()}")
        print(f"==================================================")
        
        target_dir = os.path.abspath(info["path"])
        os.makedirs(target_dir, exist_ok=True)
        
        print("Fetching file listing from Google Drive...")
        files = get_folder_files(info["id"])
        print(f"Found {len(files)} files in folder.")
        
        if not files:
            print("No files found or unable to scrape listing. Moving to next.")
            continue
            
        for index, file_info in enumerate(files):
            file_id = file_info["id"]
            filename = file_info["name"]
            
            # Clean filename to be safe for OS filesystem
            safe_filename = "".join([c for c in filename if c.isalpha() or c.isdigit() or c in '._- ']).strip()
            dest_path = os.path.join(target_dir, safe_filename)
            
            # Check if file already exists with size > 0
            if os.path.exists(dest_path) and os.path.getsize(dest_path) > 0:
                print(f"[{index+1}/{len(files)}] File already exists: {safe_filename} (Skipping)")
                continue
                
            print(f"[{index+1}/{len(files)}] Downloading: {safe_filename}...")
            
            # Download file using gdown.download (very robust, handles large files)
            retries = 3
            success = False
            for attempt in range(retries):
                try:
                    gdown.download(id=file_id, output=dest_path, quiet=True)
                    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 0:
                        print("Download successful!")
                        success = True
                        break
                except Exception as e:
                    print(f"Attempt {attempt+1} failed: {e}")
                    if attempt < retries - 1:
                        time.sleep(2 + random.random() * 2)
            
            if not success:
                print(f"Failed to download: {safe_filename}")
                
            # Pause slightly between files to respect rate limits
            time.sleep(1.0 + random.random() * 1.5)

if __name__ == "__main__":
    main()
