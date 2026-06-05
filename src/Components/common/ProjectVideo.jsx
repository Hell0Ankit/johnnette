const ProjectVideo = ({ videoSrc, thumbnail, title }) => {
  return (
    <div className="video-wrapper w-full mx-auto px-4 my-10 group">
      {/* 1. Tactical Outer Frame (Subtle Glow) */}
      <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-red-600/40 shadow-2xl transition-all duration-500 group-hover:shadow-red-600/10">
        
        {/* 2. Main Video Container */}
        <div className="rounded-[14px] overflow-hidden border shadow-[0_0_25px_rgba(255,255,255,0.4)]">
          <video 
            autoPlay 
            muted
            loop      
            playsInline
            controls 
            preload="metadata"
            aria-label="Johnnette Technologies promotional video"
            poster={thumbnail}
            className="w-full h-auto aspect-video object-cover cursor-pointer brightness-110"
          >

          <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
          </video>

          {/* 3. Overlay Title (Optional - Only shows on hover) */}
          <div className="absolute top-4 left-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <span className="bg-black/60 backdrop-blur-md text-white text-xs font-din px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">
                {title || "Making Impossible Possible"}
             </span>
          </div>

        </div>
      </div>

      {/* 4. Bottom Accent Line */}
      <div className="mt-4 flex flex-col items-center">
         <div className="h-[2px] w-12 bg-red-600 mb-2"></div>
         <p className="text-[var(--text)] text-[10px] uppercase tracking-[2px] font-din">
            Johnnette Technologies Pvt Ltd
         </p>
      </div>

    </div>
  )
}

export default ProjectVideo