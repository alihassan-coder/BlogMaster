"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import CategoryCard from "../components/CategoryCard"
import { getAllCategories, type Category } from "../lib/categories"

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    getAllCategories().then(setCategories)
  }, [])

  return (
    <div>
      <div className="relative h-[50vh] mb-16">
        <Image
          src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Blog Categories Hero"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Explore Our Blog Categories
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-center max-w-2xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Dive into a world of knowledge and inspiration across various topics
          </motion.p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

