
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ParticleField from '../components/ParticleField';
import GlitchText from '../components/GlitchText';
import TypewriterText from '../components/TypewriterText';

const Landing = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleField />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="font-orbitron text-4xl md:text-6xl lg:text-8xl font-black text-icy-blue mb-4">
              <GlitchText text="DRIFT" className="text-shadow-glow" />
              <br />
              <span className="text-neon-purple">PROTOCOL</span>
            </h1>
            
            <div className="font-vt323 text-xl md:text-2xl text-gray-300 mb-6">
              <TypewriterText 
                text="// Nullpath Sequence Initiated" 
                speed={80}
                delay={2000}
                className="block mb-2"
              />
              <TypewriterText 
                text="// Solana runs fast. You glide slow." 
                speed={80}
                delay={4000}
              />
            </div>
          </div>

          {/* Status Display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6 }}
            className="backdrop-blur-glass holographic-border rounded-lg p-6 mb-8 max-w-2xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-jetbrains text-sm">
              <div className="text-center">
                <div className="text-matrix-green">PROTOCOL_STATUS</div>
                <div className="text-icy-blue font-bold">ACTIVE</div>
              </div>
              <div className="text-center">
                <div className="text-matrix-green">DRIFT_RATE</div>
                <div className="text-icy-blue font-bold">0.00% TAX</div>
              </div>
              <div className="text-center">
                <div className="text-matrix-green">NULLPATH_NODES</div>
                <div className="text-icy-blue font-bold">∞</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/origin"
              className="drift-button"
            >
              Enter the Cold Layer
            </Link>
            
            <Link
              to="/console"
              className="drift-button border-neon-purple text-neon-purple hover:bg-neon-purple"
            >
              Access Terminal
            </Link>
          </motion.div>

          {/* Floating Glyph */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 8, duration: 2 }}
            className="absolute top-1/4 right-10 hidden lg:block"
          >
            <div className="text-6xl text-icy-blue/30 animate-float">
              ◊
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 9 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="font-vt323 text-gray-500 text-center">
            <div className="text-xs mb-2">SCROLL TO EXPLORE</div>
            <div className="w-px h-8 bg-icy-blue/50 mx-auto animate-pulse"></div>
          </div>
        </motion.div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
    </div>
  );
};

export default Landing;
