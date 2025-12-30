/**
 * Filename: app/products/page.tsx
 * Description: Main Shop page that consolidates all categories.
 * Fix: Added manual scroll-to-top logic when filters change.
 */

"use client";

import React, { useState, useEffect } from 'react'; // 1. Import useEffect
import { useSearchParams } from 'next/navigation'; // 1. Import hook
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';

// =========================================================
// 1. MERGED DATA SOURCE
// =========================================================
interface ProductData {
  stevia: Product[];
  protein: Product[];
  mushrooms: Product[];
}

const products: ProductData = {
  stevia: [
    { 
      id: 1, 
      title: "Stevia Powder", 
      subtitle: "100% Natural Stevia", 
      image: "https://i.ibb.co/C3zM10m/stevia-powder.png", 
      price: "₹245", 
      rating: 4.8, 
      reviews: 30, 
      themeColor: "#3F8133", 
      bgImage: "#FCF4EF",
      btnText: "ADD TO CART"
    },
    { 
      id: 2, 
      title: "Stevia Liquid Drop", 
      subtitle: "100% Natural Stevia", 
      image: "https://i.ibb.co/hK5X0yF/stevia-drop.png", 
      price: "₹299", 
      rating: 4.9, 
      reviews: 12, 
      themeColor: "#3F8133", 
      bgImage: "#FCF2E7",
      btnText: "ADD TO CART"
    },
    { 
      id: 3, 
      title: "Stevia Pocket Tablet", 
      subtitle: "100% Natural Stevia", 
      image: "https://i.ibb.co/Z1gH1Jb/stevia-tablet.png", 
      price: "₹199", 
      rating: 4.7, 
      reviews: 10, 
      themeColor: "#3F8133", 
      bgImage: "#FCF4EF",
      btnText: "ADD TO CART"
    }
  ],
  protein: [
    { 
      id: 4, 
      title: "Plant Based Protein", 
      subtitle: "Mixed Berry Flavor", 
      image: "https://i.ibb.co/GtnD81c/protein-choco.png", 
      price: "₹1299", 
      rating: 4.9, 
      reviews: 30, 
      themeColor: "#9F3691", 
      bgImage: "#FCF4EF",
      btnText: "ADD TO CART" 
    },
    { 
      id: 5, 
      title: "Plant Based Protein", 
      subtitle: "Chocolate Flavor", 
      image: "https://i.ibb.co/2gxK9jL/protein-coffee.png", 
      price: "₹1299", 
      rating: 4.7, 
      reviews: 55, 
      themeColor: "#683313", 
      bgImage: "#FCF4EF",
      btnText: "ADD TO CART" 
    },
    { 
      id: 6, 
      title: "Plant Based Protein", 
      subtitle: "Coffee Flavor", 
      image: "https://i.ibb.co/2gxK9jL/protein-coffee.png", 
      price: "₹1299", 
      rating: 4.6, 
      reviews: 25, 
      themeColor: "#74482E", 
      bgImage: "#FCF2E7",
      btnText: "ADD TO CART" 
    },
    { 
      id: 7, 
      title: "Plant Based Protein", 
      subtitle: "Strawberry Flavor", 
      image: "https://i.ibb.co/GtnD81c/protein-choco.png", 
      price: "₹1299", 
      rating: 4.9, 
      reviews: 12, 
      themeColor: "#C837AB", 
      bgImage: "#FCF4EF",
      btnText: "ADD TO CART" 
    },
  ],
  mushrooms: [
    { 
      id: 9, 
      title: "Lion's Mane", 
      subtitle: "Cognitive Health", 
      image: "https://i.ibb.co/VYJMfFRX/Rectangle-31-1.png", 
      price: "₹899", 
      rating: 4.9, 
      reviews: 102, 
      themeColor: "#3F8133", 
      bgImage: "#FCF4EF",
      btnText: "ADD TO CART"
    },
    { 
      id: 10, 
      title: "Spirulina", 
      subtitle: "Superfood Immunity", 
      image: "https://i.ibb.co/yBgD2KsG/Rectangle-31-5.png", 
      price: "₹599", 
      rating: 4.8, 
      reviews: 89, 
      themeColor: "#086938", 
      bgImage: "#FCF2E7",
      btnText: "ADD TO CART"
    },
    { 
      id: 11, 
      title: "Cordyceps", 
      subtitle: "Energy & Stamina", 
      image: "https://i.ibb.co/ccTkrG89/Rectangle-31-3.png", 
      price: "₹999", 
      rating: 4.7, 
      reviews: 67, 
      themeColor: "#683313", 
      bgImage: "#FCF4EF",
      btnText: "ADD TO CART"
    },
    { 
      id: 12, 
      title: "Reishi", 
      subtitle: "Stress Relief", 
      image: "https://i.ibb.co/Hfr2XDrR/Rectangle-31-4.png", 
      price: "₹899", 
      rating: 4.8, 
      reviews: 45, 
      themeColor: "#C837AB", 
      bgImage: "#FCF4EF",
      btnText: "ADD TO CART"
    },
    { 
      id: 13, 
      title: "Chlorella", 
      subtitle: "Detox Support", 
      image: "https://i.ibb.co/NgykpwQ7/5-2.png", 
      price: "₹699", 
      rating: 4.6, 
      reviews: 32, 
      themeColor: "#74482E", 
      bgImage: "#FCF2E7",
      btnText: "ADD TO CART"
    }
  ]
};



