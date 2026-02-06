import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu, X, LogIn, LogOut, User } from 'lucide-react';
import { useAuth } from '../App';
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Team', path: '/team' },
    { name: 'About Us', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-cyan-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Link to="/" className="flex items-center gap-2">
              <div className="p-2 bg-cyan-500/10 rounded-full border border-cyan-400 ">
                  <img
                    src="/assets/logo.png"
                    alt="Prastuti Logo"
                    className="h-10 w-10 object-contain"
                  />
              </div>
              <span className="font-heading font-bold text-2xl tracking-wider text-white">
                PRASTUTI<span className="text-cyan-400">'26</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-cyan-400 bg-cyan-900/20 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/*{user ? (
                <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-700">
                  <span className="text-slate-300 text-sm flex items-center gap-2">
                     <User className="w-4 h-4 text-cyan-400" /> {user.name}
                  </span>
                  <button
                    onClick={logout}
                    className="text-slate-400 hover:text-white transition-colors"
                    title="Logout"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="ml-4 flex items-center gap-2 px-4 py-2 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium transition-colors"
                >
                  <LogIn className="w-4 h-4" /> Login
                </Link>
              )}*/}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-cyan-900/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-cyan-400 bg-cyan-900/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-4 mt-4 border-t border-slate-800">
              {/*{user ? (
                <div className="px-3 space-y-3">
                  <div className="text-slate-300 text-base font-medium flex items-center gap-2">
                    <User className="w-4 h-4 text-cyan-400" /> {user.name}
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-400 hover:text-red-300 hover:bg-slate-800"
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                </div>
              ) : (
                <div className="px-3">
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 w-full px-3 py-2 rounded-md text-base font-medium bg-cyan-600/10 text-cyan-400 hover:bg-cyan-600 hover:text-white transition-colors"
                  >
                    <LogIn className="w-4 h-4" /> Login
                  </Link>
                </div>
              )}*/}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};