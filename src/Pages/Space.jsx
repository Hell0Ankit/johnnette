import React, { useState, useEffect, useMemo } from 'react';
import Layout from '../Components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket } from 'lucide-react';

import globe from '../assets/img/space/globe.png';
import satelliteImg from '../assets/img/space/satelight.png'; 

const Space = () => {
  const [launchStatus, setLaunchStatus] = useState('idle'); 
  const [countdown, setCountdown] = useState(5);

  const handleLaunch = () => {
    if (launchStatus !== 'idle') return;
    setLaunchStatus('launching');
    setCountdown(5);
  };

  useEffect(() => {
    let timer;
    if (launchStatus === 'launching' && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setLaunchStatus('orbiting');
    }
    return () => clearInterval(timer);
  }, [launchStatus, countdown]);

  const stars = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5, 
      delay: Math.random() * 4, 
      duration: Math.random() * 3 + 2 
    }));
  }, []);

  const projects = [
    {
      id: 1,
      title: 'SpaceED',
      description: 'A hands-on educational program to train the next generation of space engineers in designing and building CubeSats.',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 2,
      title: 'CubeSat',
      description: 'Launching soon: A drone system that deploys CubeSats from space stations into orbit and returns autonomously—pushing the future of in-space logistics.',
      image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 3,
      title: 'Near-Vacuum Drone',
      description: 'Developing a specialized drone capable of operating in low-pressure environments — a game changer for extraterrestrial missions.',
      image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 4,
      title: 'Subsystems for Chandrayaan',
      description: 'Proudly contributing critical subsystems and components for India’s prestigious lunar missions under ISRO initiatives.',
      image: 'https://images.unsplash.com/photo-1608178398319-48f814d0750c?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <Layout title="Space | Johnnette Technologies">
      {/* Container ko relative banaya taaki stars pure page par sahi se phail sakein */}
      <div className="w-full min-h-screen bg-[#020617] relative text-white overflow-hidden">
        
        {/* --- GLOBAL TWINKLING STARS BACKGROUND (Ab pure component par aayega) --- */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute bg-white rounded-full shadow-[0_0_3px_#fff]"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
              }}
              animate={{
                opacity: [0.1, 0.9, 0.1],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut"
              }}
            />
          ))}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.15),transparent_70%)]" />
        </div>

        {/* Countdown Full-Screen Overlay Layer */}
        <AnimatePresence>
          {launchStatus === 'launching' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex flex-col justify-center items-center backdrop-blur-sm"
            >
              <motion.h2 
                key={countdown}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: [1, 1.1, 1], opacity: 1 }}
                className="text-8xl md:text-9xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500"
              >
                {countdown}
              </motion.h2>
              <p className="text-blue-400 tracking-widest mt-4 uppercase text-xs font-medium animate-pulse">
                Preparing for CubeSat journey...
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- MAIN HERO & ORBIT SECTION --- */}
        <section className="section-custom min-h-screen w-full relative flex items-center z-10">
          <div className="body-container px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative w-full">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8 z-20 w-full"
            >
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-light tracking-tight leading-tight">
                  Expanding Horizons <br />
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                    From Defence to Space
                  </span>
                </h1>
                <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                  Upcoming innovations: SpaceED, CubeSats, Chandrayaan subsystems, and near-vacuum drones. After empowering the Indian Army, we’re taking the next leap in space.
                </p>
              </div>

              {/* Launch Interaction Area */}
              <div className="relative p-6 border border-gray-800 rounded-2xl bg-gray-900/40 backdrop-blur-sm max-w-sm z-30">
                <AnimatePresence mode="wait">
                  {launchStatus === 'idle' && (
                    <motion.button
                      key="btn"
                      onClick={handleLaunch}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-transparent border border-blue-500 text-blue-400 font-bold uppercase tracking-widest rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <Rocket size={20} /> Launch CubeSat
                    </motion.button>
                  )}

                  {launchStatus === 'launching' && (
                    <motion.div key="count-btn" className="text-center">
                      <button className="w-full py-4 bg-transparent border border-gray-700 text-gray-500 font-bold uppercase tracking-widest rounded-lg cursor-not-allowed flex items-center justify-center gap-3">
                        Launch Initiated...
                      </button>
                    </motion.div>
                  )}

                  {launchStatus === 'orbiting' && (
                    <motion.div 
                      key="success"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-center"
                    >
                      <p className="text-green-400 font-bold uppercase tracking-widest">Launch Initiated...</p>
                      <p className="text-gray-500 text-xs mt-1">Satellite in stable orbit</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Globe */}
            <div className={`relative flex items-center h-[550px] w-full transition-all duration-1000 ease-in-out ${launchStatus === 'orbiting' ? 'justify-start lg:pl-12' : 'justify-center'}`}>
              <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
                className="relative w-72 h-72 md:w-[400px] md:h-[400px] z-10 flex items-center justify-center"
              >
                <img 
                  src={globe}
                  alt="Globe" 
                  className="w-full h-full rounded-full object-cover select-none pointer-events-none"
                />
              </motion.div>

              {/* Orbiting Satellite */}
              {launchStatus === 'orbiting' && (
                <motion.div
                  className="absolute w-[440px] h-[440px] md:w-[520px] md:h-[520px] rounded-full border border-dashed border-gray-700/20 z-20 flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-[212px] lg:top-[275px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
                    className="absolute w-full h-full"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center">
                      <img 
                        src={satelliteImg} 
                        alt="Satellite" 
                        className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section className="body-container px-6 py-24 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-light tracking-widest text-white inline-block relative pb-3 uppercase">
              Upcoming <span className="font-bold">Projects</span>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-[2px] bg-blue-500" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-max items-start">
            {projects.map((project) => (
              <motion.div 
                key={project.id} 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0b1329]/50 backdrop-blur-md border border-gray-800/80 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 group"
              >
                {/* Image Wrap */}
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10 opacity-90" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 filter brightness-90"
                  />
                </div>
                
                {/* Content Area */}
                <div className="p-6 space-y-4 relative z-20">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-xl font-semibold text-white tracking-wide">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Space;