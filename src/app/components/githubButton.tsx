'use client'

import { Github } from 'lucide-react';

export default function GithubButton() {
  return (
    <button onClick={() => {window.location.href="https://github.com/Rzfan03"}} className='border-2 border-zinc-800 p-2 rounded-lg'><Github className='hover:text-zinc-500 transition-all hover:scale-115 cursor-pointer' size={18}/></button>
  )
}