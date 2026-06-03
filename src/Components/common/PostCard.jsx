import React from 'react'
import { useNavigate } from 'react-router-dom';

const PostCard = ({post}) => {
   const navigate = useNavigate();
     return (
        <div className=" card p-6 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
            <div className="fade-up flex-grow space-y-4">
                {/* 1. Image */}
                <div className="w-full h-48 overflow-hidden rounded-sm">
                    <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* 2. Author  */}
                <div className="flex justify-start">
                    <span className="flex items-center gap-2 bg-slate-100 text-slate-600 px-2 py-1 rounded-full text-[12px] font-bold uppercase tracking-wide">
                        <i className="fa-solid fa-user"></i>
                        {post.author || "Admin"}
                    </span>
                </div>
                
                {/* 3. Title */}
                <h3 className="primary-heading text-[25px]">{post.title}</h3>

                {/* 4. Description */}
                <div className="text-[18px] text-[var(--text-secondary)]  blog-content line-clamp-3">
                    <div dangerouslySetInnerHTML={{ __html: post.description }} />
                </div>

                {/* 5. Read More */}
                <button  
                    onClick={() => navigate(`/blogs/${post.id}`)} 
                    className="font-[500] text-[16px] text-[var(--text)] md:text-[18px] lg:text-[20px] underline"
                >
                    Read More
                </button>
            </div>
        </div>
     );
}

export default PostCard