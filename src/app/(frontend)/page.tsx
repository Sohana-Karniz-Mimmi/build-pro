import About from '@/components/Home/About'
import Hero from '@/components/Home/Hero'
import Projects from '@/components/Home/Projects'
import Services from '@/components/Home/Services'
import React from 'react'

export default function page() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Projects />
    </main>
  )
}
