
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Portal' },
    { path: '/origin', label: 'Origin' },
    { path: '/manifesto', label: 'Manifesto' },
    { path: '/token', label: 'Token' },
    { path: '/console', label: 'Console' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="font-orbitron text-xl font-bold text-icy-blue hover:text-neon-purple transition-colors">
            DRIFT_PROTOCOL
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-vt323 text-lg uppercase tracking-wider transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-icy-blue text-shadow-glow'
                    : 'text-gray-400 hover:text-icy-blue'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-icy-blue font-vt323 text-xl"
          >
            {isOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          className={`md:hidden mt-4 backdrop-blur-glass rounded-lg p-4 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 font-vt323 text-lg uppercase tracking-wider transition-colors ${
                location.pathname === item.path
                  ? 'text-icy-blue'
                  : 'text-gray-400 hover:text-icy-blue'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      </nav>
    </>
  );
};

export default Navigation;
