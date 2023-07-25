import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(req: NextRequest) {
  let verify: boolean = false;
  let url: string | null = req?.url;
  console.log(verify);
  if (!verify && url.includes('/todo')) {
    return NextResponse.redirect('http://localhost:3000/login');
  }
  if (verify && url.includes('http://localhost:3000/login')) {
    return NextResponse.redirect('http://localhost:3000/todo');
  }
}
