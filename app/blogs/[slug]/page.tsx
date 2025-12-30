/**
 * Filename: app/blogs/[slug]/page.tsx
 * Description: Dynamic blog post template.
 * Logic: Fetches post based on URL slug.
 */

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/app/data/blogData';

// Generate static params for all known blog posts (Good for SEO & Performance)
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

// Generate Metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.id === params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | Trivira Blog`,
    description: post.desc,
  };
}

const BlogPostPage = ({ params }: { params: { slug: string } }) => {
  // Find the post matching the URL slug
  const post = blogPosts.find((p) => p.id === params.slug);

  // If no post found, show 404 page
  if (!post) {
    notFound();
  }

  return (
    <div className="w-full font-sans bg-[#FFFAF7] min-h-screen pb-20">
      
      {/* ================= SECTION 1: HEADER & META ================= */}
      <div className="max-w-[1000px] mx-auto pt-12 px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-4 mb-8">
           <Link href="/blogs" className="w-[50px] h-[50px] bg-trivira-primary rounded-lg flex items-center justify-center hover:bg-trivira-dark transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
           </Link>
           <div className="flex flex-col">
              <span className="font-heading font-semibold text-trivira-textGray text-sm uppercase tracking-wide">
                Blogs / {post.title}
              </span>
              <h1 className="font-heading font-bold text-trivira-primary text-[32px] md:text-[40px] leading-tight">
                {post.title} – {post.subtitle}
              </h1>
           </div>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[400px] md:h-[600px] rounded-[24px] overflow-hidden mb-10 shadow-lg">
           <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Meta Bar */}
        <div className="flex flex-wrap justify-between items-center border-b border-trivira-primary/20 pb-8 mb-12 gap-6">
           <div className="flex items-center gap-6">
              <span className="font-heading font-bold text-trivira-dark text-[18px]">Share:</span>
              <div className="flex gap-4 text-trivira-dark">
                 {/* Social Icons Placeholder */}
                 <div className="w-6 h-6 bg-gray-200 rounded-full hover:bg-trivira-primary transition cursor-pointer"></div>
                 <div className="w-6 h-6 bg-gray-200 rounded-full hover:bg-trivira-primary transition cursor-pointer"></div>
                 <div className="w-6 h-6 bg-gray-200 rounded-full hover:bg-trivira-primary transition cursor-pointer"></div>
              </div>
           </div>

           <div className="flex items-center gap-3 text-trivira-textGray text-sm font-medium">
              <span>{post.readTime}</span>
              <div className="w-1 h-1 bg-trivira-textGray rounded-full"></div>
              <span>{post.date}</span>
           </div>
        </div>

        {/* ================= SECTION 2: ARTICLE CONTENT ================= */}
        {/* We use dangerouslySetInnerHTML to render the HTML content from data */}
        <article 
          className="prose prose-lg prose-green max-w-none font-body text-trivira-dark"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* ================= SECTION 3: CTA ================= */}
        <div className="mt-16 bg-trivira-cream border border-trivira-primary rounded-2xl p-10 text-center">
           <h3 className="font-heading font-bold text-trivira-primary text-2xl mb-4">
             Ready to experience the benefits?
           </h3>
           <p className="mb-8 text-trivira-dark">
             Shop our premium range of {post.title} products today.
           </p>
           <Link href="/products" className="btn-primary inline-block">
             Shop Now
           </Link>
        </div>

      </div>
    </div>
  );
};

export default BlogPostPage;