import os
from PIL import Image
import sys

def compress_images(directory, max_dimension=1920, quality=80):
    total_saved = 0
    total_original = 0
    processed_count = 0

    print(f"Scanning directory: {directory}")
    for root, dirs, files in os.walk(directory):
        for file in files:
            file_lower = file.lower()
            if file_lower.endswith(('.jpg', '.jpeg', '.png')):
                filepath = os.path.join(root, file)
                
                try:
                    original_size = os.path.getsize(filepath)
                    
                    with Image.open(filepath) as img:
                        # Convert to RGB if saving as JPEG and image has alpha channel
                        if img.format in ['JPEG', 'JPG'] or file_lower.endswith(('.jpg', '.jpeg')):
                            if img.mode != 'RGB':
                                img = img.convert('RGB')
                        
                        # Resize if too large
                        width, height = img.size
                        if width > max_dimension or height > max_dimension:
                            if width > height:
                                new_width = max_dimension
                                new_height = int(max_dimension * height / width)
                            else:
                                new_height = max_dimension
                                new_width = int(max_dimension * width / height)
                            img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                        
                        # Save to a temporary file
                        temp_filepath = filepath + ".tmp"
                        
                        if file_lower.endswith('.png'):
                            img.save(temp_filepath, "PNG", optimize=True)
                        else:
                            img.save(temp_filepath, "JPEG", quality=quality, optimize=True)
                            
                    # Replace original
                    compressed_size = os.path.getsize(temp_filepath)
                    if compressed_size < original_size:
                        os.replace(temp_filepath, filepath)
                        total_original += original_size
                        total_saved += (original_size - compressed_size)
                        processed_count += 1
                        print(f"Compressed: {file} - Saved {((original_size - compressed_size)/1024/1024):.2f} MB")
                    else:
                        # If somehow it got larger, keep original
                        os.remove(temp_filepath)
                        print(f"Skipped (No size benefit): {file}")
                        
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")

    print("\n--- Compression Summary ---")
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
