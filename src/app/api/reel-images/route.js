import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const mainImages = [
      "/images/reel-imgs/main_img-reel/Bill clinton.jpeg",
      "/images/reel-imgs/main_img-reel/DSC_0204.JPG",
      "/images/reel-imgs/main_img-reel/IMG_0034.JPG",
      "/images/reel-imgs/main_img-reel/Tkm 03.JPG",
      "/images/reel-imgs/main_img-reel/WhatsApp Image 2026-02-09 at 8.29.33 PM (1).jpeg",
      "/images/reel-imgs/main_img-reel/highlights_DSC_0038.jpg",
      "/images/reel-imgs/main_img-reel/vladimir putin.jpg"
    ];

    const remainingImages = [
      "/images/reel-imgs/12 x 18 -2-4x6.jpg",
      "/images/reel-imgs/Cameroon.jpeg",
      "/images/reel-imgs/IMG_0029.JPG",
      "/images/reel-imgs/Srk.jpg"
    ];

    const response = NextResponse.json({ main: mainImages, remaining: remainingImages });
    
    // Set headers to completely disable caching
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    
    return response;
  } catch (error) {
    console.error('Error fetching reel images:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
