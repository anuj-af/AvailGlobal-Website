"use client"

import { useState, useMemo } from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, ShoppingCart, Heart, Star, Truck, Shield, RotateCcw, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { useCart, type Product } from "../context/cart-context"
import { useToast } from "@/hooks/use-toast"

// Category structure with subcategories
const categoryStructure = {
  textiles: {
    label: "Textiles",
    subcategories: {
      bedsheets: "Bedsheets",
      curtains: "Curtains",
      "cushion-covers": "Cushion Covers",
      "table-runners": "Table Runners",
    },
  },
  spices: {
    label: "Readymade Garments",
    subcategories: {
      "basic-spices": "Basic Spices",
      "ground-spices": "Ground Spices",
      "whole-spices": "Whole Spices",
      "organic-spices": "Organic Spices",
    },
  },
  pulses: {
    label: "Corporate Giftings",
    subcategories: {
      "premium-collection": "Premium Collection",
      "rare-spices": "Rare Spices",
      international: "International",
      "limited-edition": "Limited Edition",
    },
  },
}

const products: Product[] = [
  // Exotic Blends
  {
    id: "1",
    name: "Paisley Elegance",
    price: 999,
    image: "/images/bedsheets/1.jpeg",
    category: "textiles",
    subcategory: "quilts",
    unit: "1 bedsheet with 2 pillow covers",
    description: "Elegant paisley print bedsheet in cool tones for a refreshing bedroom look.",
  },
  {
    id: "2",
    name: "Royal Blue Delight",
    price: 899,
    image: "/images/bedsheets/2.jpeg",
    category: "textiles",
    subcategory: "",
    unit: "1 bedsheet with 2 pillow covers",
    description: "Luxurious deep blue bedsheet with intricate floral patterns.",
  },
  {
    id: "3",
    name: "Sunset Bloom",
    price: 950,
    image: "/images/bedsheets/3.jpeg",
    category: "textiles",
    subcategory: "",
    unit: "1 bedsheet with 2 pillow covers",
    description: "Warm floral design in orange hues inspired by a sunset garden.",
  },
  {
    id: "4",
    name: "Modern Stripes",
    price: 850,
    image: "/images/bedsheets/4.jpeg",
    category: "textiles",
    subcategory: "",
    unit: "1 bedsheet with 2 pillow covers",
    description: "Contemporary striped pattern perfect for urban interiors.",
  },
  {
    id: "5",
    name: "Vintage Rose",
    price: 925,
    image: "/images/bedsheets/5.jpeg",
    category: "textiles",
    subcategory: "",
    unit: "1 bedsheet with 2 pillow covers",
    description: "Soft pink bedsheet with delicate vintage rose print.",
  },
  {
    id: "6",
    name: "Forest Fern",
    price: 975,
    image: "/images/bedsheets/6.jpeg",
    category: "textiles",
    subcategory: "",
    unit: "1 bedsheet with 2 pillow covers",
    description: "Nature-inspired design with fern leaves in a green palette.",
  },
  {
    id: "7",
    name: "Minimalist Grey",
    price: 799,
    image: "/images/bedsheets/7.jpeg",
    category: "textiles",
    subcategory: "",
    unit: "1 bedsheet with 2 pillow covers",
    description: "Sleek grey bedsheet with minimalist appeal for modern spaces.",
  },
  {
    id: "8",
    name: "Ethnic Mandala",
    price: 1099,
    image: "/images/bedsheets/8.jpeg",
    category: "textiles",
    subcategory: "",
    unit: "1 bedsheet with 2 pillow covers",
    description: "Vibrant ethnic print with mandala artwork to energize your decor.",
  },
  {
    id: "9",
    name: "Ocean Waves",
    price: 899,
    image: "/images/bedsheets/9.jpeg",
    category: "textiles",
    subcategory: "",
    unit: "1 bedsheet with 2 pillow covers",
    description: "Cool ocean-themed print for a calming sleep experience.",
  },
  {
    id: "10",
    name: "Golden Heritage",
    price: 1199,
    image: "/images/bedsheets/10.jpeg",
    category: "textiles",
    subcategory: "",
    unit: "1 bedsheet with 2 pillow covers",
    description: "Traditional gold-toned patterns for a royal touch.",
  },
  {
    id: "11",
    name: "Floral Symphony",
    price: 949,
    image: "/images/bedsheets/11.jpeg",
    category: "textiles",
    subcategory: "",
    unit: "1 bedsheet with 2 pillow covers",
    description: "Multi-colored floral explosion to brighten your room.",
  },
  {
    id: "12",
    name: "Abstract Dreams",
    price: 870,
    image: "/images/bedsheets/12.jpeg",
    category: "textiles",
    subcategory: "",
    unit: "1 bedsheet with 2 pillow covers",
    description: "Abstract geometric pattern for a stylish bedroom look.",
  },
  {
    id: "13",
    name: "Classic Checks",
    price: 820,
    image: "/images/bedsheets/13.jpeg",
    category: "textiles",
    subcategory: "",
    unit: "1 bedsheet with 2 pillow covers",
    description: "Timeless checkered pattern in neutral shades.",
  },
  {
    id: "14",
    name: "Lavender Mist",
    price: 980,
    image: "/images/bedsheets/14.jpeg",
    category: "textiles",
    subcategory: "",
    unit: "1 bedsheet with 2 pillow covers",
    description: "Soothing lavender hue for a serene bedroom ambiance.",
  },
  {
    id: "15",
    name: "Festive Gold",
    price: 1100,
    image: "/images/bedsheets/15.jpeg",
    category: "textiles",
    subcategory: "",
    unit: "1 bedsheet with 2 pillow covers",
    description: "Celebrate with rich golden patterns perfect for festive occasions.",
  },
  {
    id: "16",
    name: "Boho Spirit",
    price: 1050,
    image: "/images/bedsheets/16.jpeg",
    category: "textiles",
    subcategory: "",
    unit: "1 bedsheet with 2 pillow covers",
    description: "Eclectic boho print with a burst of colors and charm.",
  },
  // Essential Spices
  {
    id: "17",
    name: "Turmeric Powder",
    price: 95,
    image: "/placeholder.svg?height=300&width=300",
    category: "textiles",
    subcategory: "",
    unit: "500g",
    description: "Pure organic turmeric powder for daily cooking",
  },
  {
    id: "18",
    name: "Chili Powder",
    price: 85,
    image: "/placeholder.svg?height=300&width=300",
    category: "textiles",
    subcategory: "",
    unit: "250g",
    description: "Premium red chili powder with perfect heat",
  },
  {
    id: "19",
    name: "Garam Masala",
    price: 65,
    image: "/placeholder.svg?height=300&width=300",
    category: "textiles",
    subcategory: "",
    unit: "200g",
    description: "Traditional garam masala blend",
  },
  {
    id: "20",
    name: "Cumin Powder",
    price: 75,
    image: "/placeholder.svg?height=300&width=300",
    category: "textiles",
    subcategory: "",
    unit: "250g",
    description: "Fresh ground cumin powder",
  },
  // Chef's Selection
  {
    id: "21",
    name: "Premium Saffron",
    price: 800,
    image: "/placeholder.svg?height=300&width=300",
    category: "textiles",
    subcategory: "",
    unit: "5g",
    description: "Pure Kashmiri saffron threads",
  },
  {
    id: "22",
    name: "Black Cardamom",
    price: 180,
    image: "/placeholder.svg?height=300&width=300",
    category: "textiles",
    subcategory: "",
    unit: "100g",
    description: "Whole black cardamom pods",
  },
]

