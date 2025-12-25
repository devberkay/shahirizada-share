import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Shahirizada Fresh Market - Download Our App",
  description: "Get the Shahirizada Fresh Market app for halal, never-frozen meats freshly cut daily in Naperville. Order for pickup or delivery!",
  openGraph: {
    title: "Shahirizada Fresh Market - Download Our App",
    description: "Get the Shahirizada Fresh Market app for halal, never-frozen meats freshly cut daily in Naperville.",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahirizada Fresh Market - Download Our App",
    description: "Get the Shahirizada Fresh Market app for halal, never-frozen meats freshly cut daily.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6B0F1A",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
