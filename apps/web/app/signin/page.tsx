import Link from "next/link"
import Image from "next/image"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Separator } from "@workspace/ui/components/separator"
import { Badge } from "@workspace/ui/components/badge"
import { 
  Navbar, 
  NavbarContainer, 
  NavbarBrand, 
  NavbarNav, 
  NavbarLink, 
  NavbarActions 
} from "@workspace/ui/components/navbar"

export default function SignInPage() {
  return (
    <>
      <Navbar>
        <NavbarContainer>
          <NavbarBrand>
            <Link href="/">
              <span className="text-2xl font-bold text-[var(--studio-accent)] font-[family-name:var(--font-display)] group-hover:text-[var(--studio-accent-dim)] transition-colors">
                PODNEX
              </span>
            </Link>
          </NavbarBrand>
          
          <NavbarNav>
            <NavbarLink href="/#features">Features</NavbarLink>
            <NavbarLink href="/#api">API</NavbarLink>
            <NavbarLink href="/#pricing">Pricing</NavbarLink>
          </NavbarNav>

          <NavbarActions>
            <Link href="/signup">
              <Button 
                size="sm" 
                className="bg-[var(--studio-accent)] hover:bg-[var(--studio-accent-dim)] text-black font-bold uppercase tracking-wide shadow-[0_0_20px_rgba(255,174,0,0.3)] hover:shadow-[0_0_30px_rgba(255,174,0,0.5)] transition-all"
              >
                Sign Up
              </Button>
            </Link>
          </NavbarActions>
        </NavbarContainer>
      </Navbar>

      <main className="min-h-screen bg-[var(--studio-bg-dark)] flex items-center justify-center p-4 pt-32 relative overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/image.png" 
            alt="Studio Background" 
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--studio-bg-dark)] via-[var(--studio-bg-dark)]/95 to-[var(--studio-surface)]/90" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--studio-accent)] rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--studio-accent)] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        {/* Animated Waveform Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "var(--studio-accent)", stopOpacity: 0 }} />
                <stop offset="50%" style={{ stopColor: "var(--studio-accent)", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "var(--studio-accent)", stopOpacity: 0 }} />
              </linearGradient>
            </defs>
            <path d="M0,200 Q250,100 500,200 T1000,200" stroke="url(#grad1)" strokeWidth="2" fill="none">
              <animate attributeName="d" 
                values="M0,200 Q250,100 500,200 T1000,200;
                        M0,200 Q250,300 500,200 T1000,200;
                        M0,200 Q250,100 500,200 T1000,200" 
                dur="4s" repeatCount="indefinite" />
            </path>
            <path d="M0,400 Q250,300 500,400 T1000,400" stroke="url(#grad1)" strokeWidth="2" fill="none" opacity="0.5">
              <animate attributeName="d" 
                values="M0,400 Q250,300 500,400 T1000,400;
                        M0,400 Q250,500 500,400 T1000,400;
                        M0,400 Q250,300 500,400 T1000,400" 
                dur="5s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>

        <div className="w-full max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Marketing Content */}
            <div className="hidden lg:block space-y-6">
              <Badge variant="studio" className="uppercase tracking-wider">
                <span className="led-indicator w-2 h-2 mr-2 bg-[var(--studio-accent)]" />
                Welcome Back
              </Badge>
              
              <h1 className="text-5xl font-bold text-[var(--studio-text-main)] font-[family-name:var(--font-display)]">
                Continue Your
                <br />
                <span className="text-[var(--studio-accent)]">Audio Journey</span>
              </h1>
              
              <p className="text-lg text-[var(--studio-text-muted)] leading-relaxed">
                Access your studio dashboard, manage your podcasts, and leverage our powerful API to create professional audio content.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  { icon: "🎙️", text: "Professional Recording Studio" },
                  { icon: "⚡", text: "Lightning-Fast API Access" },
                  { icon: "🌐", text: "Global CDN Distribution" },
                  { icon: "🔒", text: "Enterprise-Grade Security" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-[var(--studio-text-muted)] hover:text-[var(--studio-text-main)] transition-colors">
                    <div className="text-2xl bg-[var(--studio-surface)] p-2 rounded-lg">{item.icon}</div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-6 border-t border-white/5">
                <div>
                  <div className="text-3xl font-bold text-[var(--studio-accent)]">10K+</div>
                  <div className="text-sm text-[var(--studio-text-muted)]">Active Creators</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[var(--studio-accent)]">50M+</div>
                  <div className="text-sm text-[var(--studio-text-muted)]">Episodes Created</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[var(--studio-accent)]">99.9%</div>
                  <div className="text-sm text-[var(--studio-text-muted)]">Uptime</div>
                </div>
              </div>
            </div>

            {/* Right Side: Sign In Form */}
            <div>
              <Card variant="studio" className="p-8 hover-lift">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl text-[var(--studio-text-main)]">
                    Sign In to Your Studio
                  </CardTitle>
                  <CardDescription className="text-[var(--studio-text-muted)]">
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-0 pb-0">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[var(--studio-text-main)]">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="bg-[var(--studio-surface-light)] border-[var(--studio-accent)]/20 text-[var(--studio-text-main)] placeholder:text-[var(--studio-text-muted)] focus:border-[var(--studio-accent)] h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password" className="text-[var(--studio-text-main)]">
                          Password
                        </Label>
                        <Link
                          href="/forgot-password"
                          className="text-xs text-[var(--studio-accent)] hover:text-[var(--studio-accent-dim)] transition-colors"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="bg-[var(--studio-surface-light)] border-[var(--studio-accent)]/20 text-[var(--studio-text-main)] placeholder:text-[var(--studio-text-muted)] focus:border-[var(--studio-accent)] h-12"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[var(--studio-accent)] hover:bg-[var(--studio-accent-dim)] text-black font-bold uppercase tracking-wide shadow-[0_0_20px_rgba(255,174,0,0.3)] hover:shadow-[0_0_30px_rgba(255,174,0,0.5)] transition-all"
                      size="lg"
                    >
                      Access Studio
                    </Button>
                  </form>

                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <Separator className="bg-white/10" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-[var(--studio-surface)] px-2 text-[var(--studio-text-muted)]">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <Button
                        variant="outline"
                        className="border-[var(--studio-accent)]/20 text-[var(--studio-text-main)] hover:bg-[var(--studio-surface-light)] hover:border-[var(--studio-accent)]/30"
                      >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="currentColor"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                        Google
                      </Button>
                      <Button
                        variant="outline"
                        className="border-[var(--studio-accent)]/20 text-[var(--studio-text-main)] hover:bg-[var(--studio-surface-light)] hover:border-[var(--studio-accent)]/30"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </Button>
                    </div>
                  </div>

                  <p className="text-center text-sm text-[var(--studio-text-muted)] mt-6">
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/signup"
                      className="text-[var(--studio-accent)] hover:text-[var(--studio-accent-dim)] font-semibold transition-colors"
                    >
                      Sign up for free
                    </Link>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
