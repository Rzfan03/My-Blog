import { getPostBySlug, getPublishedPosts } from '@/lib/posts';
import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc'; // Ubah dari 'next-mdx-remote' ke 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Pre-render semua slug
export async function generateStaticParams() {
  const posts = getPublishedPosts();
  return posts.map(post => ({ slug: post.slug }));
}


export default async function BlogDetail({ params }: PageProps) {
  const { slug } = await params;
  
  const post = await getPostBySlug(slug);

  if (!post || !post.content) return notFound();

  return (
    <article className="container mx-auto px-4 py-8 max-w-3xl">
          <Link href="/" className="text-blue-600 mt-8 hover:underline mb-12">Back</Link>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-600 mb-8">
        {post.author} / {new Date(post.publishedDate).toLocaleDateString('id-ID')}
      </div>
      <div className="prose prose-lg max-w-none">
              <Image src={post.image} alt="Blog-images" width={800} height={200} className="mt-8 mb-12 mx-auto rounded-lg" />
        <MDXRemote source={post.content} /> {/* Ubah jadi source */}
      </div>
    </article>
  );
}