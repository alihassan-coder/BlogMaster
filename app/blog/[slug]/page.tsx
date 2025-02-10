import { getPostBySlug } from "../../lib/posts"
import { notFound } from "next/navigation"
import Image from "next/image"
import Comments from "../../components/Comments"

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">{post.title}</h1>
        <div className="mb-8 text-gray-600">
          <span>Published on {post.date}</span>
          <span className="mx-2">•</span>
          <span>By {post.author}</span>
        </div>
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <Comments />
      </article>
    </div>
  )
}

