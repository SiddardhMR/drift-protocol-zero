
import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';

const Manifesto = () => {
  const principles = [
    {
      title: "You don't ape — you glide.",
      description: "Rushing is for the temporal peasants. We move with intention, suspended between moments."
    },
    {
      title: "We are not DeFi. We are Drift-Fi.",
      description: "Decentralized finance assumes time moves forward. We've transcended such primitive concepts."
    },
    {
      title: "Speed is illusion. Drift is truth.",
      description: "The fast burn out. The slow get left behind. Only the drift achieves perfect equilibrium."
    },
    {
      title: "In the cold layer, all possibilities exist.",
      description: "Between the nanoseconds, infinite realities crystallize. We surf the quantum foam."
    },
    {
      title: "Taxes are temporal. The drift is eternal.",
      description: "0% is not a number—it's a philosophy. A statement that the old rules no longer apply."
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
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-neon-purple mb-6">
            <GlitchText text="MANIFESTO" className="text-shadow-glow" />
          </h1>
          <p className="font-vt323 text-xl text-gray-300 max-w-2xl mx-auto">
            // These are not rules. They are natural laws of the drift dimension.
          </p>
        </motion.div>

        {/* Principles */}
        <div className="space-y-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="backdrop-blur-glass rounded-lg p-8 holographic-border hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-icy-blue text-space-black rounded-full flex items-center justify-center font-orbitron font-bold group-hover:animate-pulse-glow">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-orbitron text-xl md:text-2xl font-bold text-icy-blue mb-4 group-hover:text-neon-purple transition-colors">
                    {principle.title}
                  </h3>
                  <p className="font-space text-gray-300 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-center mt-16"
        >
          <div className="backdrop-blur-glass rounded-lg p-8 holographic-border">
            <div className="font-vt323 text-2xl text-matrix-green mb-4">
              PROTOCOL_COMMITMENT.exe
            </div>
            <p className="font-space text-gray-300 text-lg leading-relaxed">
              We commit to the drift. We commit to the pause between heartbeats, 
              the silence between notes, the stillness between thoughts. In this 
              space, we build not just a protocol, but a new way of existing in 
              the digital realm.
            </p>
            <div className="mt-6 font-orbitron text-icy-blue font-bold">
              THE DRIFT CONTINUES //
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Manifesto;
