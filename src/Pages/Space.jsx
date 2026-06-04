import React, { useState, useEffect, useMemo, useRef, Suspense } from 'react';
import Layout from '../Components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket } from 'lucide-react';

import SectionHeading from '../Components/common/SectionHeading';

// Three.js Core Modules
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

import satelliteImg from '../assets/img/space/cubesat_icon.png';
import SpaceED from '../assets/img/space/SpaceED.webp';
import chandrayaan from '../assets/img/space/chandrayaan-3.webp';
import neemdrone from '../assets/img/space/neemdrone.webp';
import CubeSat from '../assets/img/space/CubeSat.webp';

import { useGSAP } from "@gsap/react";
import { initAnimations } from "../animations/animation.js";

// Atmosphere Glow Layer
const AtmosphereGlow = () => {
  useGSAP(() => {
    initAnimations();
  })
  return (
    <mesh>
      <sphereGeometry args={[2.06, 128, 128]} />
      <meshStandardMaterial
        color="#1d4ed8" 
        side={THREE.BackSide}
        transparent
        opacity={0.04}
        depthWrite={false}
      />
    </mesh>
  );
};

// Globe Component
const ThreeGlobe = ({ isLoaded, dayTexture, normalTexture }) => {
  const globeRef = useRef();

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[1.9, 128, 128]} />
      <meshStandardMaterial
        map={isLoaded ? dayTexture : null}
        normalMap={isLoaded ? normalTexture : null}
        normalScale={new THREE.Vector2(0.4, 0.4)}
        color={isLoaded ? "#ffffff" : "#c0783f"}
        roughness={0.75}
        metalness={0.1}
      />
    </mesh>
  );
};

