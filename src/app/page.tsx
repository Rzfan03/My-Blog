import { getPublishedPosts } from '../lib/posts';
import Card from './components/Card';
import GithubButton from './components/githubButton';
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs';

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <div className='flex justify-between mb-8 items-center'>
          <h1 className="text-2xl font-mono text-zinc-900 dark:text-white">
            Blog/Rzfan03
          </h1>
          <div className='flex gap-3 items-center'>
            <GithubButton />
         </div>
        </div>
        
        <div className="flex justify-center items-center flex-col gap-3">
          {posts.map((post) => (
            <Card 
              key={post.slug}
              {...post}
              desc={post.description}
              date={post.publishedDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}