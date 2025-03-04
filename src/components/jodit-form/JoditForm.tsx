"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

const Jodit = dynamic(() => import("../jodit-editor").then(mod => mod.Jodit), {
  ssr: false,
  loading: () => <p>Loading editor...</p>
})

export const JoditForm = ({}) => {
  const [content, setContent] = useState("")
  const [title, setTitle] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitting:", { title, content })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 border rounded"
      />
      
      <Jodit 
        value={content}
        onChange={setContent}
        placeholder="Write your content here"
      />
      
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  )
}

