import React from 'react';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
  const helpCategories = [
    {
      title: "Getting Started",
      icon: "🚀",
      description: "Learn how to use our image compression service",
      articles: [
        { title: "How to upload and compress images", link: "#" },
        { title: "Understanding target file sizes", link: "#" },
        { title: "Supported image formats", link: "#" },
        { title: "Browser requirements", link: "#" }
      ]
    },
    {
      title: "Compression Guide",
      icon: "⚙️",
      description: "Master the art of image compression",
      articles: [
        { title: "Choosing the right target size", link: "#" },
        { title: "Quality vs file size balance", link: "#" },
        { title: "Best practices for different image types", link: "#" },
        { title: "Understanding compression results", link: "#" }
      ]
    },
    {
      title: "Troubleshooting",
      icon: "🔧",
      description: "Solve common issues and problems",
      articles: [
        { title: "Images not compressing properly", link: "#" },
        { title: "Browser compatibility issues", link: "#" },
        { title: "Large file processing problems", link: "#" },
        { title: "Quality concerns and solutions", link: "#" }
      ]
    },
    {
      title: "Privacy & Security",
      icon: "🛡️",
      description: "Understand how we protect your data",
      articles: [
        { title: "How local processing works", link: "#" },
        { title: "Data privacy guarantees", link: "#" },
        { title: "Image ownership rights", link: "#" },
        { title: "Commercial use permissions", link: "#" }
      ]
    }
  ];

  const quickLinks = [
    { title: "FAQ", description: "Frequently asked questions", link: "/faq", icon: "❓" },
    { title: "Contact Support", description: "Get help from our team", link: "/contact", icon: "📧" },
    { title: "Report Issue", description: "Report bugs or problems", link: "/report", icon: "🐛" },
    { title: "Terms of Service", description: "Legal terms and conditions", link: "/terms", icon: "📋" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Help <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Center</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers, guides, and support resources to help you get the most out of ImageCompress.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Quick Links */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Access</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.link}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:border-blue-300 group"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-3">{link.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{link.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Help Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Help Categories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {helpCategories.map((category, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{category.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <ul className="space-y-2">
                        {category.articles.map((article, articleIndex) => (
                          <li key={articleIndex}>
                            <a 
                              href={article.link}
                              className="text-blue-600 hover:text-blue-800 text-sm hover:underline"
                            >
                              {article.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Step-by-Step Guide */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Use ImageCompress</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-4 gap-6">
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Image</h3>
                  <p className="text-gray-600 text-sm">
                    Drag and drop your image or click to browse. Supports JPG, PNG, GIF, and WebP formats up to 50MB.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Set Target Size</h3>
                  <p className="text-gray-600 text-sm">
                    Enter your desired file size in KB. Our algorithm will compress to this exact size or smaller.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Compress</h3>
                  <p className="text-gray-600 text-sm">
                    Click compress and watch our advanced algorithm optimize your image while preserving quality.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Download</h3>
                  <p className="text-gray-600 text-sm">
                    Download your compressed image instantly. Compare file sizes and see the compression statistics.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* Tips and Best Practices */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tips & Best Practices</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">✅ Do's</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Start with reasonable target sizes (not too small)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Use high-quality source images for better results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Test different target sizes to find the sweet spot</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Use modern browsers for optimal performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Check compression statistics to understand results</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">❌ Don'ts</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Don't set extremely small target sizes (under 5KB)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Don't upload images larger than 50MB</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Don't use unsupported file formats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Don't expect perfect results with very complex images</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Don't refresh the page during compression</span>
                  </li>
                </ul>
              </div>

            </div>
          </section>

          {/* Common Issues */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Issues & Solutions</h2>
            <div className="space-y-6">
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Image not compressing to target size</h3>
                <p className="text-gray-600 mb-3">
                  <strong>Possible causes:</strong> Target size too small, complex image content, or browser limitations.
                </p>
                <p className="text-gray-600">
                  <strong>Solution:</strong> Try increasing your target size by 10-20KB, or use a different browser. Our algorithm prioritizes quality over exact size matching.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Compression taking too long</h3>
                <p className="text-gray-600 mb-3">
                  <strong>Possible causes:</strong> Large file size, complex image, or slower device performance.
                </p>
                <p className="text-gray-600">
                  <strong>Solution:</strong> Wait for the process to complete (up to 30 seconds for large files), or try with a smaller image first.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser compatibility issues</h3>
                <p className="text-gray-600 mb-3">
                  <strong>Possible causes:</strong> Outdated browser or disabled JavaScript/Canvas support.
                </p>
                <p className="text-gray-600">
                  <strong>Solution:</strong> Update your browser to the latest version, or try Chrome, Firefox, Safari, or Edge.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality concerns</h3>
                <p className="text-gray-600 mb-3">
                  <strong>Possible causes:</strong> Very aggressive compression or unsuitable target size.
                </p>
                <p className="text-gray-600">
                  <strong>Solution:</strong> Increase your target size, use higher quality source images, or try different compression settings.
                </p>
              </div>

            </div>
          </section>

          {/* Contact Support */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-xl mb-6 opacity-90">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  to="/contact" 
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Contact Support
                </Link>
                <Link 
                  to="/report" 
                  className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  Report Issue
                </Link>
                <Link 
                  to="/" 
                  className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  Try Our Tool
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
