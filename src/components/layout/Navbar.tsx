import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Leaf } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import logo from '../../assets/logo.png';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Program Studi', href: '/programs' },
    { name: 'Dosen', href: '/faculty' },
    { name: 'Kontak', href: '/contact' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled 
          ? 'py-4 backdrop-blur-md bg-primary/95 shadow-xl border-b border-white/5' 
          : 'py-8 bg-transparent'
      )}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div 
              whileHover={{ rotate: 15 }}
              className="w-14 h-14 flex items-center justify-center"
            >
              <img 
                src={logo} 
                alt="UNIMED Logo" 
                className="w-full h-full object-contain drop-shadow-sm"
                onError={(e) => {
                  e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_Unimed.png";
                }}
              />
            </motion.div>
            <span className={cn(
              "text-2xl font-display font-bold tracking-tight transition-colors",
              isScrolled || isHomePage ? "text-white" : "text-primary"
            )}>
              Bio <span className="text-accent">·</span> UNIMED
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className={cn(
                  "relative text-sm font-medium tracking-wide transition-colors group",
                  location.pathname === link.href 
                    ? "text-accent" 
                    : (isScrolled || isHomePage ? "text-white/80 hover:text-white" : "text-primary/70 hover:text-primary")
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300",
                  location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
            <Link 
              to="/contact"
              className={cn(
                "px-6 py-2 font-bold rounded-full text-sm shadow-lg transition-all hover:scale-105 active:scale-95",
                isScrolled || isHomePage 
                  ? "bg-accent text-primary shadow-accent/20" 
                  : "bg-primary text-white shadow-primary/20"
              )}
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={cn(
              "lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors",
              isScrolled || isHomePage ? "text-white" : "text-primary"
            )}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 35, stiffness: 300 }}
            className="fixed inset-0 z-[101] bg-primary flex flex-col p-8 overflow-y-auto w-screen h-screen"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img 
                    src={logo} 
                    alt="Logo" 
                    className="w-full h-full object-contain" 
                    onError={(e) => { e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_Unimed.png"; }}
                  />
                </div>
                <span className="text-2xl font-display font-bold text-white tracking-tight">Bio · UNIMED</span>
              </div>
              <button 
                className="text-white p-3 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center" 
                onClick={() => setMobileMenuOpen(false)} 
                aria-label="Close menu"
              >
                <X className="w-10 h-10" />
              </button>
            </div>
            
            <div className="flex flex-col gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                  key={link.name}
                >
                  <Link 
                    to={link.href}
                    className={cn(
                      "text-5xl font-display font-bold transition-all inline-block",
                      location.pathname === link.href ? "text-accent translate-x-4" : "text-white/80 hover:text-white"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 pt-12 border-t border-white/10"
              >
                <p className="text-white/40 text-sm font-mono uppercase tracking-[0.2em] mb-6">Mari Bergabung Bersama Kami</p>
                <Link 
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-8 bg-accent text-primary font-bold rounded-3xl text-center text-2xl block shadow-2xl shadow-accent/20 active:scale-95 transition-transform"
                >
                  Hubungi Kami
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
