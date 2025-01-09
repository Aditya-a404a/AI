"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Youtube, History, LogOut } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import  useTypingEffect  from "@/app/utils/typing"
import  useAuth  from "@/app/hooks/useAuth"
function extractContent(jsonString) {
  // Parse the JSON string
  const parsedData = JSON.parse(jsonString);
  
  // Navigate to the content part
  const content = parsedData[0].choices[0].message.content;
  
  return content;
}
export default function DashboardPage() {
  useAuth();
  const [videoUrl, setVideoUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [transcript, setTranscript] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Basic YWRpdHlhOmNsYXNo")
    
    const raw = JSON.stringify({
      "link": `${videoUrl}`
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    fetch("https://n8n-dev.subspace.money/webhook/15da8db6-5f58-4d38-baf7-024b2b82ec99", requestOptions)
    .then((response) => response.text())
    .then((result) => setSummary(extractContent(result)))
    .catch((error) => console.error(error));
  };
  
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Youtube className="h-6 w-6 text-red-600" />
            <span className="font-bold text-xl">TranscriptAI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <History className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-4">
                  <Input
                    type="url"
                    placeholder="https://www.youtube.com/watch?v="
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    required
                  />
                  <Button type="submit">Summarize</Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {summary && (
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Summary</h3>
                {summary}
                
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}