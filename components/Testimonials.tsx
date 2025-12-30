/**
 * Filename: components/Testimonials.tsx
 * Description: Customer reviews section with alternating grid layout.
 * Features: Dynamic theme colors for cards, Responsive Grid, Tailwind Styling.
 */

"use client";

import React from 'react';

// --- Interface Definitions ---
interface Review {
  id: number;
  author: string;
  title: string;
  text: string;
  themeColor: string; // Hex code for specific border/text colors
}

// --- Data Source ---
const reviews: Review[] = [
  {
    id: 1,
    author: "Rachel S. William",
    title: "I Love Lions mane Capsule of Trivira",
    text: "They help me focus and not get as distracted. My brain is less foggy and it's easier to think and not stress.",
    themeColor: "#da483b" // Red
  },
  {
    id: 2,
    author: "Rachel S. William",
    title: "I Love Lions mane Capsule of Trivira",
    text: "They help me focus and not get as distracted. My brain is less foggy and it's easier to think and not stress.",
    themeColor: "#8a38f5" // Purple
  }
];

// Define the hero image path here if you want to use it
const HERO_IMAGE = "/assets/images/Rectangle 5.svg";

const Testimonials: React.FC = () => {
  return (
    <section className="bg-trivira-peach w-full flex justify-center py-[52px] px-6 md:px-[78px]">
      <div className="w-full max-w-[1280px] flex flex-col gap-[58px]">
        
        {/* --- TOP SECTION: Header & Hero --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-8 max-w-[522px] pt-8 text-center lg:text-left items-center lg:items-start">
            
            {/* Badge */}
            
            <div className="bg-white rounded-xl flex items-center gap-2 px-4 py-2 w-fit shadow-sm">
               <div className="flex gap-1 text-trivira-dark text-xs">
                 {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
               </div>

               <div className="flex gap-1 text-[#3F8133] text-xs">
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
                 <i className="fas fa-star"></i>
               </div>

               <span className="font-sans font-normal text-trivira-dark text-xs uppercase">
                 Over 100,000 Happy Customers
               </span>
            </div>

            {/* Headings */}
            <div className="flex flex-col gap-2">
              <h2 className="font-sans font-semibold text-trivira-dark text-4xl md:text-[42px] leading-tight tracking-tight">
                Empowering Wellness, One Day at a Time
              </h2>
              <p className="font-rubik text-trivira-dark text-base leading-relaxed opacity-90">
                Join the buzz and see how trivira are transforming lives with delicious, functional mushroom supplements.
              </p>
            </div>

            {/* Button */}
            <button className="bg-trivira-dark rounded-lg px-6 py-3 flex items-center justify-center w-fit hover:opacity-90 transition-all shadow-md hover:-translate-y-1">
              <span className="font-sans font-semibold text-white text-base uppercase tracking-wide">
                Join Review
              </span>
            </button>
          </div>

          {/* Right Column: Hero Image (Rectangle 5 or Heart) */}
          <div className="w-full lg:w-[738px] h-[300px] md:h-[460px] rounded-[32px] overflow-hidden shadow-lg bg-[#E60023] relative flex items-center justify-center group">
                {/* If the image exists, show it. 
                   If not, you can revert to the Heart Icon by uncommenting the line below. 
                */}
                <img 
                  src={HERO_IMAGE} 
                  alt="Testimonial Hero" 
                  className="w-full h-full object-cover"
                  // Fallback to error handling if image missing:
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'; // Hide broken image
                    e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center'); // Center icon
                  }}
                />
                
                {/* Optional: Heart Icon (Visible if image fails or is removed) */}
                <i className="fas fa-heart text-9xl text-[#C9001F] drop-shadow-md transform scale-100 group-hover:scale-125 transition-transform duration-500 absolute -z-10"></i>
          </div>
        </div>

        {/* --- BOTTOM SECTION: Reviews Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          
          {/* 1. First Review Card (Red Theme) */}
          <div 
            className="bg-white rounded-[24px] p-8 h-auto md:h-[374px] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 shadow-sm"
            style={{ border: `1px solid ${reviews[0].themeColor}` }}
          >
             <div className="flex flex-col gap-4">
               <div className="flex text-sm gap-1" style={{ color: reviews[0].themeColor }}>
                  {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
               </div>
               <h3 className="font-sans font-bold text-lg leading-tight" style={{ color: reviews[0].themeColor }}>
                 {reviews[0].title}
               </h3>
               <p className="font-sans font-normal text-base leading-relaxed opacity-80" style={{ color: reviews[0].themeColor }}>
                 "{reviews[0].text}"
               </p>
             </div>
             <span className="font-sans font-bold text-base mt-4" style={{ color: reviews[0].themeColor }}>
               - {reviews[0].author}
             </span>
          </div>

          {/* 2. Customer Image 1 */}
          <div className="h-[300px] md:h-[374px] rounded-[24px] overflow-hidden shadow-sm bg-gray-200">
             <img 
               src="/assets/images/Rectangle 7.SVG" 
               className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
               alt="Happy Customer 1"
             />
          </div>

          {/* 3. Second Review Card (Purple Theme) */}
          <div 
            className="bg-white rounded-[24px] p-8 h-auto md:h-[374px] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 shadow-sm"
            style={{ border: `1px solid ${reviews[1].themeColor}` }}
          >
             <div className="flex flex-col gap-4">
               <div className="flex text-sm gap-1" style={{ color: reviews[1].themeColor }}>
                  {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
               </div>
               <h3 className="font-sans font-bold text-lg leading-tight" style={{ color: reviews[1].themeColor }}>
                 {reviews[1].title}
               </h3>
               <p className="font-sans font-normal text-base leading-relaxed opacity-80" style={{ color: reviews[1].themeColor }}>
                 "{reviews[1].text}"
               </p>
             </div>
             <span className="font-sans font-bold text-base mt-4" style={{ color: reviews[1].themeColor }}>
               - {reviews[1].author}
             </span>
          </div>

          {/* 4. Customer Image 2 */}
          <div className="h-[300px] md:h-[374px] rounded-[24px] overflow-hidden shadow-sm bg-gray-200">
             <img 
               src="/assets/images/Rectangle 8.SVG" 
               className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
               alt="Happy Customer 2"
             />
          </div>

        </div>

        {/* --- Scroll Navigation (Decorative) --- */}
        <div className="flex justify-center items-center gap-2 w-full mt-4">
           <div className="w-3 h-3 bg-trivira-dark rounded-full cursor-pointer"></div>
           <div className="w-3 h-3 bg-[#ccd7c9] rounded-full hover:bg-trivira-dark transition cursor-pointer"></div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;