/**
 * Filename: app/page.tsx
 * Description: Pixel-perfect landing page matching Figma design (TypeScript Version).
 * Updates: Fixed image imports to use public folder paths and cleaned up types.
 */

"use client"; 

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// --- Component Imports ---
import Footer from '@/components/Footer'; 
import Testimonials from '@/components/Testimonials';

// =========================================================
// 1. ASSET PATHS (Pointing to public/assets/images/)
// =========================================================

const assets = {
  mascots: {
    lionMane: "/assets/images/1 2.svg",
    cordyceps: "/assets/images/2 2.svg",
    reishi: "/assets/images/3 2.svg",
    spirulina: "/assets/images/4 2.svg",
    chlorella: "/assets/images/5 2.svg",
    monkFruit: "/assets/images/5 3.svg",
    stevia: "/assets/images/1 3.svg",
  },
  icons: {
    // Certifications
    iso: "/assets/images/Mask group.svg",
    fda: "/assets/images/Mask group (1).svg",
    nonGmo: "/assets/images/Mask group (2).svg",
    haccp: "/assets/images/Mask group (3).svg",
    gmp: "/assets/images/Mask group (4).svg",
    
    // Benefits
    focus: "/assets/images/Vector (9).svg",
    energy: "/assets/images/Vector (10).svg",
    calm: "/assets/images/Vector (11).svg",
    heart: "/assets/images/Vector (12).svg",
    
    // Product Benefits
    heartPlus: "/assets/images/Vector (8).svg",
    weight: "/assets/images/Vector (5).svg",
    stomach: "/assets/images/Group (2).svg",
    puzzle: "/assets/images/Vector (7).svg",
    body: "/assets/images/healthicons_autoimmune-disease.svg",
    drop: "/assets/images/Vector (4).svg",
    metabolism: "/assets/images/Vector (6).svg",

    // Badges
    gelatinFree: "/assets/images/Group 3.svg",
    glutenFree: "/assets/images/Group 3 (1).svg",
    nonGmoBadge: "/assets/images/Group 3 (2).svg",
    soyFree: "/assets/images/Group 3 (3).svg",
    vegan: "/assets/images/Group 3 (4).svg",
  },
  products: {
    protein: "/assets/images/OUR (3).svg",
    mushroom: "/assets/images/OUR (2).svg",
    stevia: "/assets/images/OUR (1).svg",
  },
  slides: {
    lionMane: "/assets/images/Mushroom (7).svg",
    cordyceps: "/assets/images/Mushroom (6).svg",
    reishi: "/assets/images/Mushroom (5).svg",
    spirulina: "/assets/images/Mushroom (4).svg",
    chlorella: "/assets/images/Mushroom (3).svg",
    monkFruit: "/assets/images/Mushroom (2).svg",
    stevia: "/assets/images/Mushroom (1).svg",
  },
  extras: {
    confetti: "/assets/images/fxemoji_partypopper.svg",
    founder: "/assets/images/STORY.svg",
    partners: [
      "/assets/images/amazon-logo.svg",   
      "/assets/images/meesho-logo.svg",   
      "/assets/images/flipkart-logo.svg", 
      "/assets/images/indiamart-logo.svg"
    ]
  }
};

// =========================================================
// 2. TYPE DEFINITIONS & DATA SOURCE
// =========================================================

/* Update the Slide interface to include the gradient string.
   This ensures TypeScript knows every slide must have a color.
*/
interface Slide {
  id: number;
  tag: string;
  title: string;
  desc: string;
  image: string;
  mascot: string;
  orbGradient: string; // <--- New Property
}

