"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Facebook, Linkedin, Instagram, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "../context/cart-context"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { state } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "All Products" },
    // { href: "/contact", label: "Contact Us" },
    { href: "/quote", label: "Get Quote" },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="container-max">
        <div className="p-6 flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="AvailGlobal Logo" className="h-12 md:h-16"/>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-warm-brown transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="https://www.instagram.com/availglobal/" target="_blank">
              <Button variant="ghost" size="sm">
                <Instagram className="h-5 w-5 text-gray-600" />
              </Button>
            </Link>
            <Link href="/" target="_blank">
              <Button variant="ghost" size="sm">
                <Facebook className="h-5 w-5 text-gray-600" />
              </Button>
            </Link>
            {/* <Link href="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5 text-gray-600" />
                {state.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-warm-brown text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </Button>
            </Link> */}
            <Link href="/" target="_blank">
              <Button variant="ghost" size="sm">
                <Linkedin className="h-5 w-5 text-gray-600" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* <Link href="/cart" className="relative">
              <Button variant="ghost" size="sm">
                <ShoppingCart className="h-5 w-5" />
                {state.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-warm-brown text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </Button>
            </Link> */}

            {/* Social Media Icons for Mobile */}
            <Link href="https://www.instagram.com/availglobal/" target="_blank">
              <Button variant="ghost">
                <Instagram className="h-12 w-12 text-gray-600" />
              </Button>
            </Link>
            <Link href="/" target="_blank">
              <Button variant="ghost">
                <Linkedin className="h-12 w-12 text-gray-600" />
              </Button>
            </Link>

            {/* Hamburger Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-warm-brown transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
