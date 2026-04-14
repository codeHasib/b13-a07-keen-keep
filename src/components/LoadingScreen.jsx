"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#fcfcfc]">
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
          className="w-16 h-16 border-4 border-gray-200 border-t-[#1a4332] rounded-full"
        />

        <motion.div
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: 1.2, opacity: 0 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeOut",
          }}
          className="absolute w-8 h-8 bg-[#1a4332] rounded-full"
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-6 text-[10px] font-bold text-[#1a4332] uppercase tracking-[0.3em]"
      >
        Loading KinKeep
      </motion.p>
    </div>
  );
}
