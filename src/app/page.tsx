"use client"

import { useEffect, useState } from "react"

const APP_LINKS = {
  ios: "https://apps.apple.com/us/app/shahirizada-fresh-market/id6756076186",
  android: "https://play.google.com/store/apps/details?id=us.tabsy.shahirizada",
  website: "https://shahirizadameatmarket.com",
}

type DeviceOS = "ios" | "android" | "other"

const getDeviceOS = (): DeviceOS => {
  if (typeof window === "undefined") return "other"
  const ua = navigator.userAgent || ""
  if (/iPad|iPhone|iPod/.test(ua)) return "ios"
  if (/android/i.test(ua)) return "android"
  return "other"
}

const isMobile = (): boolean => {
  if (typeof window === "undefined") return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export default function Home() {
  const [deviceOS, setDeviceOS] = useState<DeviceOS>("other")
  const [mounted, setMounted] = useState(false)
  const [redirecting, setRedirecting] = useState(false)

  useEffect(() => {
    setMounted(true)
    const os = getDeviceOS()
    setDeviceOS(os)

    if (isMobile() && os !== "other") {
      setRedirecting(true)
      const timer = setTimeout(() => {
        window.location.href = APP_LINKS[os]
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleDownload = (platform: "ios" | "android") => {
    window.location.href = APP_LINKS[platform]
  }

  if (!mounted) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#FDFCFA" }}>
        <div style={{ width: 32, height: 32, border: "2px solid #B8956E", borderTopColor: "#6B0F1A", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  return (
    <main style={{ 
      minHeight: "100vh", 
      background: "#FDFCFA",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px 48px",
    }}>
      
      {/* App Icon */}
      <div 
        className="animate-fade"
        style={{ 
          marginBottom: 64,
          animationDelay: "0s",
        }}
      >
        <div style={{
          width: 88,
          height: 88,
          borderRadius: 24,
          background: "linear-gradient(145deg, #6B0F1A, #4A0B12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 16px 48px rgba(107, 15, 26, 0.25)",
        }}>
          <svg viewBox="0 0 24 24" style={{ width: 44, height: 44, color: "white" }} fill="none" stroke="currentColor" strokeWidth="1.2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
          </svg>
        </div>
      </div>

      {/* Brand Name */}
      <h1 
        className="animate-fade"
        style={{ 
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(40px, 8vw, 72px)",
          fontWeight: 500,
          color: "#1a1a1a",
          marginBottom: 16,
          textAlign: "center",
          letterSpacing: "-0.02em",
          animationDelay: "0.1s",
        }}
      >
        Shahirizada
      </h1>

      {/* Subtitle with lines */}
      <div 
        className="animate-fade"
        style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: 20,
          marginBottom: 48,
          animationDelay: "0.15s",
        }}
      >
        <div className="animate-line" style={{ height: 1, background: "#B8956E" }} />
        <span style={{ 
          fontSize: 13, 
          fontWeight: 500, 
          letterSpacing: "0.2em", 
          textTransform: "uppercase",
          color: "#6B0F1A",
          opacity: 0.7,
        }}>
          Fresh Market
        </span>
        <div className="animate-line" style={{ height: 1, background: "#B8956E" }} />
      </div>

      {/* Tagline */}
      <p 
        className="animate-fade"
        style={{ 
          fontSize: "clamp(16px, 2.5vw, 20px)",
          color: "#666",
          textAlign: "center",
          maxWidth: 420,
          lineHeight: 1.6,
          marginBottom: 64,
          fontWeight: 300,
          animationDelay: "0.2s",
        }}
      >
        Halal, never-frozen meats — freshly cut daily in Naperville, Illinois
      </p>

      {/* Redirecting */}
      {redirecting && (
        <div 
          className="animate-fade"
          style={{ 
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "14px 24px",
            background: "rgba(107, 15, 26, 0.05)",
            borderRadius: 100,
            marginBottom: 48,
          }}
        >
          <div style={{ 
            width: 18, 
            height: 18, 
            border: "2px solid rgba(107, 15, 26, 0.2)", 
            borderTopColor: "#6B0F1A", 
            borderRadius: "50%", 
            animation: "spin 1s linear infinite" 
          }} />
          <span style={{ fontSize: 14, color: "#6B0F1A", fontWeight: 500 }}>
            Opening {deviceOS === "ios" ? "App Store" : "Google Play"}...
          </span>
        </div>
      )}

      {/* Download Buttons */}
      <div 
        className="animate-fade"
        style={{ 
          display: "flex",
          flexDirection: "column",
          gap: 16,
          width: "100%",
          maxWidth: 360,
          marginBottom: 32,
          animationDelay: "0.3s",
        }}
      >
        <button
          onClick={() => handleDownload("ios")}
          className="btn-hover"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            padding: "18px 32px",
            background: "#1a1a1a",
            color: "white",
            border: "none",
            borderRadius: 16,
            cursor: "pointer",
            width: "100%",
          }}
        >
          <svg viewBox="0 0 24 24" style={{ width: 28, height: 28 }} fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: 11, opacity: 0.6, fontWeight: 400 }}>Download on the</div>
            <div style={{ fontSize: 17, fontWeight: 600, marginTop: -2 }}>App Store</div>
          </div>
        </button>

        <button
          onClick={() => handleDownload("android")}
          className="btn-hover"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            padding: "18px 32px",
            background: "#6B0F1A",
            color: "white",
            border: "none",
            borderRadius: 16,
            cursor: "pointer",
            width: "100%",
          }}
        >
          <svg viewBox="0 0 24 24" style={{ width: 28, height: 28 }} fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
          </svg>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: 11, opacity: 0.6, fontWeight: 400 }}>Get it on</div>
            <div style={{ fontSize: 17, fontWeight: 600, marginTop: -2 }}>Google Play</div>
          </div>
        </button>
      </div>

      {/* Website Link */}
      <a 
        href={APP_LINKS.website}
        className="animate-fade btn-hover"
        style={{ 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          padding: "16px 32px",
          background: "transparent",
          border: "1.5px solid #B8956E",
          borderRadius: 16,
          color: "#6B0F1A",
          textDecoration: "none",
          fontSize: 15,
          fontWeight: 500,
          width: "100%",
          maxWidth: 360,
          marginBottom: 80,
          animationDelay: "0.35s",
        }}
      >
        <svg style={{ width: 20, height: 20 }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        Order on our Website
      </a>

      {/* Features */}
      <div 
        className="animate-fade"
        style={{ 
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 32,
          marginBottom: 80,
          animationDelay: "0.4s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <svg style={{ width: 18, height: 18, color: "#6B0F1A" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span style={{ fontSize: 14, color: "#666", fontWeight: 500 }}>100% Halal</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <svg style={{ width: 18, height: 18, color: "#6B0F1A" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span style={{ fontSize: 14, color: "#666", fontWeight: 500 }}>Fresh Daily</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <svg style={{ width: 18, height: 18, color: "#6B0F1A" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span style={{ fontSize: 14, color: "#666", fontWeight: 500 }}>Naperville, IL</span>
        </div>
      </div>

      {/* Footer */}
      <p 
        className="animate-fade"
        style={{ 
          fontSize: 12, 
          color: "#999",
          animationDelay: "0.5s",
        }}
      >
        © 2025 Shahirizada Fresh Market
      </p>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </main>
  )
}
