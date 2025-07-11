"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "./components/navigation"
import Footer from "./components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Heart, ShoppingCart, Package, Leaf, Award, Users, Globe, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"



export default function HomePage() {
  const bestSellingProducts = [
    {
      id: "1",
      name: "Paisley Elegance Bedsheet",
      price: "₹999.00",
      originalPrice: "₹1,299.00",
      image: "/images/bedsheets/1.jpeg",
      rating: 5,
    },
    {
      id: "2",
      name: "Royal Blue Delight Bedsheet",
      price: "₹899.00",
      originalPrice: "₹1,199.00",
      image: "/images/bedsheets/2.jpeg",
      rating: 5,
    },
    {
      id: "3",
      name: "Sunset Bloom Bedsheet",
      price: "₹950.00",
      originalPrice: "₹1,150.00",
      image: "/images/bedsheets/3.jpeg",
      rating: 5,
    },
    {
      id: "4",
      name: "Ethnic Mandala Bedsheet",
      price: "₹1,099.00",
      originalPrice: "₹1,399.00",
      image: "/images/bedsheets/4.jpeg",
      rating: 5,
    },
  ];

  const categories = [
    {
      icon: Package,
      title: "Essential Spices",
      description: "Premium Quailty - Indian Spices",
    },
    {
      icon: Leaf,
      title: "Exotic Blends",
      description: "Exceptional & Unique Textiles",
    },
    {
      icon: Award,
      title: "Organic Pulses",
      description: "Premium Quality - Indian Pulses",
    },
  ]

  const testimonials = [
    {
      name: "Vishnu",
      rating: 5,
      comment: "The Spices were Soo Good!",
      details: "AvailGlobal spices transformed my cooking! The quality is exceptional and the flavors are authentic.",
    },
    {
      name: "Avani",
      rating: 5,
      comment: "Excellent Quality!",
      details: "Best spices I've ever used. Fresh, aromatic, and perfectly ground.",
    },
  ]

  const values = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "We source only the finest spices from trusted farms and suppliers worldwide.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We're committed to exceptional service.",
    },
    {
      icon: Globe,
      title: "Sustainable Sourcing",
      description: "We support sustainable farming practices and fair trade partnerships.",
    },
    {
      icon: Heart,
      title: "Passion for Flavor",
      description: "Our love for authentic flavors drives everything we do.",
    },
  ]

  const industries = [
    {
      title: "Spices Industry",
      description: "Premium spices and seasonings for restaurants, food manufacturers, and culinary professionals",
      image: "/placeholder.svg?height=300&width=400",
      stats: "500+ Products",
    },
    {
      title: "Textile Industry",
      description: "High-quality fabrics and textiles for fashion designers, manufacturers, and retailers",
      image: "/placeholder.svg?height=300&width=400",
      stats: "200+ Varieties",
    },
    {
      title: "Pulses Industry",
      description: "Nutritious pulses and legumes for food processors, wholesalers, and health-conscious consumers",
      image: "/placeholder.svg?height=300&width=400",
      stats: "100+ Types",
    },
  ]

    const brandLogos = [
    { name: "Brand 1", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Brand 2", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Brand 3", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Brand 4", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Brand 5", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Brand 6", logo: "/placeholder.svg?height=60&width=120" },
  ]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productCategories: [] as string[],
    quantity: "",
    message: "",
    urgency: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleCategoryChange = (category: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      productCategories: checked
        ? [...prev.productCategories, category]
        : prev.productCategories.filter((c) => c !== category),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you within 24 hours with a detailed quote.",
      className: "bg-warm-brown border-cream text-light-beige"
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      productCategories: [],
      quantity: "",
      message: "",
      urgency: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding hero-pattern">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading mb-6 leading-tight">
                Discover the Essence of Fresh Spices
              </h1>
              <p className="text-lg text-body mb-8 max-w-lg">
                Crafted with passion and tradition, our spices bring the flavors of the world to your kitchen. Elevate
                every meal with the authentic taste of AvailGlobal Spices.
              </p>
              <Button className="btn-secondary bg-cream hover:bg-warm-brown">Shop Now</Button>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <Image
                  src="/images/banner3.jpg"
                  alt="Fresh Spices Collection"
                  width={600}
                  height={500}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="section-padding bg-light-beige">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">Industries We Serve</h2>
            <p className="text-lg text-body max-w-3xl mx-auto">
              Partnering with diverse industries to deliver specialized solutions and premium products
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-md bg-white hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="relative h-64">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-heading mb-4">{industry.title}</h3>
                  <p className="text-body leading-relaxed">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">About AvailGlobal</h2>
              <p className="text-lg text-body mb-6">
                Founded with a vision to bridge the gap between traditional quality and modern convenience, 
                AvailGlobal has grown to become India's trusted partner for premium spices, textiles, and pulses.
              </p>
              <p className="text-lg text-body mb-6">
                Our commitment to excellence drives us to source only the finest products from trusted suppliers
                 worldwide, ensuring that every item meets our rigorous quality standards.
              </p>
              <p className="text-lg text-body mb-6">
                Today, we work directly with farmers and suppliers to bring you spices that are not just of exceptional
                quality, but also support sustainable livelihoods and preserve traditional cultivation methods.
              </p>
              <Button className="btn-secondary bg-cream hover:bg-warm-brown">Learn More About Us</Button>
            </div>
            <div className="animate-slide-in-right">
              <Image
                src="/images/banner2.png"
                alt="Our spice collection"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-light-beige">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">Why Choose Us</h2>
            <p className="text-lg text-body max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg bg-white hover-lift">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-heading">{value.title}</h3>
                  <p className="text-body">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      {/* <section className="section-padding">
        <div className="container-max">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-heading">Best Selling Products</h2>
            <Link href="/products" className="text-warm-brown hover:text-dark-brown font-medium">
              See all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellingProducts.map((product, index) => (
              <Card
                key={product.id}
                className="product-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative p-4">
                  <Button variant="ghost" size="sm" className="absolute top-2 right-2 z-10">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold text-heading mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-lg font-bold text-heading">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                    </div>
                  </div>
                  <Button className="btn-primary w-full">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Customer Testimonials */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-warm-brown rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <h5 className="font-semibold text-heading mb-2">{testimonial.comment}</h5>
                  <p className="text-body">{testimonial.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners Slider */}
      <section className="section-padding bg-light-beige">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">Trusted by Leading Brands</h2>
            <p className="text-lg text-body">Partnering with industry leaders across various sectors</p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-slide space-x-12 items-center">
              {[...brandLogos, ...brandLogos].map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section-padding">
       <Card className="shadow-lg border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-heading">Request Your Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-heading">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        required
                        className="mt-1 border-gray-200 focus:border-warm-brown"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-heading">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        required
                        className="mt-1 border-gray-200 focus:border-warm-brown"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-heading">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        required
                        className="mt-1 border-gray-200 focus:border-warm-brown"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-heading">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                        className="mt-1 border-gray-200 focus:border-warm-brown"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-heading">Product Categories of Interest *</Label>
                    <div className="mt-2 space-y-2">
                      {["Essential Spices", "Exotic Textile", "Premium Pulses"].map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={category}
                            checked={formData.productCategories.includes(category)}
                            onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                          />
                          <Label htmlFor={category} className="text-body">
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="quantity" className="text-heading">
                        Estimated Quantity
                      </Label>
                      <Input
                        id="quantity"
                        value={formData.quantity}
                        onChange={(e) => setFormData((prev) => ({ ...prev, quantity: e.target.value }))}
                        placeholder="e.g., 100 kg, 50 pieces"
                        className="mt-1 border-gray-200 focus:border-warm-brown"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-heading">
                      Additional Requirements
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder="Please describe your specific requirements, preferred delivery location, or any other details..."
                      className="mt-1 min-h-[120px] border-gray-200 focus:border-warm-brown"
                    />
                  </div>

                  <Button type="submit" className="btn-primary w-full text-lg py-3" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Request Custom Quote
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
      </section> */}

      {/* Get Quote Form */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">Get Custom Quote</h2>
              <p className="text-lg text-body">
                Ready to partner with us? Get a personalized quote tailored to your business needs.
              </p>
            </div>

            <Card className="shadow-xl border-0 bg-white mb-8">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-heading font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        required
                        className="mt-2 border-gray-200 focus:border-warm-brown h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-heading font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        required
                        className="mt-2 border-gray-200 focus:border-warm-brown h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-heading font-medium">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        required
                        className="mt-2 border-gray-200 focus:border-warm-brown h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-heading font-medium">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                        className="mt-2 border-gray-200 focus:border-warm-brown h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-heading font-medium">Industries of Interest *</Label>
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["Spices", "Textiles", "Pulses"].map((category) => (
                        <div
                          key={category}
                          className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-warm-brown transition-colors"
                        >
                          <Checkbox
                            id={category}
                            checked={formData.productCategories.includes(category)}
                            onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                          />
                          <Label htmlFor={category} className="text-body font-medium cursor-pointer">
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="quantity" className="text-heading font-medium">
                        Estimated Quantity
                      </Label>
                      <Input
                        id="quantity"
                        value={formData.quantity}
                        onChange={(e) => setFormData((prev) => ({ ...prev, quantity: e.target.value }))}
                        placeholder="e.g., 100 kg, 50 pieces"
                        className="mt-2 border-gray-200 focus:border-warm-brown h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="urgency" className="text-heading font-medium">
                        Timeline
                      </Label>
                      <Select
                        value={formData.urgency}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, urgency: value }))}
                      >
                        <SelectTrigger className="mt-2 border-gray-200 focus:border-warm-brown h-12">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (1-3 days)</SelectItem>
                          <SelectItem value="urgent">Urgent (1 week)</SelectItem>
                          <SelectItem value="normal">Normal (2-4 weeks)</SelectItem>
                          <SelectItem value="flexible">Flexible timeline</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-heading font-medium">
                      Additional Requirements
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder="Please describe your specific requirements, preferred delivery location, or any other details..."
                      className="mt-2 min-h-[120px] border-gray-200 focus:border-warm-brown"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-warm-brown hover:bg-dark-brown text-white py-4 text-lg font-medium rounded-lg shadow-lg transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Get Custom Quote
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
