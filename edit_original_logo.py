from PIL import Image

def edit_logo(img_path):
    img = Image.open(img_path).convert("RGBA")
    width, height = img.size
    
    # Crop the bottom 35% of the image to remove the text
    # Top 65% contains the car graphic
    crop_height = int(height * 0.65)
    cropped_img = img.crop((0, 0, width, crop_height))
    
    # Make the white background transparent
    data = cropped_img.getdata()
    new_data = []
    # White is usually close to 255,255,255
    for item in data:
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    cropped_img.putdata(new_data)
    
    # Further crop to bounding box to remove excess padding
    bbox = cropped_img.getbbox()
    if bbox:
        final_img = cropped_img.crop(bbox)
        final_img.save(img_path, "PNG")
        print("Logo cropped and text removed successfully")
    else:
        cropped_img.save(img_path, "PNG")
        print("Logo processed without bbox crop")

if __name__ == "__main__":
    edit_logo("public/logo.png")
