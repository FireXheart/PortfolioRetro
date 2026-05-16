'use client';

import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center font-headline"
    >
      <div className="space-y-8 flex flex-col items-center">
        <h2 className="text-primary text-2xl animate-pulse">LOADING...</h2>
        <div className="w-64 h-4 border-2 border-primary p-1">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-full bg-primary"
          />
        </div>
      </div>
    </motion.div>
  );
}
