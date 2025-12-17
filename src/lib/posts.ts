import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/posts');

export interface BlogPost {
  image: string
  title: string;
  slug: string;
  description: string;
  publishedDate: string;
  author: string;
  content?: string; // Ubah dari MDXRemoteSerializeResult jadi string
}

// Ambil semua post (tanpa compile MDX)
export function getPublishedPosts(): BlogPost[] {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => {
    const fileContents = fs.readFileSync(path.join(postsDirectory, filename), 'utf8');
    const { data } = matter(fileContents);

    return {
      image: data.image,
      title: data.title,
      slug: data.slug,
      description: data.description,
      publishedDate: data.publishedDate,
      author: data.author,
    };
  });
}

// Ambil post by slug (TIDAK perlu serialize lagi)
export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    image: data.image,
    title: data.title,
    slug: data.slug,
    description: data.description,
    publishedDate: data.publishedDate,
    author: data.author,
    content: content, // Return raw content aja
  };
}


// TYPESCRIPT ALSIDIOASJDIOASJDOIASJDOO
// hidup jok wok wi