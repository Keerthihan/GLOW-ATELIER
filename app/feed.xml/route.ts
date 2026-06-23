import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aura-lotus.com';

  const postsQuery = groq`*[_type == "post"] | order(publishedAt desc)[0...10] {
    title,
    "slug": slug.current,
    publishedAt,
    "authorName": author,
    "excerpt": array::join(string::split((pt::text(body)), "")[0...200], "") + "..."
  }`;

  let posts: any[] = [];
  try {
    posts = await client.fetch(postsQuery);
  } catch (error) {
    console.error('Failed to fetch posts for RSS feed', error);
  }

  const feedItems = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt || new Date()).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt || ''}]]></description>
      ${post.authorName ? `<author>${post.authorName}</author>` : ''}
    </item>
  `
    )
    .join('');

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Glow Atelier Blog</title>
    <link>${baseUrl}</link>
    <description>Latest news, beauty tips, and updates from Glow Atelier.</description>
    <language>en-us</language>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${feedItems}
  </channel>
</rss>`;

  return new NextResponse(feed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  });
}
