"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, BarChart3 } from "lucide-react"
import {Header} from "@/components/header"
import { motion } from "framer-motion"
import Link from "next/link"

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      containerRef.current.style.setProperty("--x-offset", `${x * 20}px`)
      containerRef.current.style.setProperty("--y-offset", `${y * 20}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <Header />

      <div
        ref={containerRef}
        className="flex-1 w-full flex flex-col items-center justify-center pt-20 pb-16 md:pb-24 relative"
        style={
          {
            "--x-offset": "0px",
            "--y-offset": "0px",
          } as React.CSSProperties
        }
      >
        {/* Background gradient - full width */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none w-full">
          <div
            className="absolute -top-[30%] -right-[10%] w-[100%] h-[70%] rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl transform translate-x-[var(--x-offset)] translate-y-[var(--y-offset)] transition-transform duration-200 ease-out"
            style={{ transform: "translate(var(--x-offset), var(--y-offset))" }}
          />
          <div
            className="absolute -bottom-[30%] -left-[10%] w-[100%] h-[70%] rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl transform translate-x-[calc(var(--x-offset)*-1)] translate-y-[calc(var(--y-offset)*-1)] transition-transform duration-200 ease-out"
            style={{ transform: "translate(calc(var(--x-offset) * -1), calc(var(--y-offset) * -1))" }}
          />
        </div>
        <div className="container z-10">
          <motion.div
            className="text-center space-y-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block rounded-full bg-muted px-4 py-1.5 mb-4">
              <span className="text-sm font-medium flex items-center">
                <Zap className="h-4 w-4 mr-1 text-purple-500" />
                The future of decentralized finance
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              <span className="block">Experience the Power of</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Solana Blockchain
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Lightning-fast transactions, minimal fees, and a thriving ecosystem of dApps and tokens. Join the next
              generation of blockchain technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/docs">
                <Button size="lg" variant="outline">
                  View Documentation
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Process thousands of transactions per second with minimal latency.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-sm text-muted-foreground">
                Built on a robust proof-of-stake consensus mechanism for maximum security.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Low Cost</h3>
              <p className="text-sm text-muted-foreground">
                Enjoy minimal transaction fees, making microtransactions viable.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}