import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPublishedBlogs } from '../services/blogService';
import SEO from '../components/SEO';
import { useTheme } from '../contexts/ThemeContext';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const { currentTheme } = useTheme();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await getPublishedBlogs();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className="min-h-screen pt-24 pb-16" style={{ backgroundColor: currentTheme.colors.background }}>
            <SEO
                title="Our Blog - Image Compressor"
                description="Read our latest articles on image optimization, web performance, and digital design."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: currentTheme.colors.text }}>
                        Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Insights</span>
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto" style={{ color: currentTheme.colors.textSecondary }}>
                        Tips, tricks, and official updates from the Image Compressor team.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                ) : blogs.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
                        <p className="text-gray-500 text-lg">No articles found yet. Check back soon!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <Link
                                key={blog.id}
                                to={`/blog/${blog.slug}`}
                                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                {/* Image Container */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={blog.imageUrl || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60'}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {!blog.imageUrl && (
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-multiply" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center space-x-4 mb-3 text-xs font-medium uppercase tracking-wider text-blue-600">
                                        <span className="flex items-center">
                                            <FaCalendarAlt className="mr-1.5" />
                                            {new Date(blog.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                        <span className="flex items-center">
                                            <FaUser className="mr-1.5" />
                                            {blog.author}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-200" style={{ color: currentTheme.colors.text }}>
                                        {blog.title}
                                    </h2>

                                    <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                                        {blog.excerpt}
                                    </p>

                                    <div className="mt-auto pt-4 flex items-center text-sm font-bold text-blue-600 group-hover:translate-x-2 transition-transform duration-200">
                                        Read Full Article <FaArrowRight className="ml-2 mt-0.5" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;
