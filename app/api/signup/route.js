// pages/api/signup.js

import bcrypt from 'bcrypt';
import { addUser, findUserByEmail } from '@/app/actions';
export const dynamic = 'force-dynamic';
export async function POST(req) {
    const body = await req.json()
    const hashedPassword = await bcrypt.hash(body.password, 10);
    addUser(body.email,hashedPassword);
    console.log("succes")
    return new Response(JSON.stringify({ message: 'User created successfully' }), {
      status: 201,
    });
  
}
