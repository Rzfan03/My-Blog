import Link from "next/link"

export default function Loading() {
  return (
    <article className="container mx-auto px-4 py-8 max-w-3xl animate-pulse">
      <Link href="/" className="text-zinc-500 hover:text-zinc-300 transition-colors mb-8 inline-block">
        Back
      </Link>
      
      <div className="h-10 bg-zinc-800 rounded-md w-3/4 mb-4"></div>
      
      <div className="flex flex-col mb-10 border-b border-zinc-800 pb-8">
        <div className="h-5 bg-zinc-800 rounded w-24 mb-2"></div>
        <div className="h-4 bg-zinc-800 rounded w-32"></div>
      </div>

      <div className="w-full space-y-4">
        <div className="h-4 bg-zinc-800 rounded w-full"></div>
        <div className="h-4 bg-zinc-800 rounded w-full"></div>
        <div className="h-4 bg-zinc-800 rounded w-5/6"></div>
        <div className="h-64 bg-zinc-800 rounded-xl w-full mt-8"></div>
      </div>
    </article>
  )
}