from PIL import Image

def tint_image(img_path):
    img = Image.open(img_path).convert("RGBA")
    data = img.getdata()
    
    # Indigo color matches tailwind indigo-600: #4f46e5 -> rgb(79, 70, 229)
    target_r, target_g, target_b = 79, 70, 229
    
    new_data = []
    for item in data:
        # If pixel is not fully transparent, change its color to indigo but keep alpha
        # For anti-aliasing, we can blend or just set the color and keep original alpha
        if item[3] > 0:
            # Optionally, we can preserve brightness by converting to grayscale first
            # brightness = int(0.299 * item[0] + 0.587 * item[1] + 0.114 * item[2])
            new_data.append((target_r, target_g, target_b, item[3]))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(img_path, "PNG")
    print("Logo tinted successfully")

if __name__ == "__main__":
    tint_image("public/logo.png")
