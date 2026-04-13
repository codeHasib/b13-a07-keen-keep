"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-5 text-center bg-[#fcfcfc]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full border-2 border-dashed border-gray-300 rounded-2xl p-12"
      >
        <h1 className="text-9xl font-black text-[#1a4332] opacity-10 leading-none">
          404
        </h1>

        <div className="mt-[-40px]">
          <h2 className="text-3xl font-bold text-[#1a4332] uppercase tracking-tight">
            Friend Not Found
          </h2>
          <p className="mt-4 text-gray-500 text-sm leading-relaxed">
            We couldn't locate this specific connection on your shelf. Perhaps
            the link is broken or the friend has moved.
          </p>
        </div>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 w-full py-3 bg-[#1a4332] text-white rounded-lg font-semibold tracking-wide uppercase text-xs"
          >
            GO HOME
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
