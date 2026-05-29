import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#0B57D0] selection:text-white">
      <Navbar />
      
      <div className="pt-40 pb-32 px-4 md:px-6 max-w-4xl mx-auto min-h-[70vh]">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">About Us</h1>
        
        <div className="prose prose-gray max-w-none text-gray-600 text-lg leading-relaxed mb-12">
          <p>
            Monk Studio is a specialized development duo bridging the gap between world-class design and robust engineering. We focus on crafting high-performance digital products without the bloat and overhead of traditional agencies.
          </p>
          <p>
            When you partner with us, you work directly with the technical founders. We combine deep expertise in pixel-perfect interfaces and scalable backend infrastructure to ensure your product is built right the first time, from the ground up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kabeer Joshi */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
                <img src="https://media.licdn.com/dms/image/v2/D5603AQEPlPRhQRMVOQ/profile-displayphoto-scale_400_400/B56Z1oLhIeIAAk-/0/1775569349750?e=1781740800&v=beta&t=pupb5aAUs-fgcjD9Z3ux03OBw23EHjj4rY9y_toB5-M" alt="Kabeer Joshi" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Kabeer Joshi</h3>
                <p className="text-[#0B57D0] font-semibold">Full Stack Developer</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <Link 
                href="https://www.linkedin.com/in/kabeer-joshi-7173061aa" 
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black bg-white border border-gray-300 px-4 py-2 rounded-full shadow-sm hover:shadow transition-all"
              >
                LinkedIn <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <Link 
                href="https://github.com/kabeerx9/" 
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black bg-white border border-gray-300 px-4 py-2 rounded-full shadow-sm hover:shadow transition-all"
              >
                <Github className="w-4 h-4" /> GitHub <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
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
            <div className="flex flex-wrap gap-3 mt-4">
              <Link 
                href="https://www.linkedin.com/in/suraj-rawat-" 
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black bg-white border border-gray-300 px-4 py-2 rounded-full shadow-sm hover:shadow transition-all"
              >
                LinkedIn <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <Link 
                href="https://github.com/rawatsuri" 
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black bg-white border border-gray-300 px-4 py-2 rounded-full shadow-sm hover:shadow transition-all"
              >
                <Github className="w-4 h-4" /> GitHub <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
