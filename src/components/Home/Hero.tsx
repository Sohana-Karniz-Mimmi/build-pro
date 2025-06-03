"use client";

// import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="background w-full h-full bg-cover bg-center"></div>
      </div>

      {/* Hero Content */}
      <div className="relative text-center text-white z-10 pt-[80px] md:pt-[128px] px-[16px]">
        <p className="text-[14px] md:text-[18px] md:tracking-[0.3em] mb-[16px] font-semibold">
          We help construction innovate and grow.
        </p>

        <h1 className="text-[36px] lg:text-[60px] font-bold mb-[32px] capitalize">
          build your dream with <span className="text-primary">passion.</span>
        </h1>

        <button className="border-2 border-white text-white px-[28px] md:px-[32px] py-[8px] md:py-[12px] tracking-wider hover:bg-white hover:text-black transition-colors font-bold capitalize font-montserrat text-[14px] md:text-[16px]">
          start a project
        </button>
      </div>
    </section>
  );
}
