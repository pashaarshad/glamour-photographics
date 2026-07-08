import urllib.request
import re
import json

url = "https://drive.google.com/drive/folders/1zzUTVgbHEGzPcdg2XIFl43GieN7E0uy9"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
req = urllib.request.Request(url, headers=headers)

try:
    with urllib.request.urlopen(req) as r:
        html = r.read().decode('utf-8')
        
    # Match: window['_DRIVE_ivd'] = '...';
    match = re.search(r"window\['_DRIVE_ivd'\]\s*=\s*'([^']*)'", html)
    if match:
        raw_data = match.group(1)
        # The data uses hex escapes like \x5b (which is '[')
        # We can decode it using codecs or unicode_escape
        decoded_data = raw_data.encode().decode('unicode-escape')
        # Convert JS array representation into parseable JSON
        # Since it starts with an array of file records, let's load it
        data = json.loads(decoded_data)
        
        # The data format is usually a list of file details:
        # data[0] contains the list of files
        files_list = data[0]
        print(f"Total files found in window['_DRIVE_ivd']: {len(files_list)}")
        
        count = 0
        for item in files_list:
            if len(item) > 3 and isinstance(item[0], str) and isinstance(item[2], str):
                file_id = item[0]
                filename = item[2]
                mime_type = item[3]
                print(f"File ID: {file_id} | Name: {filename} | MIME: {mime_type}")
                count += 1
                if count >= 5:
                    break
    else:
        print("Could not find window['_DRIVE_ivd'] in HTML.")
except Exception as e:
    print(f"Error: {e}")
