import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export default async function middleware(req: NextRequest) {
  const verify: string | undefined =
    req.cookies.get('token')?.value;

  // Access cookies in server like this
  // console.log(req.cookies.get('token')?.value);

  let url: string | null = req?.url;
  if (!verify && url.includes('/todo')) {
    return NextResponse.redirect('http://localhost:3000/login');
  }
  if (verify && url.includes('/login')) {
    return NextResponse.redirect('http://localhost:3000/todo');
  }
}
