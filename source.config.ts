import { defineCollections, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";

export const blogPosts = defineCollections({
  type: "doc",
  dir: "./blog",
  schema: frontmatterSchema.extend({
    author: z.string().optional(),
    date: z.string().date().or(z.date()),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});