/* Update the slides array with the specific gradients matching your images.
*/
const slides: Slide[] = [
  {
    id: 1,
    tag: "01",
    title: "Lion’s Mane Mushroom Benefits: Boost Brain Health & Cognitive Function",
    desc: "Lion’s Mane Mushroom Benefits: Boost Brain Health & Cognitive Function",
    image: assets.slides.lionMane,
    mascot: assets.mascots.lionMane,
    // White/Beige (Matches the white fluffy mascot)
    orbGradient: 'radial-gradient(50% 50% at 58% 50%, #FFFFFF 0%, #EBE5DB 45%, #ACA79B 100%)' 
  },
  {
    id: 2,
    tag: "02",
    title: "Cordyceps Mushroom Benefits: Energy, Stamina & Endurance",
    desc: "A natural performance enhancer that improves oxygen use, boosts energy, and supports athletic recovery.",
    image: assets.slides.cordyceps,
    mascot: assets.mascots.cordyceps,
    // Orange/Amber (Matches the orange mascot)
    orbGradient: 'radial-gradient(50% 50% at 58% 50%, #FFFFFF 0%, #FAD961 45%, #F76B1C 100%)'
  },
  {
    id: 3,
    tag: "03",
    title: "Reishi Mushroom Benefits: Immune Support & Stress Relief",
    desc: "Known as the “Mushroom of Immortality,” Reishi helps strengthen immunity, reduce stress, and promote better sleep.",
    image: assets.slides.reishi,
    mascot: assets.mascots.reishi,
    // Dark Brown/Red (Matches the brown/red mascot)
    orbGradient: 'radial-gradient(50% 50% at 58% 50%, #FFFFFF 0%, #D4A373 45%, #8B5E3C 100%)'
  },
  {
    id: 4,
    tag: "04",
    title: "Spirulina Benefits: Superfood for Daily Energy & Immunity",
    desc: "One of nature’s most nutrient-dense foods, Spirulina supports immunity, energy levels, and balanced nutrition.",
    image: assets.slides.spirulina,
    mascot: assets.mascots.spirulina,
    // Teal/Blue-Green (Matches the spiral mascot)
    orbGradient: 'radial-gradient(50% 50% at 58% 50%, #FFFFFF 0%, #A0ECDF 45%, #2D9C86 100%)'
  },
  {
    id: 5,
    tag: "05",
    title: "Chlorella Benefits: Natural Detox & Rich Plant Nutrition",
    desc: "Packed with protein, chlorophyll, and essential vitamins, Chlorella helps detoxify the body and support overall vitality.",
    image: assets.slides.chlorella,
    mascot: assets.mascots.chlorella,
    // Fresh Green (Matches the green bubble mascot)
    orbGradient: 'radial-gradient(50% 50% at 58% 50%, #FFFFFF 0%, #B8E994 45%, #3F8133 100%)'
  },
  {
    id: 6,
    tag: "06",
    title: "Monk Fruit Benefits: Sweetness Without the Sugar Load",
    desc: "Monk fruit is a natural, zero-calorie sweetener whose mogrosides provide sweetness without raising blood sugar or insulin—ideal for diabetics and low-carb diets.",
    image: assets.slides.monkFruit,
    mascot: assets.mascots.monkFruit,
    // Earthy Olive (Matches the round olive mascot)
    orbGradient: 'radial-gradient(50% 50% at 58% 50%, #FFFFFF 0%, #D8D48D 45%, #7D7838 100%)'
  },
  {
    id: 7,
    tag: "07",
    title: "Stevia Benefits: Plant-Based Sweetness with Metabolic Control",
    desc: "Stevia is a plant-based, zero-calorie sweetener that delivers intense sweetness while supporting blood sugar control and weight management.",
    image: assets.slides.stevia,
    mascot: assets.mascots.stevia,
    // Leafy Green (Matches the leaf mascot)
    orbGradient: 'radial-gradient(50% 50% at 58% 50%, #FFFFFF 0%, #98E878 45%, #4C8E32 100%)'
  }
];

// Interfaces for other data sections
interface BenefitItem {
  icon: string;
  title: string;
  color: string;
  desc: string;
  btnText: string;
}

interface ProductBenefit {
  icon: string;
  text: string;
}

interface Product {
  id: string;
  title: string;
  desc: string;
  image: string;
  iconClass: string;
  iconColor: string;
  benefits: ProductBenefit[];
  btnText: string;
  reverse: boolean;
}

