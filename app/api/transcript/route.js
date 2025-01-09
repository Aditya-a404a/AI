

import OpenAI from "openai"

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER,
    defaultHeaders: {
      "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
      "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
    }
  })

export const dynamic = 'force-dynamic';
function extractTextWithSpaces(content) {
    // Use map to extract text and join them with spaces
    return content.map(item => item.text).join(' ');
  }
export async function POST(req) {
    const body =  await req.json()
    console.log(body)
    
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "link": `${body.videoUrl}`
});
const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};
fetch("https://n8n-dev.subspace.money/webhook/15da8db6-5f58-4d38-baf7-024b2b82ec99", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  return new Response(JSON.stringify({ message: 'User created successfully' }), {
    status: 201,
  });
    }
    
