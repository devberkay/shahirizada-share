"use client"

import { useEffect, useState } from "react"

const APP_LINKS = {
  ios: "https://apps.apple.com/us/app/shahirizada-fresh-market/id6756076186",
  android: "https://play.google.com/store/apps/details?id=us.tabsy.shahirizada",
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
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleDownload = (platform: "ios" | "android") => {
    window.location.href = APP_LINKS[platform]
  }

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#FFFCF8" }}>
        <div className="w-8 h-8 border-2 border-[#C4A77D] border-t-[#6B0F1A] rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <main className="min-h-screen relative overflow-hidden" style={{ background: "#FFFCF8", fontFamily: "Outfit, sans-serif" }}>
      {/* Noise texture */}
      <div className="noise-overlay" />
      
      {/* Decorative corner accents */}
      <div className="corner-accent" style={{ top: 24, left: 24, borderRight: "none", borderBottom: "none" }} />
      <div className="corner-accent" style={{ top: 24, right: 24, borderLeft: "none", borderBottom: "none" }} />
      <div className="corner-accent" style={{ bottom: 24, left: 24, borderRight: "none", borderTop: "none" }} />
      <div className="corner-accent" style={{ bottom: 24, right: 24, borderLeft: "none", borderTop: "none" }} />

      {/* Subtle gradient orbs */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none float-subtle"
        style={{ 
          top: "-200px", 
          right: "-200px", 
          background: "radial-gradient(circle, #6B0F1A 0%, transparent 70%)" 
        }} 
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ 
          bottom: "-100px", 
          left: "-100px", 
          background: "radial-gradient(circle, #C4A77D 0%, transparent 70%)",
          animationDelay: "-3s"
        }} 
      />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12 md:py-16">
        
        {/* Logo mark */}
        <div 
          className="reveal-scale mb-8 md:mb-10"
          style={{ opacity: 0, animationDelay: "0.1s" }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center border border-[#C4A77D]/30 bg-gradient-to-br from-white to-[#FAF7F2] shadow-sm">
            <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-[#6B0F1A]" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
            </svg>
          </div>
        </div>

        {/* Brand name */}
        <div 
          className="text-center mb-6 md:mb-8 reveal-up"
          style={{ opacity: 0, animationDelay: "0.2s" }}
        >
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#3D0A0F] mb-2"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Shahirizada
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-[#C4A77D] draw-line" style={{ animationDelay: "0.5s" }} />
            <p 
              className="text-sm md:text-base font-light tracking-[0.2em] uppercase text-[#6B0F1A]/70"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Fresh Market
            </p>
            <div className="w-8 h-px bg-[#C4A77D] draw-line" style={{ animationDelay: "0.5s" }} />
          </div>
        </div>

        {/* Tagline */}
        <p 
          className="text-base md:text-lg text-[#3D0A0F]/60 text-center max-w-md mb-10 md:mb-12 reveal-up font-light leading-relaxed"
          style={{ opacity: 0, animationDelay: "0.3s" }}
        >
          Halal, never-frozen meats — freshly cut daily in Naperville, Illinois
        </p>

        {/* Redirecting indicator */}
        {redirecting && (
          <div className="mb-8 reveal-up">
            <div className="flex items-center gap-2 px-5 py-2.5 bg-[#6B0F1A]/5 rounded-full border border-[#6B0F1A]/10">
              <div className="w-4 h-4 border-2 border-[#6B0F1A]/20 border-t-[#6B0F1A] rounded-full animate-spin" />
              <span className="text-sm text-[#6B0F1A] font-medium">
                Opening {deviceOS === "ios" ? "App Store" : "Google Play"}...
              </span>
            </div>
          </div>
        )}

        {/* Download buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full max-w-sm md:max-w-md mb-12 md:mb-16 reveal-up"
          style={{ opacity: 0, animationDelay: "0.4s" }}
        >
          <button
            onClick={() => handleDownload("ios")}
            className="btn-shimmer group flex-1 flex items-center justify-center gap-3 px-5 py-3.5 bg-[#1A1A1A] text-white rounded-xl hover:bg-[#2A2A2A] active:scale-[0.98] transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] opacity-60 font-normal tracking-wide">Download on the</div>
              <div className="text-sm font-semibold -mt-0.5">App Store</div>
            </div>
          </button>

          <button
            onClick={() => handleDownload("android")}
            className="btn-shimmer group flex-1 flex items-center justify-center gap-3 px-5 py-3.5 bg-[#6B0F1A] text-white rounded-xl hover:bg-[#7D1220] active:scale-[0.98] transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] opacity-60 font-normal tracking-wide">Get it on</div>
              <div className="text-sm font-semibold -mt-0.5">Google Play</div>
            </div>
          </button>
        </div>

        {/* Features */}
        <div 
          className="flex items-center justify-center gap-6 md:gap-10 mb-12 md:mb-16 reveal-up"
          style={{ opacity: 0, animationDelay: "0.5s" }}
        >
          <div className="flex items-center gap-2 text-[#3D0A0F]/50">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs md:text-sm font-medium tracking-wide">100% Halal</span>
          </div>
          <div className="w-px h-4 bg-[#C4A77D]/30" />
          <div className="flex items-center gap-2 text-[#3D0A0F]/50">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs md:text-sm font-medium tracking-wide">Fresh Daily</span>
          </div>
          <div className="w-px h-4 bg-[#C4A77D]/30" />
          <div className="flex items-center gap-2 text-[#3D0A0F]/50">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span className="text-xs md:text-sm font-medium tracking-wide">Naperville</span>
          </div>
        </div>

        {/* Footer */}
        <div 
          className="text-center reveal-up"
          style={{ opacity: 0, animationDelay: "0.6s" }}
        >
          <p className="text-xs text-[#3D0A0F]/30 font-light tracking-wide">
            © 2025 Shahirizada Fresh Market · Naperville, IL
          </p>
        </div>
      </div>
    </main>
  )
}
