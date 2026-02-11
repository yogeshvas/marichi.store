"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#platform", label: "Platform" },
  { href: "#features", label: "Features" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#ai", label: "AI" },
  { href: "#integrations", label: "Integrations" },
  { href: "#industries", label: "Industries" },
  { href: "#pricing", label: "Pricing" },
]

export function LandingHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Image src="/logo.png" alt="Marichi Logo" width={32} height={32} />
            <span className="hidden font-bold sm:inline-block">
              Marichi
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Logo */}
        <div className="flex flex-1 items-center justify-between md:hidden">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Image src="/logo.png" alt="Marichi Logo" width={32} height={32} />
            <span className="font-bold">Marichi</span>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground/60 hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ring"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle main menu</span>
          </button>
        </div>


        <div className="flex items-center justify-end space-x-2 md:flex-none">
          <nav className="flex items-center">
            <Link
              href="/login"
              className="hidden text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80 md:block"
            >
              Log in
            </Link>
            <Link
              href="#book-demo"
              className="ml-4 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Book Demo
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80 py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80 py-2"
            >
              Log in
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
