
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';
import TypewriterText from '../components/TypewriterText';

const Console = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string; type: 'command' | 'output' | 'error' }>>([]);
  const [currentPath, setCurrentPath] = useState('~/drift/protocol');
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: 'Available commands: drift.state(), freeze.override(), connect.wallet(), clear, ls, pwd, whoami',
    'drift.state()': 'DRIFT_PROTOCOL_STATUS: ACTIVE\nNULLPATH_NODES: ∞\nTEMPORAL_LOCK: ENGAGED\nFREEZE_TAX: 0.00%',
    'freeze.override()': 'WARNING: Attempting to override temporal locks...\nACCESS DENIED: Insufficient drift clearance\nREQUIRED_LEVEL: NULL_ADMIN',
    'connect.wallet()': 'Initializing wallet connection...\nScanning for compatible drift interfaces...\nSOLANA_DETECTED: TRUE\nPHANTOM_DETECTED: TRUE\nConnection established to the cold layer.',
    clear: 'CLEAR',
    ls: 'drwxr-xr-x  nullpath/\ndrwxr-xr-x  freeze/\n-rw-r--r--  drift.config\n-rw-r--r--  temporal.lock',
    pwd: currentPath,
    whoami: 'drift_user@nullpath_terminal',
    'exit': 'There is no exit from the drift.',
    'hack': 'Nice try. The drift cannot be hacked—it simply is.',
    'sudo': 'Sudo privileges are for linear time users.',
    'cd ..': 'You cannot escape the current directory. This is the drift.',
  };

  useEffect(() => {
    // Initial welcome message
    setHistory([
      { command: '', output: 'DRIFT PROTOCOL TERMINAL v2.1.0', type: 'output' },
      { command: '', output: 'Initializing connection to nullpath nodes...', type: 'output' },
      { command: '', output: 'Connection established. Welcome to the drift.', type: 'output' },
      { command: '', output: 'Type "help" for available commands.', type: 'output' },
    ]);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    if (!cmd.trim()) return;

    const command = cmd.toLowerCase().trim();
    
    setHistory(prev => [...prev, { command: cmd, output: '', type: 'command' }]);

    setTimeout(() => {
      if (command === 'clear') {
        setHistory([]);
        return;
      }

      const output = commands[command as keyof typeof commands] || `Command not found: ${cmd}\nType "help" for available commands.`;
      const type = commands[command as keyof typeof commands] ? 'output' : 'error';

      setHistory(prev => [...prev, { command: '', output, type }]);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-space-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-8"
        >
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-matrix-green mb-6">
            <GlitchText text="CONSOLE" className="text-shadow-glow" />
          </h1>
          <p className="font-vt323 text-xl text-gray-300 max-w-2xl mx-auto">
            // Direct neural interface to the drift protocol
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-black border border-matrix-green rounded-lg overflow-hidden shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="bg-drift-gray px-4 py-2 flex items-center justify-between">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-matrix-green rounded-full"></div>
            </div>
            <div className="font-jetbrains text-xs text-gray-400">
              drift_terminal@nullpath:~
            </div>
          </div>

          {/* Terminal Content */}
          <div 
            ref={terminalRef}
            className="h-96 overflow-y-auto p-4 font-jetbrains text-sm bg-black"
          >
            {history.map((entry, index) => (
              <div key={index} className="mb-2">
                {entry.type === 'command' && (
                  <div className="flex">
                    <span className="text-matrix-green mr-2">drift@nullpath:~$</span>
                    <span className="text-white">{entry.command}</span>
                  </div>
                )}
                {entry.output && (
                  <div className={`whitespace-pre-line ${
                    entry.type === 'error' ? 'text-red-400' : 
                    entry.type === 'output' ? 'text-icy-blue' : 'text-white'
                  }`}>
                    <TypewriterText 
                      text={entry.output} 
                      speed={20} 
                      showCursor={false}
                    />
                  </div>
                )}
              </div>
            ))}
            
            {/* Current Input Line */}
            <form onSubmit={handleSubmit} className="flex">
              <span className="text-matrix-green mr-2">drift@nullpath:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent text-white outline-none flex-1 font-jetbrains"
                autoFocus
                placeholder="Enter command..."
              />
              <span className="text-matrix-green animate-pulse">|</span>
            </form>
          </div>
        </motion.div>

        {/* Quick Commands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            'drift.state()',
            'freeze.override()',
            'connect.wallet()',
            'help'
          ].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="backdrop-blur-glass border border-matrix-green/30 rounded-lg p-3 font-jetbrains text-sm text-matrix-green hover:bg-matrix-green/10 transition-all duration-300"
            >
              {cmd}
            </button>
          ))}
        </motion.div>

        {/* Info Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 backdrop-blur-glass rounded-lg p-6 holographic-border"
        >
          <h3 className="font-orbitron text-xl font-bold text-icy-blue mb-4">
            Terminal Access Info
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-jetbrains text-sm">
            <div>
              <div className="text-matrix-green mb-1">SESSION_ID:</div>
              <div className="text-gray-300">0x{Math.random().toString(16).substr(2, 8)}</div>
            </div>
            <div>
              <div className="text-matrix-green mb-1">DRIFT_LEVEL:</div>
              <div className="text-gray-300">AUTHENTICATED</div>
            </div>
            <div>
              <div className="text-matrix-green mb-1">TEMPORAL_SYNC:</div>
              <div className="text-gray-300">LOCKED</div>
            </div>
            <div>
              <div className="text-matrix-green mb-1">NULLPATH_ACCESS:</div>
              <div className="text-gray-300">ENABLED</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Console;
