"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
// import ThemeToggle from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
          <span className="font-bold text-xl">SolanaHub</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#features"
            onClick={(e) => scrollToSection(e, "features")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#tokens"
            onClick={(e) => scrollToSection(e, "tokens")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Tokens
          </a>
          <a
            href="#community"
            onClick={(e) => scrollToSection(e, "community")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Community
          </a>
          <Link href="/docs" className="text-sm font-medium hover:text-primary transition-colors">
            Docs
          </Link>
          {/* <ThemeToggle /> */}
          <Button
            size="sm"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
          >
            Connect Wallet
          </Button>
        </nav>
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-2">
          {/* <ThemeToggle /> */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-md">
          <div className="container py-4 flex flex-col space-y-3">
            <a
              href="#features"
              className="text-sm font-medium p-2 hover:bg-accent rounded-md transition-colors"
              onClick={(e) => scrollToSection(e, "features")}
            >
              Features
            </a>
            <a
              href="#tokens"
              className="text-sm font-medium p-2 hover:bg-accent rounded-md transition-colors"
              onClick={(e) => scrollToSection(e, "tokens")}
            >
              Tokens
            </a>
            <a
              href="#community"
              className="text-sm font-medium p-2 hover:bg-accent rounded-md transition-colors"
              onClick={(e) => scrollToSection(e, "community")}
            >
              Community
            </a>
            <Link
              href="/docs"
              className="text-sm font-medium p-2 hover:bg-accent rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Docs
            </Link>
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              Connect Wallet
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}