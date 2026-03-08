import Image from "next/image"

export default function Card({title, desc, author, date, slug}: {title: string, image: string, desc: string, author: string, date: string, slug: string}) {
    return (
        <div className="border-b border-zinc-800 hover:scale-101 transition-all w-full p-5 flex items-start flex-col">
            <h1><a className="text-lg" href={`/blog/${slug}`}>{title}</a></h1>
            <p className="text-sm text-zinc-300">{desc}</p>
        <div className="flex items-center gap-4 mt-2">
          <p className="text-sm text-zinc-500">Author : {author}</p>
          <p className="text-sm text-zinc-300">{date}</p>
            </div>
        </div>
    )
}