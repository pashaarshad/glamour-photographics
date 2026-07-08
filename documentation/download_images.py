import os
import gdown

# Define the folders to download and their target paths
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

def main():
    for name, info in folders.items():
        print(f"\n==================================================")
        print(f"Downloading Google Drive folder for: {name}")
        print(f"==================================================")
        
        target_dir = os.path.abspath(info["path"])
        os.makedirs(target_dir, exist_ok=True)
        
        # Use gdown to download the folder contents
        try:
            # gdown.download_folder downloads the folder to the target directory.
            # remaining_ok=True allows ignoring some failures.
            # quiet=False shows the progress bar.
            gdown.download_folder(
                id=info["id"],
                output=target_dir,
                quiet=False
            )
            print(f"Successfully finished downloading: {name} to {target_dir}")
        except Exception as e:
            print(f"Error downloading {name}: {e}")

if __name__ == "__main__":
    main()