// Product Detail Modal Component
function ProductDetailModal({
  product,
  isOpen,
  onClose,
}: { product: Product; isOpen: boolean; onClose: () => void }) {
  const [selectedImage, setSelectedImage] = useState(0)
  // const { dispatch } = useCart()
  const { toast } = useToast()

  // const handleAddToCart = () => {
  //   if (!product.inStock) {
  //     toast({
  //       title: "Out of Stock",
  //       description: `${product.name} is currently out of stock.`,
  //       className: "bg-red-500 border-red-600 text-white",
  //     })
  //     return
  //   }

  //   for (let i = 0; i < quantity; i++) {
  //     dispatch({ type: "ADD_TO_CART", product })
  //   }

  //   toast({
  //     title: "Added to cart",
  //     description: `${quantity} x ${product.name} added to your cart.`,
  //     className: "bg-warm-brown border-cream text-light-beige",
  //   })
  //   onClose()
  // }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-heading">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Price and Rating */}
            <div className="space-y-2">
                {/* <Badge variant="outline" className="border-warm-brown/30 text-warm-brown">
                  {product.subcategory}
                </Badge> */}

            {/* Product Review and Ratings */}
              {/* <div className="flex items-center gap-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">({product.reviewCount} reviews)</span>
                </div>
              </div> */}

              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-heading">₹{product.price}.00 INR</span>
              </div>
              <p className="text-sm text-gray-600">per {product.unit}</p>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold text-heading mb-2">Description</h3>
              <p className="text-body">{product.description}</p>
            </div>

            {/* Features */}
            {/* <div>
              <h3 className="font-semibold text-heading mb-2">Key Features</h3>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-body">
                    <div className="w-2 h-2 bg-warm-brown rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Quantity and Add to Cart */}
            {/* <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium text-heading">Quantity:</span>
                <div className="flex items-center border border-gray-200 rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={!product.inStock}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={!product.inStock}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleAddToCart}
                  className={`flex-1 ${
                    product.inStock
                      ? "bg-warm-brown hover:bg-dark-brown text-white"
                      : "bg-gray-400 cursor-not-allowed text-gray-600"
                  }`}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white bg-transparent"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white bg-transparent"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div> */}

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div className="text-center">
                <Truck className="h-6 w-6 text-warm-brown mx-auto mb-1" />
                <p className="text-xs text-gray-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 text-warm-brown mx-auto mb-1" />
                <p className="text-xs text-gray-600">Quality Assured</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 text-warm-brown mx-auto mb-1" />
                <p className="text-xs text-gray-600">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        {/* <div className="mt-8">
          <h3 className="font-semibold text-heading mb-4">Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium text-gray-600">{key}:</span>
                <span className="text-heading">{value}</span>
              </div>
            ))}
          </div>
        </div> */}
      </DialogContent>
    </Dialog>
  )
}

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("name")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const { dispatch } = useCart()
  const { toast } = useToast()

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      const matchesSubcategory = selectedSubcategory === "all" || product.subcategory === selectedSubcategory
      return matchesSearch && matchesCategory && matchesSubcategory
    })

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "name":
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, selectedSubcategory, sortBy])

  const clearFilters = () => {
    setSelectedCategory("all")
    setSelectedSubcategory("all")
    setSearchTerm("")
    setSortBy("name")
  }

  function getSubcategories(): Record<string, string> {
    if (selectedCategory === "all") return {};
    return (
      categoryStructure[selectedCategory as keyof typeof categoryStructure]?.subcategories ||
      {}
    );
  }

  const activeFiltersCount = [selectedCategory !== "all", selectedSubcategory !== "all", searchTerm !== ""].filter(
    Boolean,
  ).length



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
    { value: "textiles", label: "Exotic Textile" },
    { value: "spices", label: "Essential Spices" },
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
        {/* <div className="flex flex-col lg:flex-row gap-6 mb-12 animate-slide-up">
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
        </div> */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 animate-slide-up">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search products, descriptions, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 border-gray-200 focus:border-warm-brown rounded-lg"
              />
            </div>

            {/* Category Select */}
            <div className="min-w-[200px]">
              <Select
                value={selectedCategory}
                onValueChange={(value) => {
                  setSelectedCategory(value)
                  setSelectedSubcategory("all")
                }}
              >
                <SelectTrigger className="h-12 border-gray-200 focus:border-warm-brown rounded-lg bg-white hover:bg-gray-50 transition-colors">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200 shadow-lg">
                  <SelectItem value="all" className="hover:bg-warm-brown/10 focus:bg-warm-brown/10">
                    All Categories
                  </SelectItem>
                  {Object.entries(categoryStructure).map(([key, category]) => (
                    <SelectItem key={key} value={key} className="hover:bg-warm-brown/10 focus:bg-warm-brown/10">
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Subcategory Select */}
            <div className="min-w-[200px]">
              <Select
                value={selectedSubcategory}
                onValueChange={setSelectedSubcategory}
                disabled={selectedCategory === "all"}
              >
                <SelectTrigger
                  className={`h-12 border-gray-200 focus:border-warm-brown rounded-lg bg-white transition-colors ${
                    selectedCategory === "all" ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
                  }`}
                >
                  <SelectValue placeholder="Select Subcategory" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200 shadow-lg">
                  <SelectItem value="all" className="hover:bg-warm-brown/10 focus:bg-warm-brown/10">
                    All Subcategories
                  </SelectItem>
                  {Object.entries(getSubcategories()).map(([key, label]) => (
                    <SelectItem key={key} value={key} className="hover:bg-warm-brown/10 focus:bg-warm-brown/10">
                      {label as string}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort Select */}
            <div className="min-w-[180px]">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-12 border-gray-200 focus:border-warm-brown rounded-lg bg-white hover:bg-gray-50 transition-colors">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200 shadow-lg">
                  <SelectItem value="name" className="hover:bg-warm-brown/10 focus:bg-warm-brown/10">
                    Name (A-Z)
                  </SelectItem>
                  <SelectItem value="price-low" className="hover:bg-warm-brown/10 focus:bg-warm-brown/10">
                    Price (Low to High)
                  </SelectItem>
                  <SelectItem value="price-high" className="hover:bg-warm-brown/10 focus:bg-warm-brown/10">
                    Price (High to Low)
                  </SelectItem>
                  <SelectItem value="rating" className="hover:bg-warm-brown/10 focus:bg-warm-brown/10">
                    Highest Rated
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Clear Filters */}
            {activeFiltersCount > 0 && (
              <Button
                variant="outline"
                onClick={clearFilters}
                className="h-12 px-6 border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white rounded-lg transition-all duration-300 bg-transparent"
              >
                <X className="h-4 w-4 mr-2" />
                Clear ({activeFiltersCount})
              </Button>
            )}
          </div>

          {/* Active Filters Display */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
              {selectedCategory !== "all" && (
                <Badge className="bg-warm-brown/10 text-warm-brown border-warm-brown/20 hover:bg-warm-brown/20">
                  {categoryStructure[selectedCategory as keyof typeof categoryStructure]?.label}
                </Badge>
              )}
              {selectedSubcategory !== "all" && (
                <Badge className="bg-warm-brown/10 text-warm-brown border-warm-brown/20 hover:bg-warm-brown/20">
                  {getSubcategories()[selectedSubcategory] as string}
                </Badge>
              )}
              {searchTerm && (
                <Badge className="bg-warm-brown/10 text-warm-brown border-warm-brown/20 hover:bg-warm-brown/20">
                  Search: "{searchTerm}"
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="product-card animate-slide-up bg-white relative cursor-pointer hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProduct(product)}
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
                {/* <Button onClick={() => handleAddToCart(product)} className="btn-primary w-full">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button> */}
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <div className="w-24 h-24 bg-light-beige rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-heading mb-2">No products found</h3>
            <p className="text-lg text-body mb-4">Try adjusting your search or filter criteria.</p>
            <Button
              onClick={clearFilters}
              className="bg-warm-brown hover:bg-dark-brown text-white px-6 py-3 rounded-lg"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <Footer />
    </div>
  )
}
