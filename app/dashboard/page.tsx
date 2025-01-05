"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Youtube, History, LogOut } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import  useTypingEffect  from "@/app/utils/typing"
export default function DashboardPage() {
  const [videoUrl, setVideoUrl] = useState("");
  const [summary, setSummary] = useState("");
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add video processing logic here
    setSummary("Summary will appear here...");
    

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
                    placeholder="Paste YouTube video URL"
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
                <textarea>
                
                </textarea>
                
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}