import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const reelDir = path.join(process.cwd(), 'public/images/reel-imgs');
    
    // Check if directory exists
    if (!fs.existsSync(reelDir)) {
      return NextResponse.json({ main: [], remaining: [] });
    }

    const items = fs.readdirSync(reelDir, { withFileTypes: true });
    
    let mainImages = [];
    let remainingImages = [];

    // Find the main folder (e.g. main_img-reel or main_img)
    const mainFolder = items.find(item => item.isDirectory() && (item.name === 'main_img' || item.name === 'main_img-reel'));
    
    if (mainFolder) {
      const mainPath = path.join(reelDir, mainFolder.name);
      mainImages = fs.readdirSync(mainPath)
        .filter(file => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file))
        .map(file => `/images/reel-imgs/${mainFolder.name}/${file}`);
    }

    // Remaining images (files in root reel-imgs folder)
    remainingImages = items
      .filter(item => item.isFile() && /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(item.name))
      .map(item => `/images/reel-imgs/${item.name}`);

    return NextResponse.json({ main: mainImages, remaining: remainingImages });
  } catch (error) {
    console.error('Error reading reel images:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
