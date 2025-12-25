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

// Corner frame SVG component
const CornerFrame = ({ position }: { position: "tl" | "tr" | "bl" | "br" }) => {
  const rotations = { tl: 0, tr: 90, br: 180, bl: 270 }
  const positions = {
    tl: { top: 20, left: 20 },
    tr: { top: 20, right: 20 },
    bl: { bottom: 20, left: 20 },
    br: { bottom: 20, right: 20 },
  }
  
  return (
    <div 
      className="frame-corner"
      style={{ 
        ...positions[position],
        transform: `rotate(${rotations[position]}deg)`,
      }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M0 100V30C0 13.4315 13.4315 0 30 0H100" 
          stroke="#B8956E" 
          strokeWidth="1" 
          strokeOpacity="0.3"
        />
        <circle cx="30" cy="30" r="3" fill="#B8956E" fillOpacity="0.2" />
      </svg>
    </div>
  )
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
      <div className="min-h-screen flex items-center justify-center bg-[#FDFCFA]">
        <div className="w-10 h-10 border-2 border-[#B8956E]/30 border-t-[#6B0F1A] rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#FDFCFA]">
      {/* Grain texture overlay */}
      <div className="grain" />
      
      {/* Decorative corner frames */}
      <CornerFrame position="tl" />
      <CornerFrame position="tr" />
      <CornerFrame position="bl" />
      <CornerFrame position="br" />

      {/* Background gradient orbs */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none float-element"
        style={{ 
          top: "-400px", 
          right: "-300px", 
          background: "radial-gradient(circle, rgba(107, 15, 26, 0.04) 0%, transparent 60%)" 
        }} 
      />
      <div 
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ 
          bottom: "-300px", 
          left: "-200px", 
          background: "radial-gradient(circle, rgba(184, 149, 110, 0.06) 0%, transparent 60%)",
        }} 
      />

      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        
        {/* Spacer for top */}
        <div className="flex-1 min-h-[80px] md:min-h-[120px]" />

        {/* Content */}
        <div className="flex flex-col items-center px-8 md:px-12 lg:px-16">
          
          {/* App icon */}
          <div 
            className="scale-reveal mb-12 md:mb-16 lg:mb-20"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative">
              <div 
                className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-[28px] md:rounded-[32px] flex items-center justify-center shadow-xl"
                style={{
                  background: "linear-gradient(145deg, #6B0F1A 0%, #4A0B12 100%)",
                  boxShadow: "0 20px 60px -20px rgba(107, 15, 26, 0.4), 0 0 0 1px rgba(255,255,255,0.05) inset"
                }}
              >
                <svg viewBox="0 0 24 24" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white/90" fill="none" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                </svg>
              </div>
              {/* Subtle ring */}
              <div 
                className="absolute -inset-3 rounded-[36px] md:rounded-[40px] border border-[#B8956E]/10"
              />
            </div>
          </div>

          {/* Brand */}
          <div 
            className="text-center mb-8 md:mb-10 lg:mb-12 fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-[-0.02em] text-[#2D2420] mb-4 md:mb-5"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Shahirizada
            </h1>
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <div 
                className="w-12 md:w-16 lg:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#B8956E]/40 expand-line"
                style={{ animationDelay: "0.6s" }}
              />
              <p 
                className="text-xs md:text-sm lg:text-base font-medium tracking-[0.3em] uppercase text-[#6B0F1A]/60"
                style={{ fontFamily: "Instrument Sans, sans-serif" }}
              >
                Fresh Market
              </p>
              <div 
                className="w-12 md:w-16 lg:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#B8956E]/40 expand-line"
                style={{ animationDelay: "0.6s" }}
              />
            </div>
          </div>

          {/* Tagline */}
          <p 
            className="text-lg md:text-xl lg:text-2xl text-[#2D2420]/50 text-center max-w-lg lg:max-w-xl mb-14 md:mb-16 lg:mb-20 fade-up font-light leading-relaxed"
            style={{ animationDelay: "0.35s", fontFamily: "Instrument Sans, sans-serif" }}
          >
            Halal, never-frozen meats<br className="hidden md:block" /> freshly cut daily in Naperville
          </p>

          {/* Redirecting state */}
          {redirecting && (
            <div className="mb-10 fade-up">
              <div className="flex items-center gap-3 px-6 py-3 bg-[#6B0F1A]/5 rounded-full border border-[#6B0F1A]/10">
                <div className="w-5 h-5 border-2 border-[#6B0F1A]/20 border-t-[#6B0F1A] rounded-full animate-spin" />
                <span className="text-sm md:text-base text-[#6B0F1A] font-medium">
                  Opening {deviceOS === "ios" ? "App Store" : "Google Play"}...
                </span>
              </div>
            </div>
          )}

          {/* Download buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 md:gap-5 w-full max-w-xs sm:max-w-md md:max-w-lg mb-16 md:mb-20 lg:mb-24 fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            <button
              onClick={() => handleDownload("ios")}
              className="download-btn flex-1 flex items-center justify-center gap-4 px-6 md:px-8 py-4 md:py-5 bg-[#1C1917] text-white rounded-2xl"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-[11px] md:text-xs opacity-60 font-normal tracking-wide">Download on the</div>
                <div className="text-base md:text-lg font-semibold -mt-0.5">App Store</div>
              </div>
            </button>

            <button
              onClick={() => handleDownload("android")}
              className="download-btn flex-1 flex items-center justify-center gap-4 px-6 md:px-8 py-4 md:py-5 text-white rounded-2xl"
              style={{ background: "linear-gradient(135deg, #6B0F1A 0%, #501017 100%)" }}
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-[11px] md:text-xs opacity-60 font-normal tracking-wide">Get it on</div>
                <div className="text-base md:text-lg font-semibold -mt-0.5">Google Play</div>
              </div>
            </button>
          </div>

          {/* Feature pills */}
          <div 
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16 md:mb-20 lg:mb-24 fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <div className="feature-pill">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-[#6B0F1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs md:text-sm font-medium text-[#2D2420]/70">100% Halal</span>
            </div>
            <div className="feature-pill">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-[#6B0F1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs md:text-sm font-medium text-[#2D2420]/70">Fresh Daily</span>
            </div>
            <div className="feature-pill">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-[#6B0F1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="text-xs md:text-sm font-medium text-[#2D2420]/70">Naperville, IL</span>
            </div>
          </div>

        </div>

        {/* Spacer for bottom */}
        <div className="flex-1 min-h-[60px] md:min-h-[80px]" />

        {/* Footer */}
        <div 
          className="text-center pb-8 md:pb-10 fade-up"
          style={{ animationDelay: "0.65s" }}
        >
          <p className="text-xs md:text-sm text-[#2D2420]/25 font-light tracking-wider">
            © 2025 Shahirizada Fresh Market
          </p>
        </div>
      </div>
    </main>
  )
}
