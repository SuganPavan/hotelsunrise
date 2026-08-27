import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import roomsData from '@/data/rooms.json';

let cachedRoomsData: any = null;
const tmpPath = '/tmp/rooms.json';

export async function GET() {
  try {
    if (!cachedRoomsData) {
      // 1. Try to read from writeable /tmp cache first
      if (fs.existsSync(tmpPath)) {
        try {
          const fileData = fs.readFileSync(tmpPath, 'utf-8');
          cachedRoomsData = JSON.parse(fileData);
        } catch (readError) {
          console.warn('Failed to read rooms from /tmp:', readError);
        }
      }
      
      // 2. Fall back to static JSON file if not in /tmp
      if (!cachedRoomsData) {
        const filePath = path.join(process.cwd(), 'src/data/rooms.json');
        const fileData = fs.readFileSync(filePath, 'utf-8');
        cachedRoomsData = JSON.parse(fileData);
      }
    }
    return NextResponse.json(cachedRoomsData);
  } catch (error: any) {
    return NextResponse.json(roomsData);
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
    const filePath = path.join(process.cwd(), 'src/data/rooms.json');
    
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
    cachedRoomsData = body;
    
    return NextResponse.json({ success: true, message: 'Room rates updated successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to write rooms data: ' + error.message }, { status: 500 });
  }
}
