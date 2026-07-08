import os
import time
import random
import urllib.request
import re
import json
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
    return codecs.escape_decode(raw.encode('utf-8'))[0].decode('utf-8', errors='ignore')

def get_folder_files(folder_id):
    url = f"https://drive.google.com/drive/folders/{folder_id}"
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
    req = urllib.request.Request(url, headers=headers)
    
    try:
        with urllib.request.urlopen(req) as r:
            html = r.read().decode('utf-8')
            
        match = re.search(r"window\['_DRIVE_ivd'\]\s*=\s*'([^']*)'", html)
        if not match:
            return []
            
        decoded = clean_unicode_escape(match.group(1))
        data = json.loads(decoded)
        
        files_list = []
        if data and len(data) > 0 and isinstance(data[0], list):
            for item in data[0]:
                if len(item) > 3 and isinstance(item[0], str) and isinstance(item[2], str):
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

def download_file_direct(file_id, dest_path):
    url = f"https://drive.google.com/uc?export=download&id={file_id}"
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
    req = urllib.request.Request(url, headers=headers)
    
    try:
        with urllib.request.urlopen(req) as response:
            # Check content type. If it is text/html, it might be a rate-limit block or virus warning
            content_type = response.info().get_content_type()
            if 'text/html' in content_type:
                html_preview = response.read().decode('utf-8', errors='ignore')[:1000]
                if "confirm=" in html_preview:
                    # Parse confirm code for large files
                    confirm_match = re.search(r'confirm=([a-zA-Z0-9_]+)', html_preview)
                    if confirm_match:
                        confirm_code = confirm_match.group(1)
                        confirm_url = f"https://drive.google.com/uc?export=download&confirm={confirm_code}&id={file_id}"
                        req_confirm = urllib.request.Request(confirm_url, headers=headers)
                        with urllib.request.urlopen(req_confirm) as resp_conf:
                            with open(dest_path, 'wb') as f:
                                f.write(resp_conf.read())
                        return True
                print("HTML content returned instead of file.")
                return False
                
            # If it is a direct file stream, download it
            with open(dest_path, 'wb') as f:
                f.write(response.read())
            return True
    except Exception as e:
        print(f"Native download error for ID {file_id}: {e}")
        return False

def main():
    print("Starting native file downloader...")
    
    for name, info in folders.items():
        print(f"\n==================================================")
        print(f"PROCESSING: {name.upper()}")
        print(f"==================================================")
        
        target_dir = os.path.abspath(info["path"])
        os.makedirs(target_dir, exist_ok=True)
        
        # Skip our_portfolio if it's already mostly populated
        initial_files = len([f for f in os.listdir(target_dir) if os.path.isfile(os.path.join(target_dir, f))])
        if name == "our_portfolio" and initial_files >= 40:
            print("Skipping our_portfolio as it is already downloaded.")
            continue
            
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
            
            if os.path.exists(dest_path) and os.path.getsize(dest_path) > 0:
                print(f"[{index+1}/{len(files)}] File already exists: {safe_filename} (Skipping)")
                continue
                
            print(f"[{index+1}/{len(files)}] Downloading: {safe_filename}...")
            
            success = False
            for attempt in range(3):
                if download_file_direct(file_id, dest_path):
                    # Verify download file exists and has size
                    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 0:
                        print("Download successful!")
                        success = True
                        break
                print(f"Attempt {attempt+1} failed. Retrying...")
                time.sleep(2 + random.random() * 2)
            
            if not success:
                print(f"Failed to download: {safe_filename}")
                
            # Pause slightly between files
            time.sleep(0.5 + random.random() * 0.5)

if __name__ == "__main__":
    main()
