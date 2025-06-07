import Navigation from "./components/navigation"
import Footer from "./components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart, ShoppingCart, Package, Leaf, Award, Users, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const bestSellingProducts = [
    {
      id: "1",
      name: "Turmeric Powder",
      price: "₹95.00",
      originalPrice: "₹120.00 INR",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
    },
    {
      id: "2",
      name: "Chili Powder",
      price: "₹85.00 INR",
      originalPrice: "₹100.00 INR",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
    },
    {
      id: "3",
      name: "Garam Masala",
      price: "₹65.00 INR",
      originalPrice: "₹80.00 INR",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
    },
    {
      id: "4",
      name: "Chili Powder",
      price: "₹85.00 INR",
      originalPrice: "₹100.00 INR",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
    },
  ]

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
                  src="/banner3.png"
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

      {/* Product Categories */}
      <section className="section-padding bg-light-beige">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">Product Categories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="category-icon">
                    <category.icon className="h-8 w-8 text-warm-brown mx-auto" />
                  </div>
                  <h3 className="text-2xl font-semibold text-heading mb-2">{category.title}</h3>
                  <p className="text-body">{category.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">From Tradition to Your Table</h2>
              <p className="text-lg text-body mb-6">
                AvailGlobal Spices was born from a simple belief: everyone deserves access to authentic, high-quality spices
                that connect them to rich culinary traditions. What started as a small family business has grown into a
                trusted source for premium spices and blends.
              </p>
              <p className="text-lg text-body mb-6">
                Our founders grew up surrounded by the vibrant spice markets of India, where they learned to
                appreciate the finest quality products. They noticed that many people struggled to find authentic,
                premium spices at fair prices, which inspired them to bridge this gap.
              </p>
              <p className="text-lg text-body">
                Today, we work directly with farmers and suppliers to bring you spices that are not just of exceptional
                quality, but also support sustainable livelihoods and preserve traditional cultivation methods.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Our spice collection"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-light-beige">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">Our Values</h2>
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

      {/* Exclusive Spice Bundles */}
      {/* <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">Exclusive Spice Bundles</h2>
            <p className="text-body max-w-2xl mx-auto">
              Enhance your culinary experience with our specially curated spice bundles. Each package offers a unique
              mix of flavors for authentic, delightful cooking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Essentials Bundle"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="animate-slide-in-right">
              <Card className="p-8 border-0 shadow-lg">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-heading mb-4">Essentials Bundle</h3>
                  <p className="text-body mb-6">
                    A must-have selection of daily spices for all your cooking needs. Perfect for creating traditional
                    dishes with ease.
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm text-gray-500">Essential Spices</span>
                    <span className="text-sm text-gray-500">Daily Essentials</span>
                    <span className="text-sm text-gray-500">Quality</span>
                    <span className="text-sm text-gray-500">Authentic</span>
                  </div>
                  <div className="text-3xl font-bold text-heading mb-6">1,200 INR</div>
                  <Button className="btn-primary w-full">Buy Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}

      {/* Best Selling Products */}
      <section className="section-padding">
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
      </section>

      {/* Customer Testimonials */}
      <section className="section-padding bg-light-beige">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">Customers Are Saying</h2>
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

      <Footer />
    </div>
  )
}
