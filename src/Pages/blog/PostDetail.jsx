import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Import Data 
import { PostData } from '../../data/PostData';

// Import Common Components 
import Layout from '../../Components/Layout'
import PageTopBarImage from '../../Components/common/PageTopBarImage';




const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = PostData.find(k => k.id === id);

  if (!post) return <div className="p-10">Post Not Found</div>;

  return (
    <Layout title="Post Details | Johnnette Technologies">

        <section className="section-custom">
          <PageTopBarImage
              title={post.title} 
              bgImage={post.image}   
          />
        </section>

        <section className="section-custom p-6">
            <div className="body-container card hero p-6 lg:p-12">
                <div className="wrap-hero-box space-y-6">
                    {/* 2. Author (Badge Style) */}
                    <div className="flex justify-start">
                        <span className="flex items-center gap-2 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                            <i className="fa-solid fa-user"></i>
                            By {post.author || "Admin"}
                        </span>
                    </div>

                    {/* 3. Post Title */}
                    <h2 className="primary-heading leading-tight text-[30px] md:text-[40px]"> 
                        {post.title} 
                    </h2>

                    {/* 4. Post Description */}
                    <div className="text-[18px] text-[var(--text-secondary)] leading-relaxed blog-content">
                        <div dangerouslySetInnerHTML={{ __html: post.description }} />
                    </div>

                    {/* 5. Back Button  */}
                    <div className="pt-6 border-t border-gray-100">
                        <button 
                            onClick={() => navigate(-1)} 
                            className="font-[500] text-[16px] text-[var(--text)] md:text-[18px] underline flex items-center gap-2"
                        >
                            <i className="fa-solid fa-arrow-left-long"></i>
                            Back to Blogs Page
                        </button>
                    </div>

                </div>
            </div>
        </section>
    </Layout>
  );
};

export default PostDetail;