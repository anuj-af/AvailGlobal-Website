"use client"

import { useState, useMemo } from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Heart, X, Phone, Mail } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { useCart, type Product } from "../context/cart-context"
import { useToast } from "@/hooks/use-toast"

// Category structure with subcategories
const categoryStructure = {
  Hospitality: {
    label: "Bedsheet and Hospitality",
    subcategories: {
      Bedsheets: "Bedsheets",

    },
  }, 
  giftings: {
    label: "Readymade Garments",
    subcategories: {

    },
  },
  garments: {
    label: "Corporate Giftings",
    subcategories: {

    },
  },
}

const products: Product[] = [
  // Product 1
  {
    id: "1",
    name: "QUILTED AND COORDINATE PREMIUM KING SIZE BEDSHEET COLLECTION { 1+2 } 👑",
    price: 999,
    image: "/images/products/product1/1.jpg",
    category: "Hospitality",
    subcategory: "Bedsheets",
    specification: ["1 KING SIZE JOINTLESS PREMIUM BEDSHEET { 108x108INCHES }", "2 QUILTED KING SIZE PREMIUM PILLOW COVERS WITH BORDERS"],
    features: ["FABRIC - VERY HEAVY GSM AND SOFT COTTON FEEL GLACE"],
  },
  {
    id: "2",
    name: "QUILTED AND COORDINATE PREMIUM KING SIZE BEDSHEET COLLECTION { 1+2 } 👑",
    price: 999,
    image: "/images/products/product1/2.jpg",
    category: "Hospitality",
    subcategory: "Bedsheets",
    specification: ["1 KING SIZE JOINTLESS PREMIUM BEDSHEET { 108x108INCHES }", "2 QUILTED KING SIZE PREMIUM PILLOW COVERS WITH BORDERS"],
    features: ["FABRIC - VERY HEAVY GSM AND SOFT COTTON FEEL GLACE"],
  },
  {
    id: "3",
    name: "QUILTED AND COORDINATE PREMIUM KING SIZE BEDSHEET COLLECTION { 1+2 } 👑",
    price: 999,
    image: "/images/products/product1/3.jpg",
    category: "Hospitality",
    subcategory: "Bedsheets",
    specification: ["1 KING SIZE JOINTLESS PREMIUM BEDSHEET { 108x108INCHES }", "2 QUILTED KING SIZE PREMIUM PILLOW COVERS WITH BORDERS"],
    features: ["FABRIC - VERY HEAVY GSM AND SOFT COTTON FEEL GLACE"],
  },
  {
    id: "4",
    name: "QUILTED AND COORDINATE PREMIUM KING SIZE BEDSHEET COLLECTION { 1+2 } 👑",
    price: 999,
    image: "/images/products/product1/4.jpg",
    category: "Hospitality",
    subcategory: "Bedsheets",
    specification: ["1 KING SIZE JOINTLESS PREMIUM BEDSHEET { 108x108INCHES }", "2 QUILTED KING SIZE PREMIUM PILLOW COVERS WITH BORDERS"],
    features: ["FABRIC - VERY HEAVY GSM AND SOFT COTTON FEEL GLACE"],
  },
  // Product 2
  {
    id: "5",
    name: "100% COTTON / POLY-COTTON BEDSHEET",
    price: 1000,
    image: "/images/products/product2/1.jpg",
    category: "Hospitality",
    subcategory: "Bedsheets",
    specification: ["SET INCLUDES: 1 FLAT BEDSHEET • 2 PILLOW COVERS (17” X 27” OR STANDARD SIZE)", "SIZE OPTIONS: (SINGLE: 60” X 90”) / (DOUBLE: 90” X 100”) / (KING: 108” X 108”)"],
    features: ["FABRIC: 100% COTTON / POLY-COTTON BLEND (SELECT BASED ON ACTUAL MATERIAL)", "WEAVE TYPE: SATIN STRIPE (1 CM STRIPE PATTERN)", "THREAD COUNT: 200 TC / 300 TC (SPECIFY ACTUAL COUNT)" ,"FINISH: SOFT, WRINKLE-RESISTANT, EASY TO MAINTAIN"],
  },
  {
    id: "6",
    name: "100% COTTON / POLY-COTTON BEDSHEET",
    price: 1000,
    image: "/images/products/product2/2.jpg",
    category: "Hospitality",
    subcategory: "Bedsheets",
    specification: ["SET INCLUDES: 1 FLAT BEDSHEET • 2 PILLOW COVERS (17” X 27” OR STANDARD SIZE)", "SIZE OPTIONS: (SINGLE: 60” X 90”) / (DOUBLE: 90” X 100”) / (KING: 108” X 108”)"],
    features: ["FABRIC: 100% COTTON / POLY-COTTON BLEND (SELECT BASED ON ACTUAL MATERIAL)", "WEAVE TYPE: SATIN STRIPE (1 CM STRIPE PATTERN)", "THREAD COUNT: 200 TC / 300 TC (SPECIFY ACTUAL COUNT)" ,"FINISH: SOFT, WRINKLE-RESISTANT, EASY TO MAINTAIN"],
  },
  {
    id: "7",
    name: "100% COTTON / POLY-COTTON BEDSHEET",
    price: 1000,
    image: "/images/products/product2/3.jpg",
    category: "Hospitality",
    subcategory: "Bedsheets",
    specification: ["SET INCLUDES: 1 FLAT BEDSHEET • 2 PILLOW COVERS (17” X 27” OR STANDARD SIZE)", "SIZE OPTIONS: (SINGLE: 60” X 90”) / (DOUBLE: 90” X 100”) / (KING: 108” X 108”)"],
    features: ["FABRIC: 100% COTTON / POLY-COTTON BLEND (SELECT BASED ON ACTUAL MATERIAL)", "WEAVE TYPE: SATIN STRIPE (1 CM STRIPE PATTERN)", "THREAD COUNT: 200 TC / 300 TC (SPECIFY ACTUAL COUNT)" ,"FINISH: SOFT, WRINKLE-RESISTANT, EASY TO MAINTAIN"],
  },
  {
    id: "8",
    name: "100% COTTON / POLY-COTTON BEDSHEET",
    price: 1000,
    image: "/images/products/product2/4.jpg",
    category: "Hospitality",
    subcategory: "Bedsheets",
    specification: ["SET INCLUDES: 1 FLAT BEDSHEET • 2 PILLOW COVERS (17” X 27” OR STANDARD SIZE)", "SIZE OPTIONS: (SINGLE: 60” X 90”) / (DOUBLE: 90” X 100”) / (KING: 108” X 108”)"],
    features: ["FABRIC: 100% COTTON / POLY-COTTON BLEND (SELECT BASED ON ACTUAL MATERIAL)", "WEAVE TYPE: SATIN STRIPE (1 CM STRIPE PATTERN)", "THREAD COUNT: 200 TC / 300 TC (SPECIFY ACTUAL COUNT)" ,"FINISH: SOFT, WRINKLE-RESISTANT, EASY TO MAINTAIN"],
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white p-8">
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
                <Badge variant="outline" className="border-warm-brown/30 text-warm-brown">
                  {product.subcategory}
                </Badge>

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

              {/* <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-heading">Price: ₹{product.price}.00 INR</span>
              </div> */}
              {/* <p className="text-sm text-gray-600">per {product.unit}</p> */}
            </div>

            {/* Specification */}
              <div>
              <h3 className="font-semibold text-heading mb-2">Specifications</h3>
              <ul className="space-y-1">
                {product.specification.map((specification, index) => (
                  <li key={index} className="flex items-center text-sm text-body">
                    <div className="w-2 h-2 bg-warm-brown rounded-full mr-2"></div>
                    {specification}
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-heading mb-2">Key Features</h3>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-body">
                    <div className="w-2 h-2 bg-warm-brown rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

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

        {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button asChild className="flex-1 bg-warm-brown hover:bg-warm-brown/90 text-white">
                <a href="tel:+918989548626" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex-1 border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white bg-transparent"
              >
                <a href="mailto:avanitongia@gmail.com" className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  Send Enquiry
                </a>
              </Button>
            </div>
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
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
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
              className="product-card animate-slide-up bg-white relative cursor-pointer hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
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
                <p className="text-sm text-body mb-3">{product.subcategory}</p>
                {/* Rating & Reviews */}
                {/* <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div> */}
                {/* <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-lg font-bold text-heading">₹{product.price}.00 INR</span>
                    <span className="text-sm text-gray-500 ml-1">per {product.unit}</span>
                  </div>
                </div> */}
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
