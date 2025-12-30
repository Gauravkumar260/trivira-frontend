/**
 * Filename: components/ProductCard.tsx
 * Description: Reusable card component for displaying product details.
 * Features: Dynamic theme colors, SVG Star Rating, Next.js Linking.
 */

import React from 'react';
import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Default fallbacks to prevent crashes
  const {
    id,
    title,
    subtitle,
    image,
    price,
    rating = 0,
    reviews = 0,
    themeColor = '#086938',
    bgImage = '#FCF2E7',
    btnText = "Add to Cart"
  } = product;

  return (
    <div 
      className="group w-full max-w-[350px] md:w-[413px] bg-white rounded-[32px] p-4 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
      style={{ border: `1px solid ${themeColor}` }}
    >
      
      {/* 1. Image Container */}
      <Link href={`/products/${id}`} className="w-full">
        <div 
          className="w-full h-[369px] rounded-[18px] flex items-center justify-center mb-6 overflow-hidden relative cursor-pointer"
          style={{ backgroundColor: bgImage }}
        >
          <img 
            src={image} 
            alt={title} 
            className="w-[85%] h-auto object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      {/* 2. Content */}
      <div className="flex flex-col items-center gap-3 w-full px-2">
        
        {/* Title & Subtitle */}
        <Link href={`/products/${id}`} className="text-center block hover:opacity-80 transition-opacity">
          <h3 className="font-heading font-bold text-2xl md:text-[32px] leading-tight" style={{ color: themeColor }}>
            {title}
          </h3>
          <p className="font-heading font-normal text-lg md:text-[20px] mt-1" style={{ color: themeColor }}>
            {subtitle}
          </p>
        </Link>

        {/* Rating Stars (Native SVG) */}
        <div className="flex items-center gap-2">
           <div className="flex gap-1">
             {[...Array(5)].map((_, i) => {
               const isFilled = i < Math.floor(rating);
               return (
                 <svg 
                   key={i}
                   xmlns="http://www.w3.org/2000/svg" 
                   viewBox="0 0 24 24" 
                   fill={isFilled ? "currentColor" : "#D1D5DB"} 
                   className="w-4 h-4"
                   style={{ color: isFilled ? themeColor : undefined }} 
                 >
                   <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                 </svg>
               );
             })}
           </div>
           <span className="font-sans font-normal text-lg" style={{ color: themeColor }}>
             ({reviews})
           </span>
        </div>

        {/* Add to Cart Button */}
        <button 
          className="mt-2 w-full py-3 rounded-lg flex items-center justify-center gap-2 transition-opacity hover:opacity-90 shadow-sm active:scale-95"
          style={{ backgroundColor: themeColor }}
        >
          <span className="font-heading font-semibold text-white text-base uppercase">
            {btnText} {price ? `- ${price}` : ''}
          </span>
        </button>

      </div>
    </div>
  );
};

export default ProductCard;