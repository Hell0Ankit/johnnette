import Layout from '../../Components/Layout';
import React from 'react';
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Layout title="404: GPS Signal Lost | Johnnette Technologies">
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0f1d] text-slate-100 overflow-hidden px-4 font-mono">
        
        {/* HUD Grid Layout Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
        
        {/* Drone Crosshair / Target Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-[450px] h-[450px] border border-cyan-500 rounded-full animate-[spin_20s_linear_infinite]"></div>
          <div className="w-[300px] h-[300px] border border-dashed border-blue-500 rounded-full animate-[spin_10s_linear_infinite_reverse]"></div>
          {/* Crosshair lines */}
          <div className="absolute w-[500px] h-[1px] bg-cyan-500/50"></div>
          <div className="absolute h-[500px] w-[1px] bg-cyan-500/50"></div>
        </div>

        <div className="z-10 text-center max-w-lg mx-auto p-8 border border-cyan-500/20 bg-slate-900/60 backdrop-blur-md rounded-xl relative shadow-[0_0_50px_rgba(6,182,212,0.05)]">
          
          {/* Top Corner Tech Brackets */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>

          {/* Telemetry Status Bar */}
          <div className="flex items-center justify-between text-xs text-amber-500 mb-6 bg-amber-500/5 px-3 py-1.5 border border-amber-500/20 rounded">
            <span className="flex items-center gap-1.5 animate-pulse">
              <span className="h-2 w-2 rounded-full bg-amber-500"></span>
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
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-cyan-400 mb-2">
            No Fly Zone / Grid Lost
          </h2>
          <p className="text-sm text-slate-400 mb-8 max-w-sm mx-auto leading-relaxed">
            The telemetry server couldn't locate the waypoint. The UAV has triggered an automatic RTL (Return To Launch) protocol.
          </p>

          {/* Action Buttons (Industrial/Tech Style) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold uppercase tracking-wide transition-all duration-200 border-b-4 border-cyan-800 active:border-b-0 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              Initiate RTL (Home)
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold uppercase tracking-wide border border-cyan-500/30 transition-all duration-200"
            >
              Manual Override
            </button>
          </div>
        </div>

        {/* Real-time looking Telemetry Data on Screen Edges */}
        <div className="hidden lg:block absolute bottom-10 left-10 text-[10px] text-slate-500 space-y-1">
          <div>SYS_STATUS: DISARMED</div>
          <div>GPS_FIX: 3D_FIX_LOST</div>
          <div>LAT_VAL: INVALID</div>
          <div>LNG_VAL: INVALID</div>
        </div>

        <div className="hidden lg:block absolute bottom-10 right-10 text-[10px] text-slate-500 text-right space-y-1">
          <div>PITCH: 0.00°</div>
          <div>ROLL: 0.00°</div>
          <div>YAW: 180.00°</div>
          <div>FREQ: 2.4 GHz_DISCONNECTED</div>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;