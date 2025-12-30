/**
 * Filename: app/careers/[jobId]/page.tsx
 * Description: Dynamic job details page (replaces Careers2.tsx).
 */

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { jobs } from '@/app/data/jobsData';

// Fix for Next.js 15: params is a Promise
interface Props {
  params: Promise<{ jobId: string }>;
}

const JobDetails = async ({ params }: Props) => {
  const { jobId } = await params;
  const job = jobs.find((j) => j.id === jobId);

  if (!job) return notFound();

  return (
    <div className="w-full font-sans bg-[#FFFAF7] min-h-screen flex flex-col items-center pb-20">
      
      {/* Hero Header */}
      <div className="w-full flex flex-col items-center justify-center py-20 gap-4 text-center bg-white border-b border-gray-100">
        <h1 className="text-[32px] md:text-[40px] font-heading font-bold text-trivira-dark leading-tight max-w-3xl">
          {job.title}
        </h1>
        <p className="text-[18px] font-body text-trivira-textGray">
          {job.department} • {job.location} • {job.type}
        </p>
      </div>

      {/* Content */}
      <div className="w-full max-w-[1200px] px-6 md:px-20 py-12 flex flex-col md:flex-row gap-16 justify-center items-start">
        
        {/* Left: Description */}
        <div className="flex-1 flex flex-col gap-10 font-body text-trivira-dark text-lg leading-relaxed">
           <section>
             <h3 className="font-heading font-bold text-2xl mb-4">About the Role</h3>
             <p>{job.description}</p>
           </section>

           <section>
             <h3 className="font-heading font-bold text-2xl mb-4">Requirements</h3>
             <ul className="list-disc pl-5 space-y-2">
               {job.requirements.map((req, i) => (
                 <li key={i}>{req}</li>
               ))}
             </ul>
           </section>

           <section>
             <h3 className="font-heading font-bold text-2xl mb-4">How to Apply</h3>
             <p>
               Send your resume and a brief note about why you’d like to join us at <span className="font-bold text-trivira-primary">careers@trivira.com</span> or click the button to apply now.
             </p>
           </section>
        </div>

        {/* Right: Sticky Apply Button */}
        <div className="w-full md:w-auto sticky top-28 flex flex-col items-center">
           <Link 
             href={`/careers/${job.id}/apply`}
             className="bg-trivira-primary text-white font-heading font-semibold text-[18px] py-4 px-10 rounded-lg shadow-lg hover:bg-trivira-dark transition-all flex items-center gap-3 active:scale-95"
           >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
               <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
             </svg>
             Apply Now
           </Link>
           <Link href="/careers" className="mt-4 text-trivira-textGray hover:text-trivira-dark underline text-sm">
             Back to all jobs
           </Link>
        </div>

      </div>
    </div>
  );
};

export default JobDetails;