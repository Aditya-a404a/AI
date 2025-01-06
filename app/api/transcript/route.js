

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
    const response = await fetch(`https://api.supadata.ai/v1/youtube/transcript?url=${body.videoUrl}`, {
        method: 'GET',
        headers: {
            'x-api-key': process.env.SUPADATA,
            'Content-Type': 'application/json',
          },
      });
    const b = await response.json()
    console.log(b.content)
    const s = extractTextWithSpaces(b.content)
    const completion = await openai.chat.completions.create({
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            "role": "user",
            "content": `Summarise this so that i can feel what the video was about saving me time and getting the essence of video  ${s}`
          }
        ] 
      })
    return new Response(JSON.stringify({ message: completion.choices[0].message.content }), {
        status: 201,
      });
}