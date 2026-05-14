from PIL import Image

def remove_black_background(img_path, threshold=30):
    img = Image.open(img_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        # Check if the pixel is black or very dark
        if item[0] < threshold and item[1] < threshold and item[2] < threshold:
            # Change to transparent
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(img_path, "PNG")
    print("Background removed successfully")

if __name__ == "__main__":
    remove_black_background("public/logo.png", threshold=40)
