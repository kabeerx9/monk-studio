"use server"

import fs from 'fs';
import path from 'path';

export async function submitReviewAction(formData: FormData) {
  try {
    let imagePath = '';
    
    // Handle image upload if provided
    const imageFile = formData.get('image') as File | null;
    if (imageFile && imageFile.size > 0) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      // Generate a unique filename based on the current timestamp
      const filename = `upload-${Date.now()}-${imageFile.name.replace(/[^a-zA-Z0-9.]/g, '')}`;
      const uploadDir = path.join(process.cwd(), 'public', 'testimonials');
      
      // Ensure the testimonials directory exists
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      
      fs.writeFileSync(path.join(uploadDir, filename), buffer);
      imagePath = `/testimonials/${filename}`;
    }

    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      role: formData.get('role'),
      review: formData.get('review'),
      image: imagePath,
      date: new Date().toISOString()
    };

    const filePath = path.join(process.cwd(), 'client-reviews.json');
    let reviews = [];
    
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      reviews = JSON.parse(fileData);
    }
    
    reviews.push(data);
    fs.writeFileSync(filePath, JSON.stringify(reviews, null, 2));
    
    return { success: true };
  } catch (error) {
    console.error("Failed to save review:", error);
    return { success: false };
  }
}
