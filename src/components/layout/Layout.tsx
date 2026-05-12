import { ReactNode, useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div 
        className="custom-cursor hidden lg:block"
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.5 }}
      />
      <motion.div 
        className="custom-cursor-dot hidden lg:block"
        animate={{ x: mousePosition.x - 2, y: mousePosition.y - 2 }}
        transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.8 }}
      />
    </>
  );
};

const logoFallback = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_Unimed.png";

const SplashScreen = () => (
  <motion.div 
    className="fixed inset-0 z-[200] bg-primary flex flex-col items-center justify-center pointer-events-none"
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ duration: 0.8, delay: 2.0, ease: "easeInOut" }}
  >
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center gap-6"
    >
      <div className="w-40 h-40 flex items-center justify-center">
        <img 
          src={logo} 
          alt="UNIMED Logo" 
          className="w-full h-full object-contain"
          onError={(e) => {
            e.currentTarget.src = logoFallback;
          }}
        />
      </div>
      <h1 className="text-white text-4xl font-display font-bold tracking-tight text-center">
        Biologi <span className="text-accent underline underline-offset-8">UNIMED</span>
      </h1>
      <motion.div 
        className="h-1 w-32 bg-white/20 rounded-full overflow-hidden mt-4"
      >
        <motion.div 
          className="h-full bg-accent"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  </motion.div>
);

export const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen">
      <SplashScreen />
      <CustomCursor />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};
