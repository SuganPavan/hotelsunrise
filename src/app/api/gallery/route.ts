import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import galleryData from '@/data/gallery.json';

export const dynamic = 'force-dynamic';

let cachedGalleryData: any = null;
const tmpPath = '/tmp/gallery.json';

export async function GET() {
  try {
    if (!cachedGalleryData) {
      // 1. Try to read from writeable /tmp cache first
      if (fs.existsSync(tmpPath)) {
        try {
          const fileData = fs.readFileSync(tmpPath, 'utf-8');
          cachedGalleryData = JSON.parse(fileData);
        } catch (readError) {
          console.warn('Failed to read gallery from /tmp:', readError);
        }
      }
      
      // 2. Fall back to static JSON file if not in /tmp
      if (!cachedGalleryData) {
        const filePath = path.join(process.cwd(), 'src/data/gallery.json');
        if (fs.existsSync(filePath)) {
          try {
            const fileData = fs.readFileSync(filePath, 'utf-8');
            cachedGalleryData = JSON.parse(fileData);
          } catch (jsonError) {
            console.error('Failed to parse static gallery JSON:', jsonError);
          }
        }
      }

      // 3. Ultimate fallback: use statically imported data
      if (!cachedGalleryData) {
        cachedGalleryData = galleryData;
      }
    }
    return NextResponse.json(cachedGalleryData);
  } catch (error: any) {
    return NextResponse.json(galleryData);
  }
}

export async function POST(request: Request) {
  try {
    // Basic auth check
    const authHeader = request.headers.get('authorization');
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    if (authHeader !== `Bearer ${adminPassword}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const filePath = path.join(process.cwd(), 'src/data/gallery.json');
    
    // 1. Attempt writing to local static file system (e.g. localhost, local VPS)
    try {
      fs.writeFileSync(filePath, JSON.stringify(body, null, 2), 'utf-8');
    } catch (writeError: any) {
      console.warn('Local filesystem is read-only. Writing to Vercel /tmp fallback...', writeError.message);
      
      // 2. Fall back to writeable /tmp path on serverless platform (Vercel)
      try {
        fs.writeFileSync(tmpPath, JSON.stringify(body, null, 2), 'utf-8');
      } catch (tmpError: any) {
        console.error('Failed to write to /tmp fallback as well:', tmpError.message);
      }
    }
    
    // Update in-memory cache
    cachedGalleryData = body;
    
    return NextResponse.json({ success: true, message: 'Gallery updated successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to write gallery data: ' + error.message }, { status: 500 });
  }
}
