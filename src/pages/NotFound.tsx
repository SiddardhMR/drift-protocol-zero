
import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';
import TypewriterText from '../components/TypewriterText';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-space-black relative overflow-hidden">
      {/* Matrix Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Red Terminal Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center z-10 max-w-2xl mx-auto px-6"
      >
        {/* Error Code */}
        <div className="font-orbitron text-8xl md:text-9xl font-black text-red-500 mb-6">
          <GlitchText text="404" className="text-shadow-glow" />
        </div>
        
        {/* Error Message */}
        <div className="font-vt323 text-2xl md:text-3xl text-red-400 mb-8">
          <TypewriterText 
            text="ERROR: NULL_EXIT_DETECTED" 
            speed={100}
            className="block mb-4"
          />
          <TypewriterText 
            text="You have exited the Drift." 
            speed={80}
            delay={2000}
            className="block mb-2"
          />
          <TypewriterText 
            text="No further exits remain." 
            speed={80}
            delay={4000}
          />
        </div>
        
        {/* Glitched Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 6 }}
          className="bg-black border border-red-500 rounded-lg p-6 mb-8 font-jetbrains text-left"
        >
          <div className="text-red-500 mb-2">drift@nullpath:~$ locate_path</div>
          <div className="text-red-400 mb-2">ERROR: Path not found in drift matrix</div>
          <div className="text-red-500 mb-2">drift@nullpath:~$ return_home</div>
          <div className="text-red-400 mb-2">Initiating emergency protocol...</div>
          <div className="text-red-500">drift@nullpath:~$ <span className="animate-pulse">|</span></div>
        </motion.div>
        
        {/* Navigation Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 7 }}
          className="space-y-4"
        >
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-transparent border border-red-500 text-red-500 font-orbitron font-bold uppercase tracking-wider hover:bg-red-500 hover:text-black transition-all duration-300"
          >
            Return to Drift
          </Link>
          
          <div className="font-vt323 text-gray-500 text-sm">
            // The only escape is through the entrance
          </div>
        </motion.div>
        
        {/* Floating Error Symbols */}
        <div className="absolute top-20 left-10 text-red-500/30 text-4xl animate-float">
          ⚠
        </div>
        <div className="absolute bottom-20 right-10 text-red-500/30 text-6xl animate-float" style={{ animationDelay: '1s' }}>
          ◊
        </div>
        <div className="absolute top-1/3 right-20 text-red-500/30 text-3xl animate-float" style={{ animationDelay: '2s' }}>
          ✗
        </div>
      </motion.div>
      
      {/* Sound Effect Simulation */}
      <div className="fixed bottom-4 right-4 font-jetbrains text-xs text-red-600 opacity-50">
        [ERROR_SOUND.WAV]
      </div>
    </div>
  );
};

export default NotFound;
