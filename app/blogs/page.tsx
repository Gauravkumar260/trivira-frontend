/**
 * Filename: app/blogs/page.tsx
 * Description: Main blog listing page.
 * Features: Hero Feature Article + Grid of Recent Posts.
 */

import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { blogPosts } from '@/app/data/blogData';

export const metadata: Metadata = {
  title: "Blogs | Trivira",
  description: "Explore the science and stories behind natural wellness.",
};

const BlogsPage: React.FC = () => {
  // We'll use the first post as the "Hero" feature
  const heroPost = blogPosts[0];
  // The rest are "Recent Posts"
  const recentPosts = blogPosts.slice(1);

  return (
    <div className="w-full font-sans bg-[#FFFAF7] min-h-screen">
      
      {/* ================= SECTION 1: HERO FEATURE ================= */}
      <div className="flex flex-col md:flex-row h-auto md:h-[700px] bg-white">
        
        {/* Left: Feature Image */}
        <div className="w-full md:w-[57%] h-[400px] md:h-full relative overflow-hidden group">
          <img 
            src={heroPost.image} 
            alt={heroPost.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-[43%] p-8 md:pl-12 md:pr-24 flex flex-col justify-center bg-[#FFFAF7]">
           
           {/* Progress Indicator (Visual Only) */}
           <div className="flex items-center gap-4 text-lg font-tag font-normal text-trivira-primary mb-6 tracking-wide">
             <span>01</span>
             <div className="w-[120px] h-1 bg-[#A3AED0] relative rounded-full">
               <div className="absolute left-0 top-0 h-full w-[40%] bg-trivira-primary rounded-full"></div>
             </div>
             <span>03</span>
           </div>

           {/* Main Heading */}
           <h1 className="font-heading font-semibold text-[32px] text-trivira-primary mb-6 leading-tight">
             {heroPost.title} – <br /> {heroPost.subtitle}
           </h1>

           {/* Description */}
           <p className="font-body font-normal text-trivira-primary text-[18px] leading-relaxed mb-10 opacity-90 line-clamp-4">
             {heroPost.desc}
           </p>

           {/* Buttons */}
           <div className="flex gap-4">
             <Link href={`/blogs/${heroPost.id}`} className="btn-outline">
               Read Article
             </Link>
             <Link href="/products" className="btn-primary">
               Shop Now
             </Link>
           </div>
        </div>
      </div>

      {/* ================= SECTION 2: DISCOVER GRID ================= */}
      <div className="max-w-[1440px] mx-auto px-6 py-24 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-[900px]">
           <h2 className="font-heading font-semibold text-trivira-dark text-[40px] mb-4 leading-tight">
             Discover the Power of Natural Wellness
           </h2>
           <p className="font-body font-normal text-trivira-dark text-[18px] opacity-80">
             Explore the benefits, extraction methods, and science behind our Functional Mushrooms, Stevia, and Plant-Based Protein.
           </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
           {/* Map through ALL posts (including Hero for now, or just recent) */}
           {blogPosts.map((post) => (
             <div 
               key={post.id} 
               className="bg-white rounded-[32px] overflow-hidden border border-trivira-dark hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-2 group h-full"
             >
               {/* Card Image */}
               <div className="h-[300px] w-full overflow-hidden bg-trivira-cream p-4">
                 <img 
                   src={post.image} 
                   alt={post.title} 
                   className="w-full h-full object-cover rounded-[18px] transform group-hover:scale-105 transition duration-700"
                 />
               </div>

               {/* Card Content */}
               <div className="p-8 flex flex-col flex-grow items-center text-center gap-4">
                 <h3 className="font-heading font-bold text-trivira-dark text-[28px] leading-tight">
                   {post.title}
                 </h3>
                 <p className="font-body font-normal text-trivira-dark text-[16px] leading-relaxed line-clamp-3">
                   {post.desc}
                 </p>
                 
                 <Link 
                   href={`/blogs/${post.id}`}
                   className="mt-auto px-8 py-3 bg-trivira-dark text-white font-heading font-semibold text-[16px] rounded-lg hover:bg-trivira-primary transition inline-block"
                 >
                   Read More
                 </Link>
               </div>
             </div>
           ))}
        </div>
      </div>

    </div>
  );
};

export default BlogsPage;