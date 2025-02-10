import Image from "next/image"
import Link from "next/link"
import { getAllAuthors } from "../lib/authors"
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"

export default async function Authors() {
  const authors = await getAllAuthors()

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center text-blue-600">Meet Our Authors</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {authors.map((author) => (
          <div
            key={author.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={author.image || "/placeholder.svg"}
              alt={author.name}
              width={400}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{author.name}</h2>
              <p className="text-gray-600 mb-4">{author.role}</p>
              <p className="text-gray-700 mb-4 line-clamp-3">{author.bio}</p>
              <div className="flex space-x-4">
                {author.socialMedia.twitter && (
                  <Link href={author.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-blue-400 hover:text-blue-600 transition-colors" size={24} />
                  </Link>
                )}
                {author.socialMedia.linkedin && (
                  <Link href={author.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-blue-700 hover:text-blue-900 transition-colors" size={24} />
                  </Link>
                )}
                {author.socialMedia.instagram && (
                  <Link href={author.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-pink-500 hover:text-pink-700 transition-colors" size={24} />
                  </Link>
                )}
                {author.socialMedia.github && (
                  <Link href={author.socialMedia.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-gray-700 hover:text-gray-900 transition-colors" size={24} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

