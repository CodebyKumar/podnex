"use client"

import { Button } from "@workspace/ui/components/button"
import { Card } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import Image from "next/image"

export function HeroConsole() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/image.png" 
          alt="Podcast Studio" 
          className="w-full h-full object-cover"
          fill
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--studio-bg-dark)]/90 via-[var(--studio-bg-dark)]/80 to-[var(--studio-bg-dark)]/95" />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--studio-accent)] rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--studio-accent)] rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Main Console */}
      <div className="container mx-auto px-4 relative z-10">
        <Card variant="console" className="max-w-4xl mx-auto p-4 md:p-6">
          {/* LCD Screen */}
          <div className="lcd-screen rounded-xl p-8 md:p-12 border-2 border-[#333]">
            <div className="relative z-10">
              <Badge variant="studio" className="mb-4 uppercase tracking-wider">
                <span className="led-indicator w-2 h-2 mr-2 bg-[var(--studio-accent)]" />
                System Online
              </Badge>
              
              <h1 className="headline-caps text-5xl md:text-7xl font-bold text-[var(--studio-text-main)] mb-4">
                PODNEX
                <br />
                <span className="text-3xl md:text-5xl text-[var(--studio-accent)]">
                  STUDIO.
                </span>
              </h1>
              
              <p className="font-mono text-sm md:text-base text-[var(--studio-accent)] mb-6">
                {'>'} INITIALIZING AUDIO ENGINE...<br />
                {'>'} READY TO RECORD.
              </p>
              
              {/* Progress Bar */}
              <div className="w-full h-1 bg-[#333] rounded-full mb-6">
                <div 
                  className="h-full bg-[var(--studio-accent)] rounded-full shadow-[0_0_10px_var(--studio-accent)]" 
                  style={{ width: "65%" }}
                />
              </div>
              
              <p className="text-sm text-[var(--studio-text-muted)] mb-8">
                Professional-grade podcast creation and API-powered audio processing.
                <br />
                The ElevenLabs for podcasting.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-[var(--studio-accent)] hover:bg-[var(--studio-accent-dim)] text-black font-bold uppercase tracking-wider"
                >
                  Start Creating
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-[var(--studio-accent)]/30 text-[var(--studio-accent)] hover:bg-[var(--studio-accent)]/10"
                >
                  View API Docs
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