interface IngredientBadge {
  label: string;
  icon: string;
}

// =========================================================
// 3. MAIN COMPONENT
// =========================================================
const Home: React.FC = () => {
  // --- STATE MANAGEMENT ---
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // --- SLIDER LOGIC ---
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // --- AUTO-PLAY EFFECT ---
  useEffect(() => {
    if (isPaused) return; 
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]); 

  // --- DATA DEFINITIONS ---
  const benefitItems: BenefitItem[] = [
    { 
      icon: assets.icons.focus, title: "Focus", color: "text-[#da483b]", 
      desc: "Lion's Mane Mushrooms promotes a cognitive boost and enhanced focus to help start your day.", btnText: "SHOP LION'S MANE"
    },
    { 
      icon: assets.icons.energy, title: "Energy", color: "text-[#f89920]", 
      desc: "Cordyceps Mushrooms are ideal for an extra energy surge to boost your stamina and endurance.", btnText: "SHOP CORDYCEPS"
    },
    { 
      icon: assets.icons.calm, title: "Calm", color: "text-[#9f3691]", 
      desc: "Reishi Mushrooms, known for their calming properties, can help you to unwind and relax.", btnText: "SHOP REISHI"
    },
    { 
      icon: assets.icons.heart, title: "Heart Health", color: "text-[#ea236f]", 
      desc: "Spirulina is a nutrient-rich superfood known for boosting immunity, supporting heart health.", btnText: "SHOP SPIRULINA"
    }
  ];

  const products: Product[] = [
    {
      id: "protein", title: "Plant Based Protein Powder",
      desc: "Forget about complicated process of shaking and lumps - simply put one scoop of these delicious flavors of Protein Powder into your shaker and let it work its cognitive magic.",
      image: assets.products.protein,
      iconClass: "fas fa-leaf", iconColor: "text-[#086938]",
      benefits: [ { icon: assets.icons.heartPlus, text: "Improves heart health" }, { icon: assets.icons.weight, text: "Better weight management" }, { icon: assets.icons.stomach, text: "Enhanced digestive function" } ],
      btnText: "SHOP PROTEIN POWDER", reverse: false
    },
    {
      id: "mushroom", title: "Functional mushroom",
      desc: "Functional mushrooms are not psychedelic. Instead, they contain several medicinal compounds that strengthen gut health, immune health, and energy levels.",
      image: assets.products.mushroom,
      iconClass: "fas fa-magic", iconColor: "text-orange-500",
      benefits: [ { icon: assets.icons.heartPlus, text: "Anti-ageing properties" }, { icon: assets.icons.puzzle, text: "Stress Relief" }, { icon: assets.icons.body, text: "Boosting Immune System" } ],
      btnText: "SHOP FUNCTIONAL MUSHROOM", reverse: true
    },
    {
      id: "stevia", title: "Stevia",
      desc: "Stevia is a natural sweetener extracted from the leaves of Stevia rebaudiana plant. Stevia is reported to be 200 to 400 times sweeter than table sugar but has zero calories.",
      image: assets.products.stevia,
      iconClass: "fas fa-leaf", iconColor: "text-green-600",
      benefits: [ { icon: assets.icons.drop, text: "Blood Sugar Regulation" }, { icon: assets.icons.weight, text: "Weight Management" }, { icon: assets.icons.metabolism, text: "Antioxidant Properties" } ],
      btnText: "SHOP STEVIA", reverse: false
    }
  ];

  const ingredients: IngredientBadge[] = [
    { label: 'Gelatin Free', icon: assets.icons.gelatinFree },
    { label: 'Gluten Free', icon: assets.icons.glutenFree },
    { label: 'Non GMO', icon: assets.icons.nonGmoBadge },
    { label: 'Soy-Free', icon: assets.icons.soyFree },
    { label: 'Vegan Friendly', icon: assets.icons.vegan } 
  ];

  return (
    // Main Wrapper
    <div className="w-full font-sans bg-white selection:bg-[#086938] selection:text-white">

      {/* ================= SECTION 1: HERO CAROUSEL ================= */}
      <div 
        className="relative w-full max-w-[1440px] mx-auto overflow-hidden group bg-[#FCF2E7]"
        style={{ height: '748px' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {slides.map((slide, index) => {
          let position = "translate-x-full opacity-0"; 
          if (index === currentSlide) {
          position = "translate-x-0 opacity-100 z-10"; 
          } else if (index === currentSlide - 1 || (currentSlide === 0 && index === slides.length - 1)) {
          position = "-translate-x-full opacity-0 z-0"; 
          }
          

          return (
            <div key={slide.id} className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${position}`}>
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Side */}
                <div className="w-full md:w-1/2 h-full relative overflow-hidden">
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover"/>
                </div>
                
                {/* Content Side */}
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:pl-24 bg-[#FCF2E7] relative">
                  <div className="flex flex-col gap-6 w-full max-w-[525px] relative z-20"
                  style={{
                        top: '-50px', 
                        left: '0', 
                    }}
                  >
                    
                    {/* Progress Bar & Tag */}
                    <div className="flex items-center gap-4 text-[#3F8133] font-medium mb-2">
                        <span className={`text-xl font-sans tracking-widest transition-all duration-700 delay-100 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>{slide.tag}</span>
                        
                        <div className="w-24 h-1 rounded-full overflow-hidden relative" style={{ backgroundColor: 'rgba(63, 129, 51, 0.3)' }}>
                          <div className="h-full bg-[#3F8133] transition-all duration-1000 ease-out relative z-10" style={{ width: index === currentSlide ? `${((index + 1) / 7) * 100}%` : '0%' }}></div>
                        </div>
                        
                        <span className="text-xl font-sans tracking-widest">07</span>
                      </div>

                    {/* Hero Title */}
                    <h1 className="text-4xl md:text-[32px] font-sans font-normal text-[#3F8133] leading-[1.2] tracking-tight">
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p className="font-rubik text-[#3F8133] text-[20px] leading-relaxed opacity-90">
                      {slide.desc}
                    </p>

                    {/* CTAs */}
                    <div className="flex gap-4 mt-2">
                      <button className="bg-transparent border-2 border-[#3F8133] text-[#3F8133] px-5 py-3 rounded-md font-sans font-semibold hover:bg-[#3F8133] hover:text-white transition uppercase text-sm tracking-wider">Shop Now</button>
                      <button className="bg-[#3F8133] text-white px-7 py-3 rounded-md font-sans font-semibold hover:bg-opacity-90 transition shadow-lg uppercase text-sm tracking-wider">Shop All</button>
                    </div>
                  </div>

                    {/* --- MASCOT ORB (Updated) --- */}
        <div 
          className="absolute z-30 flex items-center justify-center pointer-events-none hidden xl:flex"
          style={{
              width: '340px',
              height: '340px',
              top: '90%',
              right: '-5%',
              transform: 'translateY(-50%)' 
          }}
        >
            {/* Gradient Orb Background */}
            <div 
              className="absolute inset-0 rounded-full transition-colors duration-500" // Added transition-colors for smoothness
              style={{
                  /* HERE IS THE CHANGE: Use the dynamic gradient from data */
                  background: slide.orbGradient, 
                  boxShadow: '0px 2px 12px rgba(149, 147, 147, 0.25), inset 0px 4px 4px rgba(255, 255, 255, 0.25)'
              }}
            />
            {/* Mascot Image */}
            <img 
              src={slide.mascot} 
              alt="Mascot" 
              className="relative z-10 w-[260px] h-[300px] object-contain animate-bounce-slow drop-shadow-xl" 
              style={{ 
                width: '340px',
                height: '340px',
                marginTop: '-130px', 
                marginRight: '30px' 
               }}
                      />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        
        {/* Navigation Arrows (Updated with SVGs) */}
        <button 
          onClick={prevSlide} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/80 hover:bg-white text-[#3F8133] rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Previous Slide"
        >
          {/* Left Arrow SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        
        <button 
          onClick={nextSlide} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/80 hover:bg-white text-[#3F8133] rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Next Slide"
        >
          {/* Right Arrow SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2 md:hidden">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => goToSlide(idx)} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-[#3F8133]' : 'w-2 bg-gray-400 hover:bg-gray-600'}`} />
          ))}
        </div>
      </div>

      {/* ================= SECTION 2: CERTIFICATIONS ================= */}
      <div 
        className="bg-[#086938] w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center px-[35px] py-8"
        style={{ height: '384px' }}
      >
        <div className="w-full flex flex-col items-center">
          <h3 className="font-sans font-medium text-[32px] text-[#FCF2E7] text-center mb-[67px] tracking-normal leading-normal">
            Certified By
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
             {[assets.icons.iso, assets.icons.fda, assets.icons.nonGmo, assets.icons.haccp, assets.icons.gmp].map((icon, i) => (
                <div key={i} className="flex flex-col items-center hover:scale-105 transition duration-300 ease-in-out">
                  <img src={icon} alt="Certification Badge" className="h-24 md:h-32 w-auto object-contain opacity-90 hover:opacity-100" />
                </div>
             ))}
          </div>
        </div>
      </div>

      {/* ================= SECTION 3: BENEFITS GRID ================= */}
      <div className="bg-[#FCF2E7] w-full flex justify-center">
        <div 
          className="w-full max-w-[1440px] flex flex-col items-center"
          style={{ padding: '52px 78px', gap: '64px' }}
        >
          <header className="flex flex-col w-full max-w-[1234px] gap-4 items-center justify-center text-center">
            <h1 className="font-sans font-bold text-[#3f8133] text-[32px] leading-none tracking-[0%]">
              What's your Benefits?
            </h1>
            <p className="font-rubik text-[#086938] text-xl leading-[26.4px] tracking-[-0.44px] max-w-[800px]">
              Our daily superfood mushroom tablets offer unique health benefits that
              can be seamlessly incorporated into your daily routine.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-[22px] w-full">
            {benefitItems.map((item, index) => (
              <article key={index} className="flex flex-col items-center justify-between gap-[37px] px-2 py-[31px] bg-[#fcf4ef] rounded-2xl border border-[#3f8133] shadow-[0px_2px_8px_#0000001f] hover:-translate-y-2 transition-transform duration-300 h-full">
                <div className="flex flex-col w-[100px] gap-3 items-center justify-center">
                  <div className="w-[100px] h-[100px] flex items-center justify-center">
                      <img src={item.icon} alt={item.title} className="w-full h-full object-contain p-2" />
                  </div>
                  <h2 className={`font-sans font-medium ${item.color} text-2xl text-center tracking-[-0.44px] leading-[26.4px]`}>
                    {item.title}
                  </h2>
                </div>
                <p className="font-rubik text-[#086938] text-base text-center leading-[22.4px] w-[90%]">
                  {item.desc}
                </p>
                <Link href="/products" className="group inline-flex gap-2.5 px-6 py-3 rounded-lg border border-[#3f8133] items-center justify-center cursor-pointer hover:bg-[#3f8133] hover:text-white transition-colors w-full md:w-auto">
                  <span className="font-sans font-bold text-[#3F8133] group-hover:text-white text-xs md:text-base text-center uppercase tracking-wide">
                    {item.btnText}
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SECTION 4: PRODUCT SHOWCASE ================= */}
      <div className="bg-white w-full flex justify-center">
        <div className="w-full max-w-[1440px] flex flex-col items-center" style={{ padding: '78px', gap: '84px' }}>
          <div className="text-center w-full flex flex-col items-center gap-4">
            <h2 className="font-sans font-bold text-[#3f8133] text-4xl text-center leading-[22.4px]">
              Our Products
            </h2>
            <p className="font-rubik text-[#086938] text-[22px] text-center tracking-[-0.44px] leading-[26.4px] max-w-[800px]">
              Experience Our other Products made for the whole family. Delicious and effective, they're crafted to support focus, energy, immunity, and overall wellness.
            </p>
          </div>

          <div className="w-full flex flex-col gap-[84px]">
            {products.map((product) => (
              <div key={product.id} className={`flex flex-col ${product.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-[18px] items-center justify-center w-full`}>
                <div className="w-full md:w-1/2 bg-[#fcf4ef] rounded-[32px] px-[42px] py-[46px] flex flex-col justify-center gap-[40px] shadow-sm h-[594px]">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 relative">
                        <div className="w-[60px] h-[60px] rounded-[5px] bg-white/50 flex items-center justify-center border border-[#3f8133]/20">
                           <i className={`${product.iconClass} text-2xl ${product.iconColor}`}></i>
                        </div>
                        <h3 className="font-sans font-semibold text-[#3f8133] text-[32px] leading-[45.6px]">{product.title}</h3>
                    </div>
                    <p className="font-rubik font-medium text-[#3f8133] text-base leading-6">{product.desc}</p>
                  </div>
                  <ul className="flex flex-col gap-6 p-3">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-4">
                          <div className="w-7 h-7 flex-shrink-0"><img src={benefit.icon} alt="" className="w-full h-full object-contain"/></div>
                          <span className="font-sans font-medium text-[#3f8133] text-base leading-6">{benefit.text}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="self-start inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#3f8133] rounded-lg hover:opacity-90 transition-opacity">
                    <span className="font-sans font-semibold text-white text-base uppercase whitespace-nowrap">{product.btnText}</span>
                  </button>
                </div>
                <div className="w-full md:w-1/2 h-[594px]">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover rounded-[32px] hover:scale-105 transition-transform duration-500 shadow-sm"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SECTION 5: INGREDIENTS ================= */}
      <div 
        className="bg-[#086938] w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center" 
        style={{ padding: '32px 104px', gap: '52px' }}
      >
        <div className="max-w-4xl text-center flex flex-col items-center gap-8">
          <h2 className="font-sans font-bold text-[#ffebd5] text-4xl text-center leading-[22.4px]">Better For You Formulation</h2>
          <p className="font-rubik text-[#fcf4ef] text-[22px] text-center tracking-[-0.44px] leading-[26.4px]">
            Made with premium mushroom extracts, our supplements are crafted for quality, taste, and effectiveness in a state-of-the-art, cGMP facility.
          </p>
        </div>
        
        {/* Ingredient Badges */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-start gap-8 w-full max-w-[1214px]">
          {ingredients.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2 group cursor-default shrink-0">
              <div className="w-[100px] h-[100px] rounded-full bg-[#3f8133] flex items-center justify-center mb-2 relative transition-transform transform group-hover:scale-110 shadow-md">
                 <img src={item.icon} alt={item.label} className="h-[60px] w-auto object-contain" />
              </div>
              <span className="font-sans font-semibold text-white text-[20px] text-center tracking-[-0.44px] leading-[26.4px] whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Testimonials/>

      {/* ================= SECTION 7: STORY ================= */}
      <div className="bg-white w-full flex justify-center py-[42px] px-[78px]">
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-stretch gap-5">
          <div className="w-full md:w-1/2 h-full min-h-[476px]">
             <img src={assets.extras.founder} alt="Sachin Trivedi" className="w-full h-full object-cover rounded-[24px] grayscale hover:grayscale-0 transition-all duration-500"/>
          </div>
          <div className="w-full md:w-1/2 bg-[#fcf4ef] border border-[#3f8133] rounded-[24px] p-6 md:p-9 flex flex-col justify-center gap-7">
            <h2 className="font-sans font-bold text-[#3f8133] text-2xl md:text-[24px] text-center md:text-left">The Guy Behind the Trivira</h2>
            <div className="font-sans font-normal text-[#3f8133] text-base leading-relaxed text-center md:text-left">
              <p><span className="font-semibold">Trivira Global Enterprise</span> was founded by <span className="font-semibold">Sachin Trivedi</span>, inspired by the strength of his two elder brothers and the support of his closest friends. Rooted in trust, care, and togetherness, the name <span className="font-semibold">Trivira</span> reflects this bond and vision. Sachin’s mission is to bring plant-based protein, medicinal mushrooms, and superfoods into the everyday lives of people across India.</p>
              <br />
              <p>Blending the wisdom of tradition with the rigor of modern science, Trivira creates premium, natural wellness products that nurture both health and nature. Every product carries a promise — to empower healthier lifestyles, spread awareness of natural nutrition, and make wellness accessible to every home in India.</p>
            </div>
            <div className="flex justify-center md:justify-start">
              <button className="bg-[#3f8133] text-[#fcf4ef] px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity uppercase text-base tracking-wide shadow-sm">READ OUR STORY</button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 8: BOTTOM BANNER ================= */}
      <div className="bg-[#FCF2E7] w-full flex flex-col items-center justify-center" style={{ padding: '64px 0', gap: '80px' }}>
          <div className="bg-white rounded-[84px] px-8 md:px-16 py-8 shadow-sm flex flex-col md:flex-row items-center gap-6 md:gap-12 mx-4 text-center">
             <img src={assets.extras.confetti} alt="Decoration" className="w-10 h-10 md:w-16 md:h-16" />
             <div className="flex flex-col items-center">
                <span className="font-sans font-normal text-[#086938] text-xl md:text-[32px] leading-tight tracking-wide uppercase">WE DELIVER THE WELLNESS,</span>
                <span className="font-sans font-normal text-[#086938] text-xl md:text-[32px] leading-tight tracking-wide uppercase">OVER 100,000 HAPPY CUSTOMERS</span>
             </div>
             <img src={assets.extras.confetti} alt="Decoration" className="w-10 h-10 md:w-16 md:h-16 transform scale-x-[-1]" />
          </div>
          
          <div className="flex flex-wrap md:flex-nowrap justify-center items-end gap-4 md:gap-8 w-full max-w-[1384px] px-4">
              {[
                { img: assets.mascots.stevia, w: 'w-24 md:w-[175px]' },
                { img: assets.mascots.lionMane, w: 'w-28 md:w-[260px]' },
                { img: assets.mascots.cordyceps, w: 'w-24 md:w-[197px]' },
                { img: assets.mascots.reishi, w: 'w-24 md:w-[197px]' },
                { img: assets.mascots.spirulina, w: 'w-24 md:w-[197px]' },
                { img: assets.mascots.chlorella, w: 'w-28 md:w-[210px]' },
                { img: assets.mascots.monkFruit, w: 'w-24 md:w-[172px]' },
              ].map((mascot, index) => (
                <div key={index} className={`${mascot.w} shrink transition-transform duration-300 hover:-translate-y-4 cursor-pointer`}>
                  <img src={mascot.img} alt="Mascot" className="w-full h-auto object-contain drop-shadow-xl"/>
                </div>
              ))}
          </div>
      </div>

      {/* ================= SECTION 9: AVAILABLE AT ================= */}
      <div className="bg-white w-full flex flex-col justify-center items-center" style={{ height: '364px', gap: '80px', paddingTop: '24px', paddingBottom: '24px' }}>
        <div className="bg-white border border-[#3f8133]/10 rounded-[84px] px-[64px] py-[24px] shadow-sm">
           <h2 className="font-sans font-normal text-[#086938] text-2xl md:text-[40px] leading-[36px] text-center whitespace-nowrap">WE ARE ALSO AVAILABLE ON</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 w-full max-w-[1114px] px-4">
           {assets.extras.partners.map((logo, index) => (
             <div key={index} className="w-[150px] md:w-[200px] aspect-[1.78] flex items-center justify-center hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105">
                <img src={logo} alt="Partner Logo" className="w-full h-full object-contain"/>
             </div>
           ))}
        </div>
      </div>

    </div>
  );
};

export default Home;