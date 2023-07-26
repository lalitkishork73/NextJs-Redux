import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default async function middleware(req: NextRequest) {
  const responce = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const verify = req.cookies;
  console.log(verify);
  console.log(req.headers);
  console.log(req.cookies.getAll(),"all");

  let url: string | null = req?.url;
  /* if (!verify && url.includes('/todo')) {
    return NextResponse.redirect('http://localhost:3000/login');
  }
  if (verify && url.includes('http://localhost:3000/login')) {
    return NextResponse.redirect('http://localhost:3000/todo');
  } */
}
