import Image from "next/image"

export default function Card({title, image, desc, author, date}: {title: string, image: string, desc: string, author: string, date: string}) {
    return (
        <div className="bg-gray-950 border rounded-lg border-gray-900 flex flex-col">
            <Image src={image} alt={title} width={800} height={200} className="mt-8 mb-12 mx-auto rounded-lg" />
            <h1>{title}</h1>
            <p>{desc}</p>
            <p>{author}</p>
            <p>{date}</p>
            <h1>{title}</h1>
        </div>
    )
}