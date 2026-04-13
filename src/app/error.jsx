"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-5 text-center bg-[#fcfcfc]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white shadow-sm border border-gray-100 rounded-2xl p-10"
      >
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
        </div>

        <h2 className="text-2xl font-bold text-[#1a4332] uppercase">
          System Disturbance
        </h2>
        <p className="mt-3 text-gray-500 text-sm">
          An unexpected issue interrupted your connections. Please bear with us while we nurture the problem.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <button
            onClick={() => reset()}
            className="w-full py-3 bg-[#1a4332] text-white rounded-lg font-semibold tracking-wide uppercase text-xs transition-opacity hover:opacity-90"
          >
            Refresh My Shelf
          </button>
          
          <button 
            onClick={() => window.location.href = '/'}
            className="text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-[#1a4332] transition-colors"
          >
            Return Home
          </button>
        </div>
      </motion.div>
    </div>
  );
}