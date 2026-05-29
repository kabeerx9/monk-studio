import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#0B57D0] selection:text-white">
      <Navbar />
      
      <div className="pt-40 pb-32 px-4 md:px-6 max-w-4xl mx-auto min-h-[70vh]">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">About Us</h1>
        
        <div className="prose prose-gray max-w-none text-gray-600 text-lg leading-relaxed mb-12">
          <p>
            We are Monk Studio. We are two developers passionate about building high-performance, premium software solutions. We specialize in rapidly building, launching, and scaling enterprise-grade products.
          </p>
          <p>
            Instead of a massive bloated agency, you work directly with the technical founders. One handles the frontend pixel-perfect designs, and the other builds robust, scalable backend infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kabeer Joshi */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center text-gray-400 font-bold text-xl">
                KJ
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Kabeer Joshi</h3>
                <p className="text-[#0B57D0] font-semibold">Frontend Engineering</p>
              </div>
            </div>
            <Link 
              href="https://www.linkedin.com/in/kabeer-joshi-7173061aa" 
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black bg-white border border-gray-300 px-4 py-2 rounded-full shadow-sm hover:shadow transition-all mt-4"
            >
              View LinkedIn Profile <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          {/* Suraj Rawat */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center text-gray-400 font-bold text-xl">
                SR
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Suraj Rawat</h3>
                <p className="text-[#0B57D0] font-semibold">Backend Infrastructure</p>
              </div>
            </div>
            <Link 
              href="https://www.linkedin.com/in/suraj-rawat-" 
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black bg-white border border-gray-300 px-4 py-2 rounded-full shadow-sm hover:shadow transition-all mt-4"
            >
              View LinkedIn Profile <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
