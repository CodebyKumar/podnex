import { Merriweather, Open_Sans, Courier_Prime } from "next/font/google"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"

const fontHeading = Merriweather({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-heading",
})

const fontBody = Open_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
})

const fontMono = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontHeading.variable} ${fontBody.variable} ${fontMono.variable} font-body antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
