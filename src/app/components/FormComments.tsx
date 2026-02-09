"use client"

import { useState } from 'react'
import { useUser, UserAvatar } from "@clerk/nextjs"
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function CommentInput() {
  const { user } = useUser()
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleKirim = async () => {
    if (!content.trim() || !user) return

    setIsSubmitting(true)

    const { error } = await supabase
      .from('comments')
      .insert({
        username: user.fullName || user.username || "Anonymous",
        image_url: user.imageUrl,
        komen: content.trim(),
      })

    if (error) {
      console.error("Error:", error.message)
    } else {
      setContent("")
      router.refresh()
    }

    setIsSubmitting(false)
  }

  return (
    <div className='flex flex-col items-center border-t border-zinc-800 w-full p-2'>
      <div className='flex p-2 gap-4 w-full items-start mt-2'>
        <div className="w-10 h-10 flex-shrink-0 mt-1">
           <UserAvatar />
        </div>
        
        <textarea 
          rows={1}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleKirim()
            }
          }}
          placeholder='tulis pendapat mu disini' 
          className='w-full border-b border-zinc-800 p-3 outline-0 bg-transparent text-zinc-200 placeholder:text-zinc-600 resize-none max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700'
          disabled={isSubmitting}
        />
      </div>
      
      <div className="w-full flex justify-end px-4">
        <button 
          onClick={handleKirim}
          disabled={isSubmitting || !content.trim()}
          className="text-[10px] uppercase tracking-widest text-zinc-500 hover:text-zinc-200 transition-colors"
        >
        </button>
      </div>
    </div>
  )
}