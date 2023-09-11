"use client"
import React from 'react'
import Navbar1 from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Body from '@/components/Body'
import { NextUIProvider } from '@nextui-org/react'


export default function Home() {
  return (
    <NextUIProvider>
      <Navbar1 />
      <main>
      <Hero />
      <Body />
      <Projects />
      </main>
      <Footer />
    </NextUIProvider>
  )
}
