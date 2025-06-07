"use client"

import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useCart } from "../context/cart-context"
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function CartPage() {
  const { state, dispatch } = useCart()
  const { toast } = useToast()

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: "REMOVE_FROM_CART", productId })
      toast({
        title: "Item removed",
        description: "Item has been removed from your cart.",
        className: "bg-warm-brown border-cream text-light-beige"
      })
    } else {
      dispatch({ type: "UPDATE_QUANTITY", productId, quantity: newQuantity })
    }
  }

  const removeItem = (productId: string) => {
    dispatch({ type: "REMOVE_FROM_CART", productId })
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart.",
      className: "bg-warm-brown border-cream text-light-beige"
    })
  }

  const handleCheckout = () => {
    toast({
      title: "Proceeding to checkout",
      description: "Redirecting to payment gateway...",
      className: "bg-warm-brown border-cream text-light-beige"
    })
    // Here you would typically redirect to payment gateway
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-cream">
        <Navigation />
        <div className="container-max section-padding text-center">
          <div className="max-w-md mx-auto">
            <ShoppingBag className="h-24 w-24 text-warm-brown/30 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-heading mb-4">Your Cart is Empty</h1>
            <p className="text-lg text-body mb-8">Looks like you haven't added any spices to your cart yet.</p>
            <Link href="/products">
              <Button className="btn-primary text-lg px-8 py-3">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      <div className="container-max section-padding">
        <h1 className="text-3xl md:text-4xl font-bold text-heading mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <Card key={item.id} className="shadow-lg border-0 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-heading">{item.name}</h3>
                      <p className="text-body">{item.description}</p>
                      <p className="text-sm text-body">per {item.unit}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 0)}
                        className="w-16 text-center border-gray-200 focus:border-warm-brown"
                        min="0"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-heading">
                        ₹{(item.price * item.quantity).toFixed(2)} INR
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="shadow-lg border-0 bg-white sticky top-8">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-heading">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-body">
                  <span>Subtotal</span>
                  <span>₹{state.total.toFixed(2)} INR</span>
                </div>
                <div className="flex justify-between text-body">
                  <span>Shipping</span>
                  <span>{state.total > 999 ? "Free" : "₹50 INR"}</span>
                </div>
                <div className="flex justify-between text-body">
                  <span>Tax (5% VAT)</span>
                  <span>₹{(state.total * 0.05).toFixed(2)} INR</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-semibold text-heading">
                  <span>Total</span>
                  <span>₹{(state.total + (state.total > 999 ? 0 : 50) + state.total * 0.05).toFixed(2)} INR</span>
                </div>
                <Button onClick={handleCheckout} className="btn-primary w-full text-lg py-3">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link href="/products">
                  <Button
                    variant="outline"
                    className="w-full border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white"
                  >
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
