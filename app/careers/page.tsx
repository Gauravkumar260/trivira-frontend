/**
 * Filename: app/careers/page.tsx
 * Description: Dynamic job listing page with department filters.
 */

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { jobs } from '@/app/data/jobsData';

const CareersPage: React.FC = () => {
  const [activeDept, setActiveDept] = useState<string>("All roles");

  const departments: string[] = [
    "All roles", "Direct Sales", "Product", "Operations", "Engineering"
  ];

  // Filter Logic
  const filteredJobs = activeDept === "All roles" 
    ? jobs 
    : jobs.filter(job => job.department === activeDept);

  return (
    <div className="w-full min-h-screen bg-[#FFFAF7] font-sans pb-24">
      
      {/* --- HERO SECTION --- */}
      <div className="w-full flex flex-col md:flex-row bg-[#FFEBD6] min-h-[500px]">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-24 py-16 gap-8">
           <h1 className="font-heading font-bold text-trivira-primary text-[36px] md:text-[42px] leading-tight">
             Join Us on Our Wellness Journey
           </h1>
           <p className="font-body font-normal text-trivira-primary text-[16px] leading-[1.6] opacity-90">
             At Trivira Nutraceuticals, we’re on a mission to transform how India embraces wellness. Our story is built on trust, care, and togetherness, and we carry those values into our workplace.
           </p>
           <button 
             onClick={() => document.getElementById('job-listings')?.scrollIntoView({ behavior: 'smooth' })}
             className="bg-trivira-primary text-white px-8 py-3 rounded-lg font-heading font-semibold text-[18px] w-fit hover:opacity-90 transition flex items-center gap-2 group"
           >
             View Openings
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-y-1 transition-transform">
               <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
             </svg>
           </button>
        </div>
        {/* Right Image */}
        <div className="w-full md:w-1/2 relative min-h-[400px]">
           <img 
             src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
             alt="Trivira Team" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-trivira-accent-orange/10 mix-blend-multiply"></div>
        </div>
      </div>

      {/* --- JOB LISTINGS SECTION --- */}
      <div id="job-listings" className="max-w-[1440px] mx-auto px-6 md:px-20 py-24 flex flex-col md:flex-row gap-16">
        
        {/* Left: Filters */}
        <div className="w-full md:w-1/4 flex flex-col gap-2">
           <h3 className="font-heading font-bold text-gray-400 uppercase text-xs tracking-wider mb-4">Departments</h3>
           {departments.map((dept, index) => (
             <button
               key={index}
               onClick={() => setActiveDept(dept)}
               className={`text-left font-body text-[18px] py-2 px-4 rounded-lg transition-all duration-200
                 ${activeDept === dept 
                   ? 'bg-trivira-primary text-white font-medium shadow-sm' 
                   : 'text-trivira-textGray hover:text-trivira-primary hover:bg-white'
                 }`}
             >
               {dept}
             </button>
           ))}
        </div>

        {/* Right: Job Cards */}
        <div className="w-full md:w-3/4 flex flex-col gap-6">
           <h3 className="font-heading font-bold text-trivira-primary text-[24px] mb-4">
             {filteredJobs.length > 0 ? `${filteredJobs.length} Open Roles` : "No roles found"}
           </h3>

           {filteredJobs.map((job) => (
             <Link href={`/careers/${job.id}`} key={job.id} className="block group">
                <div className="w-full bg-white border border-transparent hover:border-trivira-primary/30 rounded-[16px] p-8 flex justify-between items-center shadow-sm hover:shadow-lg transition-all duration-300">
                   <div className="flex flex-col gap-2">
                      <h4 className="font-heading font-bold text-trivira-dark text-[22px] group-hover:text-trivira-primary transition-colors">
                        {job.title}
                      </h4>
                      <div className="flex gap-4 text-trivira-textGray text-sm">
                        <span>📍 {job.location}</span>
                        <span>💼 {job.type}</span>
                      </div>
                   </div>
                   <div className="w-[48px] h-[48px] rounded-full bg-trivira-cream flex items-center justify-center group-hover:bg-trivira-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-trivira-primary group-hover:text-white transition-colors">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                   </div>
                </div>
             </Link>
           ))}
        </div>

      </div>
    </div>
  );
};

export default CareersPage;