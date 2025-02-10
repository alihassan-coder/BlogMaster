import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getFeaturedPosts } from "./lib/posts"
import NewsletterSignup from "./components/NewsletterSignup"

export default async function Home() {
  const featuredPosts = await getFeaturedPosts()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-blue-600">Welcome to BlogMaster</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your ultimate resource for all things blogging. Whether you're a beginner or an expert, we've got you covered.
        </p>
        <Link href="/blog">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Explore Our Blog
          </Button>
        </Link>
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center">Featured Posts</h2>
      <div className="grid gap-8 md:grid-cols-2 mb-16">
        {featuredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>

      <NewsletterSignup />
    </div>
  )
}

