'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [heroData, setHeroData] = useState<any>(null)

  useEffect(() => {
    async function fetchHero() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/hero`)
      const data = await res.json()
      setHeroData(data?.docs?.[0])
    }

    fetchHero()
  }, [])

  if (!heroData) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        {heroData.background_image?.url && (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${heroData.background_image.url})` }}
          />
        )}
      </div>

      {/* Hero Content */}
      <div className="relative text-center text-white z-10 pt-[80px] md:pt-[128px] px-[16px]">
        <p className="text-[14px] md:text-[18px] md:tracking-[0.3em] mb-[16px] font-semibold">
          {heroData.sub_title}
        </p>

        <h1 className="text-[36px] lg:text-[60px] font-bold mb-[32px] capitalize">
          {heroData.title} <span className="text-primary">{heroData.heading_lighted_text}</span>
        </h1>

        <button className="border-2 border-white text-white px-[28px] md:px-[32px] py-[8px] md:py-[12px] tracking-wider hover:bg-white hover:text-black transition-colors font-bold capitalize font-montserrat text-[14px] md:text-[16px]">
          {heroData.button_text}
        </button>
      </div>
    </section>
  )
}
