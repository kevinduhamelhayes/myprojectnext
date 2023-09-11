"use client"
import React from 'react'
import Navbar1 from './components/Navbar1'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Body from './components/Body'
import { NextUIProvider } from '@nextui-org/react'


export default function Home() {
  return (
    <NextUIProvider>
      <Navbar1 />
      <Hero />
      <Body />
      <Footer />
    </NextUIProvider>
  )
}
