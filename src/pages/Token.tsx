
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';

const Token = () => {
  const [supplyCount, setSupplyCount] = useState(1000000000);
  const [burnedTokens, setBurnedTokens] = useState(0);

  useEffect(() => {
    // Animate supply counter
    const interval = setInterval(() => {
      setSupplyCount(prev => prev + Math.floor(Math.random() * 100));
      setBurnedTokens(prev => prev + Math.floor(Math.random() * 10));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const tokenomics = [
    { label: "Total Supply", value: "∞", detail: "Infinite drift capacity" },
    { label: "Freeze Tax", value: "0%", detail: "No friction in the drift" },
    { label: "LP Lock", value: "Forever", detail: "Time locked beyond time" },
    { label: "Team Allocation", value: "0%", detail: "We are the protocol" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-icy-blue mb-6">
            <GlitchText text="DRIFT TOKEN" className="text-shadow-glow" />
          </h1>
          <p className="font-vt323 text-xl text-gray-300 max-w-2xl mx-auto">
            // Economics of the impossible. Value exists in the spaces between.
          </p>
        </motion.div>

        {/* Live Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="backdrop-blur-glass rounded-lg p-8 holographic-border mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="font-orbitron text-2xl font-bold text-neon-purple mb-4">
              LIVE PROTOCOL METRICS
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-lg border border-icy-blue/30">
              <div className="font-jetbrains text-sm text-matrix-green mb-2">CURRENT_SUPPLY</div>
              <div className="font-orbitron text-2xl font-bold text-icy-blue">
                {supplyCount.toLocaleString()}
              </div>
            </div>
            
            <div className="text-center p-4 rounded-lg border border-neon-purple/30">
              <div className="font-jetbrains text-sm text-matrix-green mb-2">DRIFT_RATE</div>
              <div className="font-orbitron text-2xl font-bold text-neon-purple">
                0.00%
              </div>
            </div>
            
            <div className="text-center p-4 rounded-lg border border-matrix-green/30">
              <div className="font-jetbrains text-sm text-matrix-green mb-2">BURNED_TOKENS</div>
              <div className="font-orbitron text-2xl font-bold text-matrix-green">
                {burnedTokens.toLocaleString()}
              </div>
            </div>
            
            <div className="text-center p-4 rounded-lg border border-icy-blue/30">
              <div className="font-jetbrains text-sm text-matrix-green mb-2">COLD_NODES</div>
              <div className="font-orbitron text-2xl font-bold text-icy-blue">
                ∞
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tokenomics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {tokenomics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="backdrop-blur-glass rounded-lg p-6 holographic-border hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-center">
                <h3 className="font-orbitron text-xl font-bold text-neon-purple mb-2">
                  {item.label}
                </h3>
                <div className="font-orbitron text-3xl font-black text-icy-blue mb-2 group-hover:animate-pulse-glow">
                  {item.value}
                </div>
                <p className="font-space text-gray-300 text-sm">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Circular Economy Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-center mb-12"
        >
          <h2 className="font-orbitron text-2xl font-bold text-icy-blue mb-8">
            DRIFT ECONOMY CYCLE
          </h2>
          
          <div className="relative max-w-md mx-auto">
            <div className="w-64 h-64 mx-auto relative">
              {/* Outer Ring */}
              <div className="absolute inset-0 border-2 border-icy-blue rounded-full animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-icy-blue rounded-full" />
              </div>
              
              {/* Middle Ring */}
              <div className="absolute inset-4 border-2 border-neon-purple rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-neon-purple rounded-full" />
              </div>
              
              {/* Inner Ring */}
              <div className="absolute inset-8 border-2 border-matrix-green rounded-full animate-spin" style={{ animationDuration: '10s' }}>
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-matrix-green rounded-full" />
              </div>
              
              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="font-orbitron text-xl font-bold text-null-white">
                  DRIFT
                </div>
              </div>
            </div>
            
            <div className="mt-6 font-vt323 text-gray-400">
              Perpetual motion in the digital realm
            </div>
          </div>
        </motion.div>

        {/* Utility Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="backdrop-blur-glass rounded-lg p-8 holographic-border"
        >
          <h2 className="font-orbitron text-2xl font-bold text-neon-purple mb-6 text-center">
            DRIFT TOKEN UTILITY
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl mb-3">❄️</div>
              <h3 className="font-orbitron font-bold text-icy-blue mb-2">Freeze Access</h3>
              <p className="font-space text-sm text-gray-300">Enter temporal lock states</p>
            </div>
            
            <div className="text-center p-4">
              <div className="text-3xl mb-3">🌀</div>
              <h3 className="font-orbitron font-bold text-neon-purple mb-2">Drift Rewards</h3>
              <p className="font-space text-sm text-gray-300">Earn from the in-between</p>
            </div>
            
            <div className="text-center p-4">
              <div className="text-3xl mb-3">∞</div>
              <h3 className="font-orbitron font-bold text-matrix-green mb-2">Null Governance</h3>
              <p className="font-space text-sm text-gray-300">Vote in the void</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Token;
