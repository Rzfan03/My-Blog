import Link from 'next/link';
import { getPublishedPosts } from '../lib/posts';
import Image from 'next/image';

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Rzfan Blogs</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="border border-gray-900 h-fit rounded-lg max-w-fit px-4 py-4 pb-6">
             <Image src={post.image} alt={post.title} width={300} height={300} className="mt-8 mb-12 mx-auto rounded-lg"/>
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-2">{post.description}</p>
            <div className="text-sm text-gray-500">
              {post.author} / {new Date(post.publishedDate).toLocaleDateString('id-ID')}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
