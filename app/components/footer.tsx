import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark-brown text-white">
      {/* <div className="container-max section-padding"> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8"> */}
          {/* Brand */}
          {/* <div className="space-y-4">
            <div className="text-2xl font-bold">
              AvailGlobal
              <div className="text-sm font-normal text-gray-300">Spices</div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Bringing authentic flavors to your kitchen with premium quality spices sourced from the finest farms.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div> */}

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Categories */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=essential" className="text-gray-300 hover:text-white transition-colors">
                  Essential Spices
                </Link>
              </li>
              <li>
                <Link href="/products?category=exotic" className="text-gray-300 hover:text-white transition-colors">
                  Exotic Textile
                </Link>
              </li>
              <li>
                <Link href="/products?category=chef" className="text-gray-300 hover:text-white transition-colors">
                  Premium Pulses
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Contact Info */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">+880 1234 567890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">info@availglobal.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">Indore, Madhya Pradesh</span>
              </div>
            </div>
          </div> */}
        {/* </div> */}

        {/* <div className="border-t border-warm-brown mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} AvailGlobal. All rights reserved.</p>
        </div> */}
      {/* </div> */}
      
      <div className="border-t border-warm-brown p-4 text-center">
          <p className="text-gray-200">© {new Date().getFullYear()} AvailGlobal. All rights reserved.</p>
        </div>
    </footer>
  )
}
