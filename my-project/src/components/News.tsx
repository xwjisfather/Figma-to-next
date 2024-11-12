"use client"
import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface NewsData {
  flashNewsGuid: string;
  flashNewsLink: string;
  generateDate: string;
  id: number;
  language: string;
  pubDate: string;
  slug: string;
  sourceId: number;
  status: string;
  summary: string;
  title: string;
}

const MotionArticle = motion.article;

const News: React.FC = () => {
  const [news, setNews] = useState<NewsData[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const fetchNews = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://tradingwithaiservice-f0drbtcthje3chbp.eastasia-01.azurewebsites.net/api/flashnews?language=zh"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: NewsData[] = await response.json();
      const newData = data.slice(page * 30, (page + 1) * 30);
      setNews(prevNews => {
        const existingIds = new Set(prevNews.map(item => item.id));
        const uniqueNewData = newData.filter(item => !existingIds.has(item.id) && item.language === 'zh');
        return [...prevNews, ...uniqueNewData];
      });
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  useEffect(() => {
    const handleScroll = () => {
      if (!loading && containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 100) {
          setPage(prevPage => prevPage + 1);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [loading]);

  return (
    <section
      id="news"
      data-layername="testimonials"
      className="flex flex-col items-center px-4 mt-96 max-lg:mt-72 max-md:mt-48 max-sm:mt-24 w-full text-center text-white relative"
    >
      {/* 背景图片 */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-1/5 w-full max-w-[1800px] z-0">
        <img
          src="/map.svg"
          className="w-full h-full object-contain opacity-50"
          alt="Background map"
          loading="lazy"
        />
      </div>

      {/* 内容层 */}
      <h2
        data-layername="最新新闻"
        className="text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-medium relative z-10"
      >
        最新新闻
      </h2>
      
      <div className="w-full max-w-[2200px] mx-auto px-4 overflow-hidden relative z-10">
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-32 max-lg:mt-24 max-md:mt-16 max-sm:mt-12 max-h-[800px] overflow-y-auto pr-2 sm:pr-4 styled-scrollbar"
        >
          {news.map((item, index) => (
            <MotionArticle
              key={`${item.id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col justify-center py-10 max-lg:py-8 max-md:py-6 max-sm:py-4 px-10 max-lg:px-8 max-md:px-6 max-sm:px-4 rounded-3xl bg-slate-900 bg-opacity-50 shadow-[0px_0px_100px_rgba(20,15,42,1)] hover:bg-opacity-60 transition-all duration-300">
                {/* 日期标签 */}
                <div className="flex justify-end mb-3">
                  <span className="text-xs text-blue-300 bg-blue-500/10 px-2 py-1 rounded-full">
                    {new Date(item.pubDate).toLocaleDateString('zh-CN', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>

                <h3 className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-medium mb-4">
                  {item.title}
                </h3>
                
                <p className="mt-5 max-lg:mt-4 max-md:mt-3 max-sm:mt-2 text-xl max-lg:text-lg max-md:text-base max-sm:text-sm line-clamp-3">
                  {item.summary}
                </p>

                <a
                  href={item.flashNewsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <span className="relative">
                    了解更多
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <svg
                    className="w-4 h-4 ml-2 transform transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </MotionArticle>
          ))}
        </div>

        {loading && (
          <div className="flex justify-center mt-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .styled-scrollbar::-webkit-scrollbar {
          width: 4px;
          @media (min-width: 640px) {
            width: 6px;
          }
        }
        .styled-scrollbar::-webkit-scrollbar-track {
          background: rgba(59, 130, 246, 0.1);
          border-radius: 3px;
        }
        .styled-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.3);
          border-radius: 3px;
        }
        .styled-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </section>
  );
};

export default News;