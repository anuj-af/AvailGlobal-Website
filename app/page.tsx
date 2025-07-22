"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Navigation from "./components/navigation"
// import Footer from "./components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star, Heart, Award, Users, Globe, Send,  ChevronLeft, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Autoplay from "embla-carousel-autoplay"
import Footer from "./components/footer"
import Link from "next/link";

export default function HomePage() {
  // const bestSellingProducts = [
  //   {
  //     id: "1",
  //     name: "Paisley Elegance Bedsheet",
  //     price: "₹999.00",
  //     originalPrice: "₹1,299.00",
  //     image: "/images/bedsheets/1.jpeg",
  //     rating: 5,
  //   },
  //   {
  //     id: "2",
  //     name: "Royal Blue Delight Bedsheet",
  //     price: "₹899.00",
  //     originalPrice: "₹1,199.00",
  //     image: "/images/bedsheets/2.jpeg",
  //     rating: 5,
  //   },
  //   {
  //     id: "3",
  //     name: "Sunset Bloom Bedsheet",
  //     price: "₹950.00",
  //     originalPrice: "₹1,150.00",
  //     image: "/images/bedsheets/3.jpeg",
  //     rating: 5,
  //   },
  //   {
  //     id: "4",
  //     name: "Ethnic Mandala Bedsheet",
  //     price: "₹1,099.00",
  //     originalPrice: "₹1,399.00",
  //     image: "/images/bedsheets/4.jpeg",
  //     rating: 5,
  //   },
  // ];

  const heroSlides = [
    {
      id: 1,
      image: "/placeholder.svg?height=800&width=1400",
      video:"/vid1.mp4",
      alt: "Premium Spices Collection",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=800&width=1400",
      video:"/vid4.mp4",
      alt: "Quality Textiles",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=800&width=1400",
      video:"/vid3.mp4",
      alt: "Fresh Pulses",
    },
  ]

  const testimonials = [
    {
      name: "Anuj",
      rating: 5,
      comment: "The Quality Was Soo Good!",
      details: "AvailGlobal textiles transformed my business! The quality is exceptional and authentic.",
    },
    {
      name: "Renam",
      rating: 5,
      comment: "Premium Products!",
      details: "Best gifting products I've ever used. Fresh, aromatic, and perfectly ground.",
    },
  ]

  const values = [
    {
      icon: Award,
      title: "End-to-End Expertise",
      description: "Delivering sleep, style, and gifting solutions for top brands with precision and care.",
    },
    {
      icon: Users,
      title: "Exceptional Quality",
      description: "Every product is made using premium materials for durability, feel, and finish.",
    },
    {
      icon: Globe,
      title: "Tailored Solutions",
      description: "From custom sizes to exclusive designs, we shape every order to your needs.",
    },
    {
      icon: Heart,
      title: "Trusted Worldwide",
      description: "Serving both local and international markets with reliable shipping.",
    },
  ]

  const industries = [
    {
      title: "Bedsheets and Hospitality",
      description: "Our collection showcases premium bedsheets, plush comforters, supportive pillows, and elegant quilts—expertly crafted from breathable fabrics like cotton and linen.",
      image: "/bedsheet.png",
      stats: "50+ Products",
    },
    {
      title: "Corporate Giftings",
      description: "Explore our versatile collection featuring branded office accessories, luxury gift hampers, sustainable corporate gifts, festive gifting kits, and innovative tech gadgets.",
      image: "/gifting.png",
      stats: "40+ Types",
    },
    {
      title: "Readymade Garments",
      description: "AvailGlobal specializes in delivering premium ready-made garments designed for fashion retailers, designers, and private labels. Our collections combine trendy style & comfort",
      image: "/garments.png",
      stats: "20+ Variants",
    },
  ]

  const blogItems = [
    {
      id: 1,
      title: "Top Textile Trends for 2025: Innovations in Fabric & Design",
      image: "/images/blogs/blog1.png",
      date: "June 18, 2025",
      slug: "top-textile-trends-2025",
      excerpt: "Explore the latest innovations shaping the textile industry, including sustainable materials, digital printing, and smart fabrics.",
    },
    {
      id: 2,
      title: "Corporate Gifting: How to Make Lasting Impressions",
      image: "/images/blogs/blog2.png",
      date: "May 27, 2025",
      slug: "corporate-gifting-tips",
      excerpt: "Discover creative and impactful corporate gifting ideas that strengthen client relationships and boost brand loyalty.",
    },
    {
      id: 3,
      title: "Choosing the Right Readymade Garments for Every Season",
      image: "/images/blogs/blog3.png",
      date: "May 14, 2025",
      slug: "readymade-garments-guide",
      excerpt: "A practical guide to selecting high-quality readymade garments that fit every season and occasion.",
    },
    {
      id: 4,
      title: "Sustainability in Textiles: AvailGlobal’s Commitment to a Greener Future",
      image: "/images/blogs/blog4.png",
      date: "April 28, 2025",
      slug: "sustainable-textiles",
      excerpt: "Learn how AvailGlobal integrates eco-friendly practices into textile manufacturing while maintaining product excellence.",
    },
  ];

  const brandLogos = [
    { name: "C21", logo: "/images/brands/c21.png" },
    { name: "Adven Tyre", logo: "/images/brands/adven.png" },
    { name: "BJP", logo: "/images/brands/bjp.png" },
    { name: "Tata Power Lux", logo: "/images/brands/tata.png" },
    { name: "Eicher", logo: "/images/brands/eicher.png" },
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
  const [currentSlide, setCurrentSlide] = useState(0)
  const { toast } = useToast()
  
  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

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
      {/* <section className="section-padding hero-pattern">
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
      </section> */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-5000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              /> */}
              <video
                ref={(el) => {
                  if (el) {
                    if (index === currentSlide) {
                      el.play()
                    } else {
                      el.pause()
                    }
                  }
                }}
                src={slide.video}
                // poster={slide.image}
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center space-x-6">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="w-8 h-8 rounded-full border-white/30 text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm bg-white/10"
            >
              <ChevronLeft className="h-2 w-2" />
            </Button>

            <div className="flex space-x-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="w-8 h-8 rounded-full border-white/30 text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Optional overlay content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
              Discover the Essence of Tradition
            </h1>
            <p className="text-xl md:text-xl mb-12 animate-slide-up">
              Crafted with passion and tradition, bringing authentic products to you
            </p>
            {/* <Button className="bg-warm-brown hover:bg-dark-brown text-white px-8 py-6 text-lg rounded-lg shadow-xl animate-slide-up">
              View Products
            </Button> */}
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

      {/* About Us Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">The AvailGlobal Journey</h2>
              <p className="text-lg text-body mb-6">
                Founded with a clear mission to make premium bedding, fashion apparel, and customized corporate 
                gifts accessible to businesses and consumers alike, AvailGlobal has evolved from a humble venture 
                into a globally recognized brand known for quality, reliability, and thoughtful design.
              </p>
              <p className="text-lg font-bold text-body mb-6">
                Tradition Meets Modern Excellence
              </p>
              <p className="text-lg text-body mb-6">
                We proudly serve domestic and international markets, exporting authentic products that blend comfort, 
                craftsmanship, and innovation-bringing timeless style to homes, retailers, and institutions worldwide.
                Rooted in India’s rich heritage of textile artistry, our story draws inspiration from centuries of craftsmanship 
                while responding to modern-day demands for quality and personalization.
              </p>
              <Button asChild className="btn-secondary bg-cream hover:bg-warm-brown">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="animate-slide-in-right">
              <Image
                src="/about.png"
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

      {/* AvailGlobal Blogs Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-20"></div>
        </div>

        <div className="container-max relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Left side - Title */}
            <div className="lg:w-1/4 mb-8 lg:mb-0">
              <div className="animate-slide-in-left">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Blogs</h2>
                <p className="text-xl lg:text-2xl font-bold">By AvailGlobal</p>
                <div className="w-16 h-1 bg-dark-brown mt-4"></div>
              </div>
            </div>

            {/* Right side - Blog Cards Carousel */}
            <div className="w-full relative">
              <Carousel className="w-full" opts={{ loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
                <CarouselContent className="-ml-4 mt-2 mb-2">
                  {blogItems.map((item, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 mt-4 md:mt-0">
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full hover-lift transition-all duration-300">
                        <div className="h-48  relative overflow-hidden flex items-center justify-center">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                              {item.date}
                            </span>
                          </div>
                          <h3 className="font-semibold text-lg line-clamp-2 text-heading mb-3">{item.title}</h3>
                          <p className="text-sm text-body line-clamp-2 mb-4">{item.excerpt}</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-warm-brown hover:text-dark-brown p-0 h-auto font-medium"
                          >
                            Read More →
                          </Button>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* Mobile arrows */}
                <CarouselPrevious className="left-2 sm:hidden bg-white/90 hover:bg-white" />
                <CarouselNext className="right-2 sm:hidden bg-white/90 hover:bg-white" />
                {/* Desktop arrows */}
                <CarouselPrevious className="-left-12 bg-white/90 hover:bg-white" />
                <CarouselNext className="-right-12 bg-white/90 hover:bg-white" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section-padding bg-light-beige">
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
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">Trusted by Leading Brands</h2>
            <p className="text-lg text-body">Partnering with industry leaders across various sectors</p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-slide space-x-16 items-center">
              {[...brandLogos, ...brandLogos].map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-16 flex items-center justify-center transition-all duration-300"
                >
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="max-w-full max-h-full object-contain hover:opacity-100 transition-opacity duration-300"
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
      <section className="section-padding bg-light-beige">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">Ready To Collaborate</h2>
              <p className="text-lg text-body">
                We're Listening
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
                      {["Textiles", "Readymade Garments", "Corporate Giftings"].map((category) => (
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

      <Footer />
    </div>
  )
}
