import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { CartProvider } from "./context/cart-context"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "AvailGlobal - Premium Textiles, Spices & Pulses",
  description: "Tradition Meets Taste – Your One-Stop Shop for Authentic Textiles, Spices, and Pulses",
  keywords: "textiles, spices, pulses, authentic, premium, Indian, wholesale",
  icons:{
    icon: "/icon.png",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <CartProvider>
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}
