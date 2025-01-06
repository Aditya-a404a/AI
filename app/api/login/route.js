
import { neon } from "@neondatabase/serverless";
import { env } from "node:process";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { findUserByEmail } from '@/app/actions';
const SECRET_KEY = 'your_secret_key'; // Use a strong, secure key
export const dynamic = 'force-dynamic';
export  async function POST(req) {
    const body =  await req.json()
    
    console.log(body.email)
    console.log(body.password)
    const u = await findUserByEmail(body.email)
    const user = u.rows[0]
    console.log(user)
    if (!user) {
      return new Response(JSON.stringify({ message: 'User not found' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    console.log(user.password)
    const isPasswordCorrect = await bcrypt.compare(body.password, user.password);
    if (!isPasswordCorrect) {
      return new Response(JSON.stringify({ message: 'NOT' }), {
        status: 201,
      });
    }
    const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    return new Response(JSON.stringify({ token: token }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

   
}