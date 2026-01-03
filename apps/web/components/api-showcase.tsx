"use client"

import { useState } from "react"
import { Card } from "@workspace/ui/components/card"

const codeExamples = {
  curl: `curl -X POST https://api.podnex.io/v1/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Welcome to my podcast!",
    "voice_id": "narrator_professional",
    "output_format": "mp3_44100_128"
  }'`,
  python: `import podnex

client = podnex.Client("YOUR_API_KEY")

# Generate podcast audio
audio = client.generate(
    text="Welcome to my podcast!",
    voice_id="narrator_professional",
    output_format="mp3_44100_128"
)

# Save to file
audio.save("episode.mp3")`,
  javascript: `import { PodnexClient } from '@podnex/sdk';

const client = new PodnexClient({
  apiKey: 'YOUR_API_KEY'
});

// Generate podcast audio
const audio = await client.generate({
  text: 'Welcome to my podcast!',
  voiceId: 'narrator_professional',
  outputFormat: 'mp3_44100_128'
});

await audio.save('episode.mp3');`
}

export function APIShowcase() {
  const [activeTab, setActiveTab] = useState<'curl' | 'python' | 'javascript'>('curl')

  return (
    <section className="section-padding bg-[var(--studio-surface)]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--studio-text-main)]">
              API-First Platform
            </h2>
            <p className="text-lg text-[var(--studio-text-muted)] mb-6">
              Build podcast generation into your applications with our powerful API. 
              Generate audio from text, clone voices, and process audio programmatically.
            </p>
            <ul className="space-y-4">
              {[
                { icon: "⚡", text: "Lightning-fast generation (< 2s per minute)" },
                { icon: "🔒", text: "Enterprise-grade security & privacy" },
                { icon: "📊", text: "Real-time analytics & monitoring" },
                { icon: "🌍", text: "99.9% uptime SLA guarantee" }
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-[var(--studio-text-muted)]">
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Code Example */}
          <Card variant="console" className="p-6">
            <div className="flex gap-2 mb-4 border-b border-white/10 pb-3">
              {(['curl', 'python', 'javascript'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-mono rounded-t transition-colors ${
                    activeTab === tab
                      ? 'bg-[var(--studio-accent)] text-black'
                      : 'bg-transparent text-[var(--studio-text-muted)] hover:text-[var(--studio-text-main)]'
                  }`}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
            
            <div className="bg-[#0a0a0a] rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm font-mono">
                <code className="text-[var(--studio-text-main)]">
                  {codeExamples[activeTab]}
                </code>
              </pre>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-[var(--studio-text-muted)]">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>API Status: Operational</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
