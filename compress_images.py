import os
from PIL import Image
import sys

def compress_images(directory, max_dimension=1080, quality=60):
    total_saved = 0
    total_original = 0
    processed_count = 0

    print(f"Scanning directory: {directory} for aggressive compression")
    for root, dirs, files in os.walk(directory):
        for file in files:
            file_lower = file.lower()
            if file_lower.endswith(('.jpg', '.jpeg', '.png')):
                filepath = os.path.join(root, file)
                
                try:
                    original_size = os.path.getsize(filepath)
                    
                    with Image.open(filepath) as img:
                        # Convert to RGB if saving as JPEG
                        if file_lower.endswith(('.jpg', '.jpeg')):
                            if img.mode != 'RGB':
                                img = img.convert('RGB')
                        elif file_lower.endswith('.png'):
                            # For PNG, convert to P mode (Palette) for aggressive compression if possible
                            if img.mode not in ['RGB', 'RGBA', 'P']:
                                img = img.convert('RGBA')
                        
                        # Resize aggressively
                        width, height = img.size
                        if width > max_dimension or height > max_dimension:
                            if width > height:
                                new_width = max_dimension
                                new_height = int(max_dimension * height / width)
                            else:
                                new_height = max_dimension
                                new_width = int(max_dimension * width / height)
                            img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                        
                        temp_filepath = filepath + ".tmp"
                        
                        if file_lower.endswith('.png'):
                            img.save(temp_filepath, "PNG", optimize=True)
                        else:
                            img.save(temp_filepath, "JPEG", quality=quality, optimize=True, progressive=True)
                            
                    compressed_size = os.path.getsize(temp_filepath)
                    # Always overwrite if it's smaller, even slightly
                    if compressed_size < original_size:
                        try:
                            os.replace(temp_filepath, filepath)
                            total_original += original_size
                            total_saved += (original_size - compressed_size)
                            processed_count += 1
                            print(f"Super-Compressed: {file} - Saved {((original_size - compressed_size)/1024/1024):.2f} MB")
                        except PermissionError:
                            os.remove(temp_filepath)
                            print(f"Skipped (LOCKED by Next.js): {file} - Please stop 'npm run dev'")
                    else:
                        os.remove(temp_filepath)
                        print(f"Skipped (Already max compressed): {file}")
                        
                except Exception as e:
                    try:
                        if os.path.exists(filepath + ".tmp"):
                            os.remove(filepath + ".tmp")
                    except:
                        pass
                    print(f"Error processing {filepath}: {e}")

    print("\n--- Aggressive Compression Summary ---")
    print(f"Images Processed: {processed_count}")
    print(f"Total Space Saved: {(total_saved / 1024 / 1024):.2f} MB")

if __name__ == "__main__":
    target_dir = os.path.join(os.getcwd(), 'public', 'images')
    if not os.path.exists(target_dir):
        print(f"Error: Directory {target_dir} does not exist.")
        sys.exit(1)
        
    print("Installing Pillow if missing...")
    os.system(f'"{sys.executable}" -m pip install Pillow')
    
    compress_images(target_dir)
