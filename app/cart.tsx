// app/cart.tsx

'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2 } from 'lucide-react'
import Layout from './layout'  // Make sure to import your layout

const initialCartItems = [
  { id: 1, name: "Cosmic Warrior", game: "Stellar Battles", price: 0.05, quantity: 1 },
  { id: 2, name: "Neon Assassin", game: "Cyber Stealth", price: 0.03, quantity: 1 },
]

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-xl">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.game}</p>
                <p className="font-bold">{item.price} ETH</p>
                <p>Quantity: {item.quantity}</p>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" onClick={() => removeFromCart(item.id)}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Remove
                </Button>
              </CardFooter>
            </Card>
          ))}
          <div className="text-right text-2xl font-bold">
            Total: {total.toFixed(2)} ETH
          </div>
          <div className="text-right">
            <Button size="lg">Checkout</Button>
          </div>
        </div>
      )}
    </Layout>
  )
}