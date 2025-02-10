"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import type { Category } from "../lib/categories"

interface CategoryCardProps {
  category: Category
  index: number
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/categories/${category.slug}`}>
        <div className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            width={600}
            height={400}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-75`}></div>
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h2 className="text-2xl font-bold text-white mb-2">{category.name}</h2>
            <p className="text-white text-sm mb-4">{category.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-white text-sm">{category.postCount} posts</span>
              <motion.span
                className="text-white text-sm underline"
                initial={{ x: -5, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                Explore
              </motion.span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

