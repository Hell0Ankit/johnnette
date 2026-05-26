import React from 'react';
// Import Data 
import { PostData } from '../../data/PostData';

// Import Common Components 
import Layout from '../../Components/Layout';
import PageTopBarImage from '../../Components/common/PageTopBarImage';
import SectionHeading from '../../Components/common/SectionHeading';
import PostCard from '../../Components/common/PostCard';


// Import Images 
import blog_hero from "../../assets/img/blog/blogs.webp";



const Post = () => {
  return (
    <Layout title="Blog | Johnnette Technologies">
        <section className="section-custom">
          <PageTopBarImage
              title="Blogs"
              bgImage={blog_hero}  
          />
        </section>
        
        <section className="section-custom p-4 py-6">
               <SectionHeading title="Our Blogs" />
            <div className="body-container space-y-7 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PostData.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>

        
    </Layout>
  )
}

export default Post