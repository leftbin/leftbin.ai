import type { MetadataRoute } from "next";
import { blogPosts } from "~source/server";
import { SITE_CONFIG } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/case-studies`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/book-demo`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  for (const post of blogPosts) {
    const slug = post.info.path.replace(/\.mdx?$/, "");
    routes.push({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: post.date ? new Date(String(post.date)) : now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return routes;
}
