from PIL import Image, ImageDraw, ImageFont
import os

def replace_text_in_logo(img_path):
    img = Image.open(img_path).convert("RGBA")
    width, height = img.size
    
    draw = ImageDraw.Draw(img)
    
    # 1. Erase the old text by drawing a white rectangle over the bottom 35%
    crop_start = int(height * 0.65)
    draw.rectangle([0, crop_start, width, height], fill=(255, 255, 255, 255))
    
    # 2. Write the new text
    text = "YUVI YATRA TRAVELS"
    
    # Load Segoe UI Bold, or Arial if not found
    font_path = "C:\\Windows\\Fonts\\segoeuib.ttf"
    if not os.path.exists(font_path):
        font_path = "C:\\Windows\\Fonts\\arialbd.ttf"
        
    # Dynamically find the best font size so the longer text fits
    font_size = 130
    font = ImageFont.load_default()
    text_w = 0
    text_h = 0
    
    while font_size > 20:
        try:
            font = ImageFont.truetype(font_path, font_size)
        except Exception:
            font = ImageFont.load_default()
            break
            
        try:
            bbox = draw.textbbox((0, 0), text, font=font)
            text_w = bbox[2] - bbox[0]
            text_h = bbox[3] - bbox[1]
        except AttributeError:
            text_w, text_h = draw.textsize(text, font=font)
            
        if text_w < width * 0.9:
            break
        font_size -= 5
        
    # Calculate position
    x = (width - text_w) / 2
    # Place it vertically in the middle of the erased area
    y = crop_start + ((height - crop_start - text_h) / 2) - 30
    
    # Deep indigo/slate color
    text_color = (15, 23, 42, 255) # slate-900
    
    draw.text((x, y), text, fill=text_color, font=font)
    
    # Optional: We can add the tagline smaller below it
    tagline = "Safar Jo Kabhi Khatam Na Ho"
    try:
        font_tag = ImageFont.truetype("C:\\Windows\\Fonts\\segoeui.ttf", 35)
        bbox2 = draw.textbbox((0, 0), tagline, font=font_tag)
        t_w = bbox2[2] - bbox2[0]
        x2 = (width - t_w) / 2
        y2 = y + text_h + 30
        draw.text((x2, y2), tagline, fill=(100, 116, 139, 255), font=font_tag)
    except Exception:
        pass

    img.save(img_path, "PNG")
    print("Text replaced successfully!")

if __name__ == "__main__":
    replace_text_in_logo("public/logo.png")
