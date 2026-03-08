import { getPostBySlug, getPublishedPosts } from '@/lib/posts';
import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import CommentInput from '@/app/components/FormComments';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4 text-zinc-100" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold mt-8 mb-4 text-zinc-100" {...props} />,
  p: (props: any) => <p className="text-zinc-400 leading-relaxed mb-4" {...props} />,
  code: (props: any) => <code className="bg-zinc-800 text-zinc-300 px-1.5 py-0.5 rounded text-sm" {...props} />,
};

export async function generateStaticParams() {
  const posts = getPublishedPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export default async function BlogDetail({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || !post.content) return notFound();

  return (
    <article className="container mx-auto px-4 py-8 max-w-3xl text-zinc-300">
      <div className='flex items-center justify-between mb-8'>
        <Link href="/" className="text-zinc-500 hover:text-zinc-300 transition-colors font-medium">Back</Link>
      </div>

      <h1 className="text-4xl font-extrabold mb-4 text-white tracking-tight">{post.title}</h1>
      <div className="flex flex-col mb-10 border-b border-zinc-800 pb-8 text-sm text-zinc-500">
        <span>Post By: {post.author}</span>
        <span className="mt-1">
          {new Date(post.publishedDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
        </span>
      </div>

      <div className="w-full">
        {post.image && (
          <Image 
            src={post.image} 
            alt={post.title} 
            width={1200} 
            height={630} 
            priority 
            className="rounded-xl mb-10 object-cover shadow-2xl shadow-black/50" 
          />
        )}
        <div className="prose prose-invert max-w-none">
          <MDXRemote source={post.content} components={components} />
        </div>
      </div>
    </article>
  );
}