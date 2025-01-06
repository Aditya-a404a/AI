import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Youtube, FileText, Zap } from 'lucide-react';
import { findUserByEmail } from './actions';
export default function Home() {
  findUserByEmail("adityaArora@gmail.com");
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Youtube className="h-6 w-6 text-red-600" />
            <span className="font-bold text-xl">TranscriptAI</span>
          </div>
          <div className="space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up </Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6">
                Transform YouTube Videos into
                <span className="text-primary block mt-2">Actionable Summaries</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Get instant AI-powered summaries of any YouTube video. Save time and extract key insights in seconds.
              </p>
              <Link href="/signup">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-20">
              <div className="p-6 rounded-lg border bg-card">
                <FileText className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Summaries</h3>
                <p className="text-muted-foreground">
                  Get concise, accurate summaries of any YouTube video content in seconds.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
                <p className="text-muted-foreground">
                  Just paste a YouTube URL and get your summary immediately.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <Youtube className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Any Video</h3>
                <p className="text-muted-foreground">
                  Works with any public YouTube video with available transcripts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          © {new Date().getFullYear()} TranscriptAI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}