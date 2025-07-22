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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Send, Package, Users, Clock, Phone } from "lucide-react"

export default function QuotePage() {
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

  const benefits = [
    {
      icon: Package,
      title: "Bulk Pricing",
      description: "Special wholesale rates for large orders",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal account manager for your business",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Fast processing and delivery for urgent orders",
    },
  ]

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-heading mb-4">Ready To Collaborate</h1>
          <p className="text-lg text-body max-w-2xl mx-auto">
            We're listening or Start your next chapter with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quote Form */}
          <div className="lg:col-span-2">
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
                      {["Textiles", "Readymade Garments", "Corporate Giftings"].map((category) => (
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
                    {/* <div>
                      <Label htmlFor="urgency" className="text-heading">
                        Urgency
                      </Label>
                      <Select
                        value={formData.urgency}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, urgency: value }))}
                      >
                        <SelectTrigger className="mt-1 border-gray-200 focus:border-warm-brown">
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (1-3 days)</SelectItem>
                          <SelectItem value="urgent">Urgent (1 week)</SelectItem>
                          <SelectItem value="normal">Normal (2-4 weeks)</SelectItem>
                          <SelectItem value="flexible">Flexible timeline</SelectItem>
                        </SelectContent>
                      </Select>
                    </div> */}
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
          </div>

          {/* Benefits Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-heading">Why Choose Our Wholesale?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-warm-brown/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-5 w-5 text-warm-brown" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-heading">{benefit.title}</h3>
                      <p className="text-sm text-body">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 spice-gradient text-white">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 mb-3" />
                <h3 className="text-xl font-semibold mb-3">Need Immediate Assistance?</h3>
                <p className="mb-4 text-white/90">Our wholesale team is ready to help you with urgent requirements.</p>
                <Button variant="secondary" className="w-full bg-white text-warm-brown hover:bg-gray-100">
                  Call +880 1234 567890
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-heading">Quote Processing Time</h3>
                <ul className="space-y-2 text-sm text-body">
                  <li>• Standard quotes: 24-48 hours</li>
                  <li>• Complex requirements: 3-5 business days</li>
                  <li>• Urgent quotes: Same day (if submitted before 2 PM)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
