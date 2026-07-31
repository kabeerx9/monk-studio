"use client";

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { submitReviewAction } from './actions';
import { CheckCircle2, Star } from 'lucide-react';

export default function LeaveReviewPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  async function handleSubmit(formData: FormData) {
    setStatus('submitting');
    const result = await submitReviewAction(formData);
    if (result.success) {
      setStatus('success');
    } else {
      setStatus('idle');
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 font-sans selection:bg-[#0B57D0] selection:text-white">
      <Navbar />

      <div className="pt-32 pb-20 px-4 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            How did we do?
          </h1>
          <p className="text-lg text-gray-600">
            We value your feedback. Let us know how your experience was working with Media Monks Studio.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 flex flex-col items-center text-center">
            <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank you for your review!</h2>
            <p className="text-gray-600">Your feedback has been submitted successfully.</p>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <form action={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0B57D0]/20 focus:border-[#0B57D0] transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Company Name</label>
                  <input 
                    type="text" 
                    name="company" 
                    required
                    placeholder="Acme Corp"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0B57D0]/20 focus:border-[#0B57D0] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Your Role / Title</label>
                  <input 
                    type="text" 
                    name="role" 
                    required
                    placeholder="CEO / Founder"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0B57D0]/20 focus:border-[#0B57D0] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Your Review</label>
                <textarea 
                  name="review" 
                  required
                  rows={6}
                  placeholder="Share your experience working with us..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0B57D0]/20 focus:border-[#0B57D0] transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Profile Photo (Optional)</label>
                <input 
                  type="file" 
                  name="image" 
                  accept="image/*"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0B57D0]/20 focus:border-[#0B57D0] transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#0B57D0]/10 file:text-[#0B57D0] hover:file:bg-[#0B57D0]/20"
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[#0B57D0] hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg disabled:opacity-70 flex justify-center items-center gap-2"
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit Review'}
                </button>
              </div>

            </form>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
