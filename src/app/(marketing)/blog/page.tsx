import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "~source/server";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI agent-powered workflow automation from the Leftbin team.",
};

export default async function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.date ?? 0).getTime();
    const dateB = new Date(b.date ?? 0).getTime();
    return dateB - dateA;
  });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
        Blog
      </h1>
      <p className="text-lg text-muted-foreground mb-12">
        Insights on AI agent-powered automation, workflow economics, and building production systems.
      </p>

      <div className="space-y-8">
        {posts.map((post) => {
          const slug = post.info.path.replace(/\.mdx?$/, "");
          return (
            <article key={slug} className="group">
              <Link href={`/blog/${slug}`} className="block">
                <time className="text-xs font-mono uppercase tracking-wider text-subtle">
                  {post.date ? formatDate(String(post.date)) : ""}
                </time>
                <h2 className="text-xl font-semibold text-foreground mt-1 mb-2 group-hover:text-muted-foreground transition-colors">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="text-muted-foreground">{post.description}</p>
                )}
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
