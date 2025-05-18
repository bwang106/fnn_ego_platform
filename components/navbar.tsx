"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            FNN Strategy
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/features" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/video-test" className="text-sm font-medium transition-colors hover:text-primary">
            Video Test
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="outline">Log In</Button>
          </Link>
          <Link href="/register">
            <Button>Sign Up</Button>
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden container py-4 space-y-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/video-test" className="text-sm font-medium transition-colors hover:text-primary">
              Video Test
            </Link>
          </nav>
          <div className="flex flex-col space-y-2">
            <Link href="/login">
              <Button variant="outline" className="w-full">
                Log In
              </Button>
            </Link>
            <Link href="/register">
              <Button className="w-full">Sign Up</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

