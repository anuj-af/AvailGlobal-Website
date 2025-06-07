"use client"

import { useState, useMemo } from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Filter, ShoppingCart, Heart, Star } from "lucide-react"
import Image from "next/image"
import { useCart, type Product } from "../context/cart-context"
import { useToast } from "@/hooks/use-toast"

const products: Product[] = [
  // Essential Spices
  {
    id: "1",
    name: "Turmeric Powder",
    price: 95,
    image: "/placeholder.svg?height=300&width=300",
    category: "spices",
    unit: "500g",
    description: "Pure organic turmeric powder for daily cooking",
  },
  {
    id: "2",
    name: "Chili Powder",
    price: 85,
    image: "/placeholder.svg?height=300&width=300",
    category: "spices",
    unit: "250g",
    description: "Premium red chili powder with perfect heat",
  },
  {
    id: "3",
    name: "Garam Masala",
    price: 65,
    image: "/placeholder.svg?height=300&width=300",
    category: "spices",
    unit: "200g",
    description: "Traditional garam masala blend",
  },
  {
    id: "4",
    name: "Cumin Powder",
    price: 75,
    image: "/placeholder.svg?height=300&width=300",
    category: "spices",
    unit: "250g",
    description: "Fresh ground cumin powder",
  },
  // Exotic Blends
  {
    id: "5",
    name: "Biryani Masala",
    price: 120,
    image: "/placeholder.svg?height=300&width=300",
    category: "textiles",
    unit: "100g",
    description: "Special biryani spice blend",
  },
  {
    id: "6",
    name: "Chat Masala",
    price: 55,
    image: "/placeholder.svg?height=300&width=300",
    category: "textiles",
    unit: "150g",
    description: "Tangy chat masala for snacks",
  },
  // Chef's Selection
  {
    id: "7",
    name: "Premium Saffron",
    price: 800,
    image: "/placeholder.svg?height=300&width=300",
    category: "pulses",
    unit: "5g",
    description: "Pure Kashmiri saffron threads",
  },
  {
    id: "8",
    name: "Black Cardamom",
    price: 180,
    image: "/placeholder.svg?height=300&width=300",
    category: "pulses",
    unit: "100g",
    description: "Whole black cardamom pods",
  },
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const { dispatch } = useCart()
  const { toast } = useToast()

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const handleAddToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", product })
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      className: "bg-warm-brown border-cream text-light-beige"
    })
  }

  const categories = [
    { value: "all", label: "All Products" },
    { value: "spices", label: "Essential Spices" },
    { value: "textiles", label: "Exotic Textile" },
    { value: "pulses", label: "Premium Pulses" },
  ]

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-heading mb-4">All Products</h1>
          <p className="text-lg text-body max-w-2xl mx-auto">
            Explore our complete collection of premium spices and blends
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 animate-slide-up">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 border-gray-200 focus:border-warm-brown rounded-lg"
            />
          </div>
          <div className="flex gap-3 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className={`${
                  selectedCategory === category.value
                    ? "bg-warm-brown hover:bg-dark-brown text-white"
                    : "border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white"
                } rounded-lg px-6 py-3 transition-all duration-300`}
              >
                <Filter className="h-4 w-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="product-card animate-slide-up bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative p-4">
                <Button variant="ghost" size="sm" className="absolute top-2 right-2 z-10">
                  <Heart className="h-4 w-4 text-gray-400 hover:text-red-500" />
                </Button>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={250}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-heading mb-2">{product.name}</h3>
                <p className="text-sm text-body mb-3">{product.description}</p>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-lg font-bold text-heading">₹{product.price}.00 INR</span>
                    <span className="text-sm text-gray-500 ml-1">per {product.unit}</span>
                  </div>
                </div>
                <Button onClick={() => handleAddToCart(product)} className="btn-primary w-full">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <div className="w-24 h-24 bg-light-beige rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-heading mb-2">No products found</h3>
            <p className="text-lg text-body">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
