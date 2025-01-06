"use server";
import { neon } from "@neondatabase/serverless";
import { env } from "node:process";
import { db } from '@vercel/postgres';
const client = await db.connect();
export async function getUser() {
    
    await client.sql `SELECT COUNT(*) FROM public.users`;
    
}
export async function findUserByEmail(email)
{
    
    const d = await client.sql`SELECT * FROM public.users WHERE email =${email}`
    return d

    
}
export async function addUser(email,password)
{
    await client.sql `INSERT INTO public.users (password, email) VALUES (${password},${email})`
}

