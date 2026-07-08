import os
import time
import random
import gdown

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

def download_with_retry(folder_id, target_dir):
    retries = 5
    delay = 5
    for attempt in range(retries):
        try:
            print(f"Attempt {attempt + 1} of {retries} for folder {folder_id}...")
            # We use gdown's folder download capability
            gdown.download_folder(
                id=folder_id,
                output=target_dir,
                quiet=True # Less output keeps Google connections cleaner
            )
            print(f"Folder downloaded successfully!")
            return True
        except Exception as e:
            print(f"Attempt {attempt + 1} failed: {e}")
            if attempt < retries - 1:
                # Add a sleep with random jitter to allow rate-limiting cooldown
                sleep_time = delay + random.uniform(2, 6)
                print(f"Sleeping for {sleep_time:.2f} seconds before retrying...")
                time.sleep(sleep_time)
                delay *= 2 # Exponential backoff
    return False

def main():
    print("Starting robust download process...")
    for name, info in folders.items():
        print(f"\n==================================================")
        print(f"PROCESSING: {name.upper()}")
        print(f"==================================================")
        
        target_dir = os.path.abspath(info["path"])
        os.makedirs(target_dir, exist_ok=True)
        
        # Count existing files before download
        initial_files = len([f for f in os.listdir(target_dir) if os.path.isfile(os.path.join(target_dir, f))])
        print(f"Target directory: {target_dir} (Currently contains {initial_files} files)")
        
        if name == "our_portfolio" and initial_files >= 40:
            print("Skipping our_portfolio as it is already downloaded.")
            continue
            
        success = download_with_retry(info["id"], target_dir)
        
        final_files = len([f for f in os.listdir(target_dir) if os.path.isfile(os.path.join(target_dir, f))])
        print(f"Result for {name}: Success={success}. Now contains {final_files} files.")
        
        # Pause slightly longer between different folders to avoid hitting concurrent limit
        time.sleep(10)

if __name__ == "__main__":
    main()
