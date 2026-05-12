import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "~source/server";
import { formatDate } from "@/lib/utils";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

function getSlug(path: string): string {
  return path.replace(/\.mdx?$/, "");
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => getSlug(p.info.path) === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => getSlug(p.info.path) === slug);

  if (!post) {
    notFound();
  }

  const MDXContent = post.body;

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <header className="mb-12">
        <time className="text-xs font-mono uppercase tracking-wider text-subtle">
          {post.date ? formatDate(String(post.date)) : ""}
        </time>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mt-2 mb-4">
          {post.title}
        </h1>
        {post.description && (
          <p className="text-lg text-muted-foreground">
            {post.description}
          </p>
        )}
      </header>

      <div className="prose prose-invert max-w-none">
        <MDXContent />
      </div>
    </article>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: getSlug(post.info.path),
  }));
}
