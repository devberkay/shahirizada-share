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
      <div className="min-h-screen flex items-center justify-center bg-[#FDF8F5]">
        <div className="w-16 h-16 border-4 border-[#6B0F1A]/20 border-t-[#6B0F1A] rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#FDF8F5]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDF8F5] via-white to-[#FDF8F5]" />
      
      <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#6B0F1A]/10 to-transparent float-animation" />
      <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#E8D5BA]/40 to-transparent" />
      <div className="absolute top-1/4 left-[-50px] w-[200px] h-[200px] rounded-full bg-[#E8D5BA]/20 float-animation" style={{ animationDelay: "-4s" }} />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-16">
        
        <div className="scale-in mb-8">
          <div className="relative">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-[2rem] bg-gradient-to-br from-[#6B0F1A] to-[#3D0A0F] flex items-center justify-center shadow-2xl pulse-glow">
              <svg viewBox="0 0 24 24" className="w-14 h-14 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
              </svg>
            </div>
            <div className="absolute inset-0 rounded-[2rem] border-2 border-[#6B0F1A]/20 scale-110" />
          </div>
        </div>

        <div className="text-center mb-10 fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#6B0F1A] mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
            Shahirizada
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-[#3D0A0F]/70" style={{ fontFamily: "Playfair Display, serif" }}>
            Fresh Market
          </p>
        </div>

        <p className="text-lg md:text-xl text-gray-600 text-center max-w-lg mb-10 fade-in-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
          Halal, never-frozen meats — freshly cut daily in Naperville, Illinois
        </p>

        {redirecting && (
          <div className="mb-8 fade-in-up">
            <div className="flex items-center gap-3 px-8 py-4 bg-[#6B0F1A]/10 rounded-full border border-[#6B0F1A]/20">
              <div className="w-5 h-5 border-2 border-[#6B0F1A]/30 border-t-[#6B0F1A] rounded-full animate-spin" />
              <span className="text-[#6B0F1A] font-semibold">
                Opening {deviceOS === "ios" ? "App Store" : "Google Play"}...
              </span>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mb-12 fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <button
            onClick={() => handleDownload("ios")}
            className="group flex-1 flex items-center justify-center gap-4 px-8 py-5 bg-black text-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-9 h-9" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-70 font-medium">Download on the</div>
              <div className="text-xl font-bold -mt-0.5">App Store</div>
            </div>
          </button>

          <button
            onClick={() => handleDownload("android")}
            className="group flex-1 flex items-center justify-center gap-4 px-8 py-5 bg-gradient-to-r from-[#6B0F1A] to-[#8B1A2A] text-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-9 h-9" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-70 font-medium">Get it on</div>
              <div className="text-xl font-bold -mt-0.5">Google Play</div>
            </div>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-md w-full mb-16 fade-in-up" style={{ animationDelay: "0.5s", opacity: 0 }}>
          <div className="text-center">
            <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-[#E8D5BA]/60 to-[#E8D5BA]/30 flex items-center justify-center border border-[#E8D5BA]">
              <svg className="w-7 h-7 text-[#6B0F1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-gray-700">100% Halal</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-[#E8D5BA]/60 to-[#E8D5BA]/30 flex items-center justify-center border border-[#E8D5BA]">
              <svg className="w-7 h-7 text-[#6B0F1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-gray-700">Fresh Daily</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-[#E8D5BA]/60 to-[#E8D5BA]/30 flex items-center justify-center border border-[#E8D5BA]">
              <svg className="w-7 h-7 text-[#6B0F1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-gray-700">Naperville</p>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm fade-in-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
          <p className="font-medium">© 2025 Shahirizada Fresh Market</p>
          <p className="mt-1">Naperville, Illinois</p>
        </div>
      </div>
    </main>
  )
}
