import Layout from "../../Components/Layout";
import PageTopBarImage from "../../Components/common/PageTopBarImage";
import top_bar from "../../assets/img/news/top-bar.webp";
import { NewsData } from "../../data/NewsData";
import React, { useState } from "react";

import { useGSAP } from "@gsap/react";
import { initAnimations } from "../../animations/animation.js";


const News = () => {
    const [visibleCount, setVisibleCount] = useState(18);
    const loadMore = () => {
        setVisibleCount((prev) => prev + 18);
    };

    useGSAP(() => {
            initAnimations();
        })
    return (
        <Layout title="News and Media | Johnnette Technologies">
            <section className="section-custom">
                <PageTopBarImage
                    title="News & media latest update "
                    bgImage={top_bar}
                />
            </section>

            <section className="section-custom bg-[#0e0d0d]">
                <div className="body-container py-5 lg:py-20">
                    {/* Grid */}
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {NewsData.slice(0, visibleCount).map((news) => (
                            <div
                                key={news.id}
                                className="card shadow-sm hover:shadow-lg transition-all flex flex-col h-full"
                            >
                                {/* Image & Logo Overlay */}
                                <div className="relative h-56 w-full">
                                    <img
                                        src={news.img}
                                        alt="news"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-md">
                                        <img
                                            src={news.logo}
                                            alt="source"
                                            className="h-6 w-auto  "
                                        />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="primary-heading text-[25px] line-clamp-2">
                                        {news.title}
                                    </h3>
                                    <p className="text-[18px] text-[var(--text-secondary)]  blog-content line-clamp-3">
                                        {news.desc}
                                    </p>

                                    {/* Read More Link */}
                                    <div className="mt-auto pt-4 border-t border-white/5">
                                        <a
                                            href={news.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between font-[500] text-[16px] text-[var(--text)] md:text-[18px] lg:text-[20px] underline hover:text-white  transition-colors"
                                        >
                                            Click to know more
                                            <i className="fa-solid fa-arrow-right text-xs"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    {visibleCount < NewsData.length && (
                        <div className="mt-20 flex justify-center">
                            <button
                                onClick={loadMore}
                                className="btn btn-primary"
                            >
                                LOAD MORE NEWS
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
};
export default News;