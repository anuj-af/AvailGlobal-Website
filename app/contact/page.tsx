"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Send, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
      className: "bg-warm-brown border-cream text-light-beige"
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+880 1234 567890",
      subtitle: "Mon-Sat, 9 AM - 7 PM",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@availglobal.com",
      subtitle: "We reply within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Indore, Madhya Pradesh, India",
      subtitle: "Visit our showroom",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+880 1234 567890",
      subtitle: "Quick support available",
    },
  ]

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-heading mb-4">Contact Us</h1>
          <p className="text-lg text-body max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-heading">Send us a Message</CardTitle>
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

                  <div>
                    <Label htmlFor="subject" className="text-heading">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                      required
                      className="mt-1 border-gray-200 focus:border-warm-brown"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-heading">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder="Tell us how we can help you..."
                      required
                      className="mt-1 min-h-[120px] border-gray-200 focus:border-warm-brown"
                    />
                  </div>

                  <Button type="submit" className="btn-primary w-full text-lg py-3" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-heading">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-warm-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-warm-brown" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-heading">{info.title}</h3>
                      <p className="text-heading">{info.details}</p>
                      <p className="text-sm text-body">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-heading">Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-body">Monday - Friday</span>
                    <span className="font-medium text-heading">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-body">Saturday</span>
                    <span className="font-medium text-heading">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-body">Sunday</span>
                    <span className="font-medium text-heading">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 spice-gradient text-white">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 mb-3" />
                <h3 className="text-xl font-semibold mb-3">Quick Response</h3>
                <p className="mb-4 text-white/90">Need immediate assistance? Call us directly for faster support.</p>
                <Button variant="secondary" className="w-full bg-white text-warm-brown hover:bg-gray-100">
                  Call Now: +880 1234 567890
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <Card className="shadow-lg border-0 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-heading">Visit Our Store</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-light-beige h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-warm-brown mx-auto mb-2" />
                  <p className="text-heading font-medium">Interactive Map</p>
                  <p className="text-sm text-body">123 Indore, Madhya Pradesh, India</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
