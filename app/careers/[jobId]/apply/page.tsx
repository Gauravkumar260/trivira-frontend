/**
 * Filename: app/careers/[jobId]/apply/page.tsx
 * Description: Job application form with params.
 */

"use client";

import React from 'react';
import Link from 'next/link';

interface Props {
  params: Promise<{ jobId: string }>;
}

const ApplyPage: React.FC<Props> = ({ params }) => {
  // We can use the jobId later for submission logic
  // const { jobId } = React.use(params);

  return (
    <div className="w-full min-h-screen bg-[#FFFAF7] font-sans flex flex-col items-center py-20 px-4">
      
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-trivira-dark mb-2">
          Submit your Application
        </h1>
        <p className="text-trivira-textGray font-body">Grow With Us, Build Wellness for All</p>
      </div>

      <div className="bg-white w-full max-w-[700px] rounded-2xl shadow-sm border border-[#E0E0E0] p-8 md:p-12">
        <form className="flex flex-col gap-6">
          
          {/* Name Row */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-2">
               <label className="font-heading font-medium text-trivira-dark text-sm">First Name <span className="text-red-600">*</span></label>
               <input type="text" className="w-full h-12 px-4 rounded border border-gray-200 focus:border-trivira-primary outline-none transition" placeholder="John" />
            </div>
            <div className="flex-1 flex flex-col gap-2">
               <label className="font-heading font-medium text-trivira-dark text-sm">Last Name <span className="text-red-600">*</span></label>
               <input type="text" className="w-full h-12 px-4 rounded border border-gray-200 focus:border-trivira-primary outline-none transition" placeholder="Doe" />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="flex flex-col gap-2">
             <label className="font-heading font-medium text-trivira-dark text-sm">Email <span className="text-red-600">*</span></label>
             <input type="email" className="w-full h-12 px-4 rounded border border-gray-200 focus:border-trivira-primary outline-none transition" placeholder="john@example.com" />
          </div>

          <div className="flex flex-col gap-2">
             <label className="font-heading font-medium text-trivira-dark text-sm">Phone</label>
             <input type="tel" className="w-full h-12 px-4 rounded border border-gray-200 focus:border-trivira-primary outline-none transition" placeholder="+91 98765 43210" />
          </div>

          {/* Cover Letter */}
          <div className="flex flex-col gap-2">
             <label className="font-heading font-medium text-trivira-dark text-sm">Cover Letter</label>
             <textarea rows={5} className="w-full p-4 rounded border border-gray-200 focus:border-trivira-primary outline-none transition resize-none" placeholder="Tell us why you're a great fit..."></textarea>
          </div>

          {/* Resume Upload */}
          <div className="flex flex-col gap-2">
             <label className="font-heading font-medium text-trivira-dark text-sm">Resume / CV <span className="text-red-600">*</span></label>
             <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    <p className="text-sm"><span className="font-semibold text-trivira-dark">Click to upload</span></p>
                    <p className="text-xs">PDF, DOC (MAX. 5MB)</p>
                </div>
                <input type="file" className="hidden" />
             </label>
          </div>

          {/* Submit */}
          <button className="mt-4 bg-trivira-primary text-white font-heading font-bold text-lg py-4 rounded-lg shadow-lg hover:bg-trivira-dark transition-all active:scale-95">
            Submit Application
          </button>
          
          <Link href="/careers" className="text-center text-trivira-textGray text-sm hover:text-trivira-dark underline">
            Cancel
          </Link>

        </form>
      </div>
    </div>
  );
};

export default ApplyPage;