'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Speakers from '@/components/Speakers'
import Schedule from '@/components/Schedule'
import Venue from '@/components/Venue'
import Registration from '@/components/Registration'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Venue />
      <Registration />
      <Footer />
    </main>
  )
}

