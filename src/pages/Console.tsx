
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';
import TypewriterText from '../components/TypewriterText';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const Console = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string; type: 'command' | 'output' | 'error' }>>([]);
  const [currentPath, setCurrentPath] = useState('~/drift/protocol');
  const [currentPage, setCurrentPage] = useState(1);
  const terminalRef = useRef<HTMLDivElement>(null);
  
  const totalPages = 3; // Terminal, Quick Commands, Info Panel

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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <motion.div
            key="terminal"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
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
        );

      case 2:
        return (
          <motion.div
            key="commands"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <h3 className="col-span-full font-orbitron text-2xl font-bold text-icy-blue mb-6 text-center">
              Quick Commands
            </h3>
            {[
              'drift.state()',
              'freeze.override()',
              'connect.wallet()',
              'help',
              'ls',
              'pwd',
              'whoami',
              'clear'
            ].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="backdrop-blur-glass border border-matrix-green/30 rounded-lg p-4 font-jetbrains text-sm text-matrix-green hover:bg-matrix-green/10 transition-all duration-300 hover:scale-105"
              >
                {cmd}
              </button>
            ))}
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="info"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-glass rounded-lg p-8 holographic-border"
          >
            <h3 className="font-orbitron text-2xl font-bold text-icy-blue mb-6 text-center">
              Terminal Access Info
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-jetbrains text-sm">
              <div className="space-y-4">
                <div>
                  <div className="text-matrix-green mb-1">SESSION_ID:</div>
                  <div className="text-gray-300">0x{Math.random().toString(16).substr(2, 8)}</div>
                </div>
                <div>
                  <div className="text-matrix-green mb-1">DRIFT_LEVEL:</div>
                  <div className="text-gray-300">AUTHENTICATED</div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-matrix-green mb-1">TEMPORAL_SYNC:</div>
                  <div className="text-gray-300">LOCKED</div>
                </div>
                <div>
                  <div className="text-matrix-green mb-1">NULLPATH_ACCESS:</div>
                  <div className="text-gray-300">ENABLED</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-matrix-green/30">
              <h4 className="font-orbitron text-lg font-bold text-neon-purple mb-4">
                System Status
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="backdrop-blur-glass border border-matrix-green/20 rounded-lg p-3">
                  <div className="text-matrix-green text-xs">PROTOCOL</div>
                  <div className="text-icy-blue font-bold">ACTIVE</div>
                </div>
                <div className="backdrop-blur-glass border border-matrix-green/20 rounded-lg p-3">
                  <div className="text-matrix-green text-xs">NODES</div>
                  <div className="text-icy-blue font-bold">∞</div>
                </div>
                <div className="backdrop-blur-glass border border-matrix-green/20 rounded-lg p-3">
                  <div className="text-matrix-green text-xs">UPTIME</div>
                  <div className="text-icy-blue font-bold">∞ DAYS</div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
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

        {/* Current Page Content */}
        <div className="min-h-[500px] flex items-center justify-center">
          {renderCurrentPage()}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) handlePageChange(currentPage - 1);
                  }}
                  className={`text-matrix-green border-matrix-green/30 hover:bg-matrix-green/10 ${
                    currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => {
                const pageNum = i + 1;
                const pageLabels = ['Terminal', 'Commands', 'System Info'];
                return (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(pageNum);
                      }}
                      isActive={currentPage === pageNum}
                      className={`text-matrix-green border-matrix-green/30 hover:bg-matrix-green/10 ${
                        currentPage === pageNum ? 'bg-matrix-green/20' : ''
                      }`}
                      title={pageLabels[i]}
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              
              <PaginationItem>
                <PaginationNext 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) handlePageChange(currentPage + 1);
                  }}
                  className={`text-matrix-green border-matrix-green/30 hover:bg-matrix-green/10 ${
                    currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        {/* Page Indicator */}
        <div className="mt-4 text-center">
          <div className="font-jetbrains text-sm text-gray-400">
            {currentPage === 1 && 'Terminal Interface'}
            {currentPage === 2 && 'Quick Command Access'}
            {currentPage === 3 && 'System Information'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Console;
