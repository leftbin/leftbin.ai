import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        &larr; All posts
      </Link>

      <header className="mt-8 mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          {post.title}
        </h1>
        {post.description && (
          <p className="mt-3 text-lg text-muted-foreground">
            {post.description}
          </p>
        )}
        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          {post.author && (
            <>
              <span className="text-foreground">{post.author}</span>
              <span>&middot;</span>
            </>
          )}
          {post.date && (
            <time dateTime={new Date(String(post.date)).toISOString()}>
              {formatDate(String(post.date))}
            </time>
          )}
        </div>
      </header>

      <div className="prose prose-lg prose-invert max-w-none">
        <MDXContent />
      </div>

      <footer className="mt-16 pt-8 border-t border-border">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          &larr; All posts
        </Link>
      </footer>
    </article>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: getSlug(post.info.path),
  }));
}