// 2. Create the inner component that uses searchParams
const ProductsContent = () => {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'SHOP ALL'; // Get filter from URL or default
  
  const [activeFilter, setActiveFilter] = useState<string>('SHOP ALL');
  const filters = ['SHOP ALL', 'STEVIA', 'PLANT PROTEIN', 'FUNCTIONAL MUSHROOMS'];

  // 3. Sync state with URL param on load
  useEffect(() => {
    if (initialFilter) {
      // Decode URI component to handle spaces (e.g. "PLANT%20PROTEIN")
      setActiveFilter(decodeURIComponent(initialFilter));
    }
  }, [initialFilter]);

  // Scroll to top logic
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [activeFilter]);

  // --- FIX: Scroll to top whenever the filter changes ---
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Snaps to top immediately
    });
  }, [activeFilter]);

  return (
    <div className="w-full min-h-screen bg-white font-sans pb-20">
      
      {/* --- HERO HEADER --- */}
      <div className="bg-white w-full py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          <h1 className="text-4xl md:text-[40px] font-heading font-bold text-trivira-primary leading-tight">
            Shop All
          </h1>
          <p className="text-xl md:text-2xl font-body text-trivira-primary opacity-90">
            Our functional mushroom capsules, Stevia (Tablets, Powder) and Plant based Protein powder with different flavours, taste delicious and are easy to incorporate into your daily routine.
          </p>
        </div>
      </div>

      {/* --- FILTER BUTTONS (Sticky) --- */}
      <div className="sticky top-[104px] z-30 bg-white/95 backdrop-blur-sm py-4 border-b border-gray-100 mb-12 shadow-sm transition-all">
        <div className="flex flex-wrap justify-center gap-4 px-4">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg text-sm font-heading font-semibold tracking-wide transition-all duration-300 border
                ${activeFilter === filter 
                  ? 'bg-trivira-primary text-white border-trivira-primary shadow-lg' 
                  : 'bg-white text-trivira-primary border-trivira-primary hover:bg-trivira-primary hover:text-white'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* --- PRODUCT SECTIONS --- */}
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col gap-20">

        {/* 1. STEVIA SECTION */}
        {(activeFilter === 'SHOP ALL' || activeFilter === 'STEVIA') && (
          <div className="animate-fade-up">
            <div className="text-center mb-10 space-y-4">
              <h2 className="text-3xl md:text-[40px] font-heading font-bold text-trivira-primary">
                🌱 Stevia – The Natural Sweetness Revolution
              </h2>
              <p className="font-body text-trivira-primary text-lg max-w-4xl mx-auto">
                A 100% plant-based, zero-calorie alternative to sugar that supports weight management, is safe for diabetics, and promotes a healthier lifestyle every day.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {products.stevia.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {/* 2. PROTEIN SECTION */}
        {(activeFilter === 'SHOP ALL' || activeFilter === 'PLANT PROTEIN') && (
          <div className="animate-fade-up">
            <div className="text-center mb-10 space-y-4">
              <h2 className="text-3xl md:text-[40px] font-heading font-bold text-trivira-primary">
                💪 Flavored Plant-Based Protein
              </h2>
              <p className="font-body text-trivira-primary text-lg max-w-4xl mx-auto">
                A premium blend of natural plant proteins, enriched with essential amino acids, supporting muscle recovery, energy, and everyday wellness.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {products.protein.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {/* 3. MUSHROOMS SECTION */}
        {(activeFilter === 'SHOP ALL' || activeFilter === 'FUNCTIONAL MUSHROOMS') && (
          <div className="animate-fade-up">
            <div className="text-center mb-10 space-y-4">
              <h2 className="text-3xl md:text-[40px] font-heading font-bold text-trivira-primary">
                🍄 Functional Mushrooms
              </h2>
              <p className="font-body text-trivira-primary text-lg max-w-4xl mx-auto">
                Packed with adaptogens and antioxidants, these mushrooms boost immunity, enhance focus, reduce stress, and support long-term vitality naturally.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {products.mushrooms.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductsContent;