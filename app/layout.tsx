import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { AnimatePresence } from "framer-motion"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BlogMaster - Your Ultimate Blogging Resource",
  description:
    "Discover the art of blogging with BlogMaster. Tips, tricks, and inspiration for bloggers of all levels.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <AnimatePresence mode="wait">
            <main className="flex-grow">{children}</main>
          </AnimatePresence>
          <Footer />
        </div>
      </body>
    </html>
  )
}

