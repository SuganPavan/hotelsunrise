import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import roomsData from '@/data/rooms.json';

let cachedRoomsData: any = null;

export async function GET() {
  try {
    if (!cachedRoomsData) {
      const filePath = path.join(process.cwd(), 'src/data/rooms.json');
      const fileData = fs.readFileSync(filePath, 'utf-8');
      cachedRoomsData = JSON.parse(fileData);
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
    
    // Write new rooms data
    fs.writeFileSync(filePath, JSON.stringify(body, null, 2), 'utf-8');
    
    // Update in-memory cache
    cachedRoomsData = body;
    
    return NextResponse.json({ success: true, message: 'Room rates updated successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to write rooms data: ' + error.message }, { status: 500 });
  }
}
