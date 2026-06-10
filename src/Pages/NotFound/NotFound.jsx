import Layout from '../../Components/Layout';
import React from 'react';
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Layout title="404: GPS Signal Lost | Johnnette Technologies">
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0f1d] text-slate-100 overflow-hidden px-4 font-mono">
        
        {/* HUD Grid Layout Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
        <div className="z-10 text-center max-w-lg mx-auto p-8 border border-cyan-500/20 bg-slate-900/60 backdrop-blur-md rounded-xl relative shadow-[0_0_50px_rgba(6,182,212,0.05)]">
          {/* Telemetry Status Bar */}
          <div className="flex items-center justify-between text-xs text-[var(--brand-color)] mb-6 bg-amber-500/5 px-3 py-1.5 border border-amber-500/20 rounded">
            <span className="flex items-center gap-1.5 animate-pulse">
              <span className="h-2 w-2 rounded-full bg-[var(--brand-color)]"></span>
              SIGNAL_LOSS: UAV_OUT_OF_BOUNDS
            </span>
            <span>ALT: ---m | BAT: 100%</span>
          </div>
          
          {/* Big Error Display */}
          <div className="relative inline-block mb-4">
            <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-400 drop-shadow-[0_4px_12px_rgba(6,182,212,0.3)]">
              404
            </h1>
          </div>

          {/* Aerospace Drone Copy */}
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-[var(--white)] mb-2">
            Page Not Found
          </h2>
          <p className="text-sm text-slate-400 mb-8 max-w-sm mx-auto leading-relaxed">
            The telemetry server couldn't locate the waypoint. The UAV has triggered an automatic RTL (Return To Launch) protocol.
          </p>

          {/* Action Buttons (Industrial/Tech Style) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-3 bg-transparent hover:bg-slate-700 text-white font-bold uppercase tracking-wide border border-white transition-all duration-200"

            >
             Back to Home
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-6 py-3 bg-transparent hover:bg-slate-700 text-white font-bold uppercase tracking-wide border border-white transition-all duration-200"
            >
              Manual Override
            </button>
          </div>
        </div>

        
      </div>
    </Layout>
  );
}

export default NotFound;