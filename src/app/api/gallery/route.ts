import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'src/data/gallery.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    return NextResponse.json(JSON.parse(fileData));
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to read gallery data: ' + error.message }, { status: 500 });
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
    
    // Write new gallery data
    fs.writeFileSync(filePath, JSON.stringify(body, null, 2), 'utf-8');
    
    return NextResponse.json({ success: true, message: 'Gallery updated successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to write gallery data: ' + error.message }, { status: 500 });
  }
}
