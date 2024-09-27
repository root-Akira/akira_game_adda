// app/page.tsx

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Zap, ShoppingCart, User } from 'lucide-react'
import MetaMaskConnector from '@/app/MetaMaskConnector'  // Importing the MetaMaskConnector

const featuredSkins = [
  { id: 1, name: "Cosmic Warrior", game: "Stellar Battles", price: 0.05, image: "https://dotesports.com/wp-content/uploads/2023/07/All-weapon-skin-bundles-in-VALORANT.jpg" }, 
  { id: 2, name: "Neon Assassin", game: "Cyber Stealth", price: 0.03, image: "https://www.dexerto.com/cdn-cgi/image/width=1200,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/06/15/valorant-prelude-to-chaos-skin-bundle-cost-price-weapons-release-date.jpg" }, 
  { id: 3, name: "Dragon Slayer", game: "Mythic Realms", price: 0.07, image: "https://www.dexerto.com/cdn-cgi/image/width=1200,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2021/06/17/valorant-ruination-bundle.jpg" }, 
]

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <Gamepad2 className="mr-2" />
          Maya Jaal
        </Link>
        <nav className="space-x-4">
          <Link href="/marketplace">
            <Button variant="ghost">Marketplace</Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Cart
            </Button>
          </Link>
          {/* <Link href="/signin">
            <Button variant="ghost">
              <User className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          </Link> */}
          <MetaMaskConnector />
        </nav>
      </header>

      {/* MetaMask Connector */}
      {/* <MetaMaskConnector /> */}

      <main className="container mx-auto px-4 py-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4">Welcome to Maya Jaal</h1>
          <p className="text-xl mb-8">Elevate your gaming experience with unique Web3 skins</p>
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            Explore Skins
          </Button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
        >
          {featuredSkins.map((skin, index) => (
            <motion.div key={skin.id} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <Card className="bg-gray-800 border-gray-700 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">{skin.name}</CardTitle>
                  <CardDescription>{skin.game}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={skin.image} alt={skin.name} className="w-full h-48 object-cover rounded-md" />
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-lg font-bold">{skin.price} ETH</span>
                  <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Maya Jaal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="p-6 bg-gray-800 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Zap className="mx-auto mb-4 h-12 w-12 text-yellow-400" />
              <h3 className="text-xl font-semibold mb-2">Unique Web3 Skins</h3>
              <p>Own truly unique skins powered by blockchain technology</p>
            </motion.div>
            <motion.div 
              className="p-6 bg-gray-800 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ShoppingCart className="mx-auto mb-4 h-12 w-12 text-green-400" />
              <h3 className="text-xl font-semibold mb-2">Easy Trading</h3>
              <p>Buy, sell, and trade skins with other players seamlessly</p>
            </motion.div>
            <motion.div 
              className="p-6 bg-gray-800 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Gamepad2 className="mx-auto mb-4 h-12 w-12 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Cross-Game Compatibility</h3>
              <p>Use your skins across multiple supported games</p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-center p-4">
        <p>© 2024 Maya Jaal. All rights reserved.</p>
      </footer>

      <div 
        className="fixed w-4 h-4 rounded-full bg-blue-500 mix-blend-screen pointer-events-none transition-transform duration-100 ease-out"
        style={{ 
          left: mousePosition.x, 
          top: mousePosition.y,
          transform: 'translate(-50%, -50%) scale(1.5)',
          boxShadow: '0 0 20px 10px rgba(59, 130, 246, 0.5)'
        }}
      />
    </div>
  )
}