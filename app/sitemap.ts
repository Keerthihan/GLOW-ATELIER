// app/sitemap.ts
import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aura-lotus.com";
  
  // Fetch posts from Sanity
  const postsQuery = groq`*[_type == "post"]{
    "slug": slug.current,
    _updatedAt
  }`;
  
  let posts: any[] = [];
  try {
    posts = await client.fetch(postsQuery);
  } catch (error) {
    console.error("Failed to fetch Sanity posts for sitemap", error);
  }

  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...postRoutes,
  ];
}
