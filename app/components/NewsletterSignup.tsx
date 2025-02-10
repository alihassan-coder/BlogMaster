"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log(`Subscribing email: ${email}`)
    setEmail("")
    alert("Thanks for subscribing!")
  }

  return (
    <motion.div
      className="bg-blue-100 p-8 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <h3 className="text-2xl font-bold mb-4 text-center">Subscribe to Our Newsletter</h3>
      <p className="text-center mb-6">Stay updated with our latest blogging tips and tricks!</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow"
        />
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold">
          Subscribe
        </Button>
      </form>
    </motion.div>
  )
}

