import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogBySlug } from '../services/blogService';
import SEO from '../components/SEO';
import { useTheme } from '../contexts/ThemeContext';
import { FaCalendarAlt, FaUser, FaChevronLeft, FaClock } from 'react-icons/fa';

const BlogPost = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const { currentTheme } = useTheme();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true);
                const data = await getBlogBySlug(slug);
                setBlog(data);
            } catch (error) {
                console.error('Error fetching blog:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-24">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen pt-32 pb-16 text-center">
                <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
                <p className="text-gray-500 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
                <Link to="/blog" className="text-blue-600 hover:text-blue-800 font-bold flex items-center justify-center">
                    <FaChevronLeft className="mr-2" /> Back to Blog
                </Link>
            </div>
        );
    }

    // Calculate reading time roughly
    const wordCount = blog.content?.split(/\s+/).length || 0;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    return (
        <div className="min-h-screen pt-24 pb-16" style={{ backgroundColor: currentTheme.colors.background }}>
            <SEO
                title={`${blog.seoTitle || blog.title} - Image Compressor`}
                description={blog.seoDescription || blog.excerpt}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Link */}
                <Link
                    to="/blog"
                    className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-blue-600 mb-8 transition-colors duration-200"
                >
                    <FaChevronLeft className="mr-2" /> Back to Blog
                </Link>

                <article className="bg-white rounded-[2rem] shadow-xl shadow-blue-500/5 overflow-hidden border border-gray-100">
                    {/* Header Image */}
                    {blog.imageUrl && (
                        <div className="w-full h-[400px] overflow-hidden">
                            <img
                                src={blog.imageUrl}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {/* Article Header */}
                    <div className="p-8 md:p-12 border-b border-gray-100">
                        <div className="flex flex-wrap items-center gap-6 mb-6 text-sm font-medium text-gray-400">
                            <span className="flex items-center px-3 py-1 bg-gray-50 rounded-full">
                                <FaCalendarAlt className="mr-2 text-blue-500" />
                                {new Date(blog.createdAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className="flex items-center px-3 py-1 bg-gray-50 rounded-full">
                                <FaUser className="mr-2 text-purple-500" />
                                {blog.author}
                            </span>
                            <span className="flex items-center px-3 py-1 bg-gray-50 rounded-full">
                                <FaClock className="mr-2 text-green-500" />
                                {readingTime} min read
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-extrabold mb-6" style={{ color: currentTheme.colors.text, lineHeight: '1.2' }}>
                            {blog.title}
                        </h1>

                        <p className="text-xl text-gray-500 italic leading-relaxed border-l-4 border-blue-600 pl-6">
                            {blog.excerpt}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12">
                        <div
                            className="prose prose-lg max-w-none prose-blue prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-3xl"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </div>

                    {/* Footer / Tags */}
                    {blog.tags && (
                        <div className="px-8 md:px-12 pb-12">
                            <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
                                {blog.tags.split(',').map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-widest"
                                    >
                                        #{tag.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </article>

                {/* Share Section (Optional but looks premium) */}
                <div className="mt-12 text-center p-8 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl text-white">
                    <h3 className="text-2xl font-bold mb-2">Enjoyed this article?</h3>
                    <p className="text-blue-100 mb-0">Share it with your friends and help them optimize their images too!</p>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
