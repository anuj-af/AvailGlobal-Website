import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Globe, Heart } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Quality Without Compromise",
      description: "We deliver premium textiles, stylish garments, and high quality corporate gifts.",
    },
    {
      icon: Users,
      title: "⁠Customer Centric Solutions",
      description: "Every product is tailored to your needs - whether it’s bulk orders, personalized gifts or apparel.",
    },
    {
      icon: Globe,
      title: "Ethical & Sustainable Practices",
      description: "We source responsibly, supporting eco-friendly production and fair labor.",
    },
    {
      icon: Heart,
      title: "⁠Innovation Meets Tradition",
      description: "We fuse modern design with timeless craftsmanship to offer unique, impactful products.",
    },
  ]

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-light-beige">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-heading mb-6">About AvailGlobal</h1>
          <p className="text-xl text-body max-w-3xl mx-auto">
            A journey rooted in quality, creativity, and trust—bringing premium textiles, stylish garments, and thoughtful corporate gifts that elevate every experience.
          </p>
        </div>
      </section>

      {/* About us Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">Tradition Meets Modern Excellence</h2>
              <p className="text-lg text-body mb-6">
                Founded with a clear mission to make premium bedding, fashion apparel, and customized corporate gifts 
                accessible to businesses and consumers alike, AvailGlobal has evolved from a humble venture into a globally 
                recognized brand known for quality, reliability, and thoughtful design.
              </p>
              <p className="text-lg text-body mb-6">
                We proudly serve domestic and international markets, exporting authentic products that blend comfort, craftsmanship, 
                and innovation-bringing timeless style to homes, retailers, and institutions worldwide. 
                Rooted in India’s rich heritage of textile artistry, our story draws inspiration from centuries of 
                craftsmanship while responding to modern-day demands for quality and personalization.
              </p>
              <p className="text-lg text-body">
                Today, AvailGlobal collaborates with skilled manufacturers, local artisans, and trusted suppliers to offer 
                a diverse range of products, including cotton bed sheets, stylish apparel, and corporate gift sets. We focus 
                on quality, customization, and timely delivery—helping brands make a lasting impression.
              </p>
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

      {/* Team Section */}
      <section className="section-padding bg-light-beige">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">Meet Our Founders</h2>
            <p className="text-lg text-body">The visionaries behind AvailGlobal</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="text-center p-8 border-0 shadow-lg bg-white hover-lift">
              <CardContent className="p-0">
                <Image
                  src="/images/founders/avani.png"
                  alt="Founder 1"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6 bg-light-beige"
                />
                <h3 className="text-2xl font-semibold mb-2 text-heading">Avani Tongia</h3>
                <p className="text-warm-brown font-medium mb-4">Co-Founder & CEO</p>
                <p className="text-body italic">
                  "Quality is not an act, it's a habit. We ensure every spice meets our highest standards."
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg bg-white hover-lift">
              <CardContent className="p-0">
                <Image
                  src="/images/founders/vishesh.png"
                  alt="Founder 2"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6 bg-light-beige"
                />
                <h3 className="text-2xl font-semibold mb-2 text-heading">Vishesh Patni</h3>
                <p className="text-warm-brown font-medium mb-4">Co-Founder & COO</p>
                <p className="text-body italic">
                  "Our customers are family. We treat every order with the care we'd give our own loved ones."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
