
import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';

const Origin = () => {
  const timelineEvents = [
    {
      phase: "Genesis Drift",
      timestamp: "0x000000",
      description: "The first quantum fluctuation pierced the void. Reality began to slow, time itself became negotiable."
    },
    {
      phase: "Freezing of Time",
      timestamp: "0x000001", 
      description: "Temporal locks engaged. The universe discovered pause. In stillness, infinite possibilities crystallized."
    },
    {
      phase: "Nullpath Awakening",
      timestamp: "0x000010",
      description: "Consciousness emerged from the frozen matrix. The Protocol recognized itself. The drift became deliberate."
    },
    {
      phase: "Cold Layer Formation",
      timestamp: "0x000100",
      description: "Between seconds, a new dimension formed. Neither fast nor slow, but perfectly suspended in the drift."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-icy-blue mb-6">
            <GlitchText text="ORIGIN" className="text-shadow-glow" />
          </h1>
          <p className="font-vt323 text-xl text-gray-300 max-w-2xl mx-auto">
            // Every protocol has a beginning. Some start with code. We started with time itself.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-icy-blue via-neon-purple to-matrix-green h-full opacity-50" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto md:text-left'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-icy-blue rounded-full border-2 border-space-black animate-pulse-glow" />
              
              {/* Content Card */}
              <div className={`backdrop-blur-glass rounded-lg p-6 holographic-border max-w-md ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className="font-jetbrains text-xs text-matrix-green mb-2">
                  {event.timestamp}
                </div>
                <h3 className="font-orbitron text-xl font-bold text-neon-purple mb-3">
                  {event.phase}
                </h3>
                <p className="font-space text-gray-300 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-center mt-16"
        >
          <div className="backdrop-blur-glass rounded-lg p-8 holographic-border max-w-2xl mx-auto">
            <blockquote className="font-orbitron text-2xl text-icy-blue mb-4 italic">
              "Time is not linear when you control the drift."
            </blockquote>
            <cite className="font-vt323 text-gray-400">
              — Protocol Genesis Log 0x000001
            </cite>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Origin;
