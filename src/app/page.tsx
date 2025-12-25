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

    // Auto-redirect on mobile after a brief moment
    if (isMobile() && os !== "other") {
      setRedirecting(true)
      const timer = setTimeout(() => {
        window.location.href = APP_LINKS[os]
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleDownload = (platform: "ios" | "android") => {
    window.open(APP_LINKS[platform], "_blank")
  }

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FDF8F5] to-white">
        <div className="w-16 h-16 border-4 border-[#6B0F1A]/20 border-t-[#6B0F1A] rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDF8F5] via-white to-[#FDF8F5]" />
      
      {/* Decorative Circles */}
      <div className="absolute top-[-20vh] right-[-10vw] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-br from-[#6B0F1A]/5 to-transparent float-animation" />
      <div className="absolute bottom-[-15vh] left-[-15vw] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-tr from-[#E8D5BA]/30 to-transparent" style={{ animationDelay: "-3s" }} />
      
      {/* Geometric Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236B0F1A'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-3xl bg-gradient-to-br from-[#6B0F1A] to-[#3D0A0F] shadow-2xl pulse-glow">
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          
          <h1 className="font-['Playfair Display',serif] text-4xl md:text-5xl lg:text-6xl font-bold text-[#6B0F1A] mb-4 leading-tight">
            Shahirizada
            <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-[#3D0A0F]/80 mt-1">
              Fresh Market
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto leading-relaxed">
            Halal, never-frozen meats — freshly cut daily in Naperville
          </p>
        </div>

        {/* Redirecting State */}
        {redirecting && (
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#6B0F1A]/10 rounded-full">
              <div className="w-5 h-5 border-2 border-[#6B0F1A]/30 border-t-[#6B0F1A] rounded-full animate-spin" />
              <span className="text-[#6B0F1A] font-medium">
                Taking you to the {deviceOS === "ios" ? "App Store" : "Play Store"}...
              </span>
            </div>
          </div>
        )}

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          {/* iOS Button */}
          <button
            onClick={() => handleDownload("ios")}
            className="group relative flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            <svg viewBox="0 0 24 24" className="w-8 h-8 relative z-10" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left relative z-10">
              <div className="text-xs opacity-80">Download on the</div>
              <div className="text-lg font-semibold -mt-0.5">App Store</div>
            </div>
          </button>

          {/* Android Button */}
          <button
            onClick={() => handleDownload("android")}
            className="group relative flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#6B0F1A] to-[#8B1A2A] text-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            <svg viewBox="0 0 24 24" className="w-8 h-8 relative z-10" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <div className="text-left relative z-10">
              <div className="text-xs opacity-80">Get it on</div>
              <div className="text-lg font-semibold -mt-0.5">Google Play</div>
            </div>
          </button>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-md w-full">
          {[
            { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "100% Halal" },
            { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Fresh Daily" },
            { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", label: "Naperville" },
          ].map((feature, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#E8D5BA]/40 mb-2">
                <svg className="w-6 h-6 text-[#6B0F1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <p className="text-sm text-gray-600 font-medium">{feature.label}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Shahirizada Fresh Market</p>
          <p className="mt-1">Naperville, Illinois</p>
        </div>
      </div>
    </main>
  )
}