// Main Export Component
const Space = () => {
  const [launchStatus, setLaunchStatus] = useState('idle');
  const [countdown, setCountdown] = useState(5);

  const [texturesLoaded, setTexturesLoaded] = useState(false);
  const [dayTexture, setDayTexture] = useState(null);
  const [normalTexture, setNormalTexture] = useState(null);

  useEffect(() => {
    const manager = new THREE.LoadingManager();
    const loader = new THREE.TextureLoader(manager);

    const texture1 = loader.load('/space/planet_day.jpg');
    const texture2 = loader.load('/space/planet_normal.jpg');

    manager.onLoad = () => {
      setDayTexture(texture1);
      setNormalTexture(texture2);
      setTexturesLoaded(true);
    };

    manager.onError = (url) => {
      console.log('Error loading texture: ' + url + ' | Switching to safe material color.');
    };
  }, []);

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
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  return (
    <Layout title="Space | Johnnette Technologies">
      <div className="section-custom overflow-hidden">

        {/* Twinkling Stars */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute bg-white rounded-full shadow-[0_0_3px_#fff]"
              style={{ top: star.top, left: star.left, width: star.size, height: star.size }}
              animate={{ opacity: [0.1, 0.9, 0.1], scale: [1, 1.3, 1] }}
              transition={{ duration: star.duration, repeat: Infinity, delay: star.delay, ease: 'easeInOut' }}
            />
          ))}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.15),transparent_70%)]" />
        </div>

        {/* Countdown Overlay */}
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
              <p className="text-white tracking-widest mt-4 uppercase text-[14px] font-medium animate-pulse">
                Preparing for CubeSat journey...
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section className="section-custom min-h-screen relative flex items-center z-10">
          <div className="body-container px-4 sm:px-6 py-12 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative w-full">

            {/* Left Content — comes second on mobile, first on desktop */}
            <div className="space-y-6 sm:space-y-8 z-20 w-full text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-5xl lg:text-7xl font-light tracking-tight leading-tight">
                  Expanding Horizons <br />
                  <span className="font-bold text-white">From Defence to Space</span>
                </h2>
                <p className="max-w-xl mx-auto lg:mx-0 text-gray-400 text-base sm:text-lg leading-relaxed">
                  Upcoming innovations: SpaceED, CubeSats, Chandrayaan subsystems, and near-vacuum drones. After empowering the Indian Army, we're taking the next leap in space.
                </p>
              </div>

              <div className="relative max-w-sm mx-auto lg:mx-0 z-30">
                <AnimatePresence mode="wait">
                  {launchStatus === 'idle' && (
                    <motion.button
                      key="btn"
                      onClick={handleLaunch}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn btn-primary flex items-center justify-center"
                    >
                      Launch CubeSat
                    </motion.button>
                  )}

                  {launchStatus === 'orbiting' && (
                    <motion.div key="success" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center">
                      <button className='w-full btn btn-primary flex items-center justify-center hover:border-green-400 cursor-text'>
                        <p className="text-green-400 font-bold uppercase tracking-widest">Launch Initiated...</p>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Canvas — comes first on mobile (globe shows on top) */}
            <div className="relative flex items-center justify-center w-full order-1 lg:order-2">
              <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

              {/* Canvas box scales: 280 mobile → 380 sm → 440 md → 520 lg */}
              <div
                className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] lg:w-[520px] lg:h-[520px] z-10 relative flex items-center justify-center"
                style={{ background: 'transparent' }}
              >
                <Suspense fallback={<div className="w-full h-full rounded-full bg-[#020617]" />}>
                  <Canvas
                    camera={{ position: [0, 0, 5.5], fov: 45 }}
                    gl={{ antialias: true, alpha: true }}
                    onCreated={({ gl }) => {
                      gl.setClearColor(0x020617, 0);
                    }}
                  >
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[5, 3, 5]} intensity={1.8} />
                    <pointLight position={[-4, -3, -4]} intensity={0.3} />
                    <pointLight position={[-5, 2, -3]} intensity={0.8} color="#60a5fa" />
                    <AtmosphereGlow />
                    <ThreeGlobe
                      isLoaded={texturesLoaded}
                      dayTexture={dayTexture}
                      normalTexture={normalTexture}
                    />
                    <OrbitControls enableZoom={false} enablePan={false} />
                  </Canvas>
                </Suspense>
              </div>

              {/* satelliteImg orbit — matches canvas size at every breakpoint */}
              {launchStatus === 'orbiting' && (
                <motion.div
                  className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] lg:w-[520px] lg:h-[520px] z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    className="absolute w-full h-full"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 flex items-center justify-center">
                      <img
                        src={satelliteImg}
                        alt="Satellite"
                        className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(96,165,250,0.9)]"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center mb-10 sm:mb-16">
            <SectionHeading title="Upcoming Projects" />
          </div>

          {/* 1 col mobile → 2 col sm → 4 col lg */}
          <div className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

            <div className="card flex flex-col h-full">
              <div className="flex items-center justify-center ">
                <img src={SpaceED} alt="SpaceED" className="w-full h-full object-contain" />
              </div>
              <div class="p-6">
                      <h3 className="primary-heading text-[25px] "> SpaceED</h3>
                      <p className="text-[16px] text-[var(--text-secondary)]  mb-4 ">A hands-on educational program to train the next generation of space engineers in designing and building CubeSats.</p>
                    </div>
            </div>

            <div className="card flex flex-col h-full">
              <div className="flex items-center justify-center ">
                <img src={chandrayaan} alt="Chandrayaan" className="w-full h-full object-cover" />
              </div>
              <div class="p-6">
                      <h3 className="primary-heading text-[25px]"> Subsystems for Chandrayaan </h3>
                      <p className="text-[16px] text-[var(--text-secondary)]  mb-4">Proudly contributing critical subsystems and components for India’s prestigious lunar missions under ISRO initiatives.</p>
                    </div>
            </div>

            <div className="card flex flex-col h-full">
              <div className="flex items-center justify-center ">
                <img src={neemdrone} alt="Near-Vacuum Drone" className="w-full h-full object-cover" />
              </div>
              <div class="p-6">
                      <h3 className="primary-heading text-[25px]"> Near-Vacuum Drone </h3>
                      <p className="text-[16px] text-[var(--text-secondary)]  mb-4">Developing a specialized drone capable of operating in low-pressure environments — a game changer for extraterrestrial missions.</p>
                    </div>
            </div>

            <div className="card flex flex-col h-full">
              <div className="flex items-center justify-center">
                <img src={CubeSat} alt="CubeSat" className="w-full h-full object-cover" />
              </div>
              <div class="p-6">
                      <h3 className="primary-heading text-[25px]"> CubeSat </h3>
                      <p className="text-[16px] text-[var(--text-secondary)]  mb-4">Launching soon: A drone system that deploys CubeSats from space stations into orbit and returns autonomously—pushing the future of in-space logistics.</p>
                    </div>

            </div>

          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Space;