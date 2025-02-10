"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface Comment {
  id: number
  author: string
  content: string
  date: string
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, author: "John Doe", content: "Great article! Very informative.", date: "2023-07-01" },
    { id: 2, author: "Jane Smith", content: "I learned a lot from this. Thanks for sharing!", date: "2023-07-02" },
  ])
  const [newComment, setNewComment] = useState({ author: "", content: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.author && newComment.content) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          ...newComment,
          date: new Date().toISOString().split("T")[0],
        },
      ])
      setNewComment({ author: "", content: "" })
    }
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {comments.map((comment) => (
        <motion.div
          key={comment.id}
          className="bg-gray-100 p-4 rounded-lg mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-semibold">{comment.author}</p>
          <p className="text-gray-600 text-sm mb-2">{comment.date}</p>
          <p>{comment.content}</p>
        </motion.div>
      ))}
      <form onSubmit={handleSubmit} className="mt-8">
        <h3 className="text-xl font-bold mb-4">Add a Comment</h3>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Your Name"
            value={newComment.author}
            onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <Textarea
            placeholder="Your Comment"
            value={newComment.content}
            onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
            required
            rows={4}
          />
        </div>
        <Button type="submit">Post Comment</Button>
      </form>
    </div>
  )
}

