import React from 'react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Us"
        description="Learn more about ImageCompress, the professional image optimization tool designed for quality and precision. Our mission is simple: better images, smaller files."
        canonical="/about"
      />
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">ImageCompress</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted solution for professional image compression with precise size control and perfect quality preservation.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Mission Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At ImageCompress, we believe that image optimization shouldn't compromise on quality. Our mission is to provide
                a powerful, user-friendly tool that allows you to compress images to exact target sizes while maintaining
                perfect visual fidelity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're a web developer optimizing for faster load times, a content creator managing file sizes,
                or a business professional preparing presentations, we're here to make image compression simple, accurate, and reliable.
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose ImageCompress?</h2>
            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Precise Size Control</h3>
                <p className="text-gray-600">
                  Set exact target file sizes in KB and get results that never exceed your limit.
                  Our advanced algorithm ensures perfect size accuracy.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Perfect Quality Preservation</h3>
                <p className="text-gray-600">
                  Maintain 100% visual fidelity with no blur, color distortion, or quality loss.
                  Your images look identical to the original.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy & Security</h3>
                <p className="text-gray-600">
                  All compression happens locally in your browser. Your images never leave your device,
                  ensuring complete privacy and security.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
                <p className="text-gray-600">
                  Experience rapid compression with our optimized algorithms.
                  Get results in seconds, not minutes.
                </p>
              </div>
            </div>
          </section>

          {/* Technology Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Advanced Technology</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-8">

                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-blue-600">AI</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Algorithms</h3>
                  <p className="text-gray-600 text-sm">
                    Multi-phase compression with binary search optimization for precise results.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-green-600">HQ</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Preservation</h3>
                  <p className="text-gray-600 text-sm">
                    High-quality rendering with format-aware compression techniques.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-purple-600">⚡</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance</h3>
                  <p className="text-gray-600 text-sm">
                    Client-side processing with optimized canvas operations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Perfect For</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Web Developers</h3>
                <p className="text-gray-600 text-sm">
                  Optimize images for faster website loading times while maintaining visual quality.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Creators</h3>
                <p className="text-gray-600 text-sm">
                  Manage file sizes for social media, blogs, and digital content platforms.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">E-commerce</h3>
                <p className="text-gray-600 text-sm">
                  Compress product images for online stores while preserving detail and clarity.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Email Marketing</h3>
                <p className="text-gray-600 text-sm">
                  Optimize images for email campaigns to ensure fast delivery and compatibility.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Mobile Apps</h3>
                <p className="text-gray-600 text-sm">
                  Reduce app size by compressing images without sacrificing user experience.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Presentations</h3>
                <p className="text-gray-600 text-sm">
                  Create professional presentations with optimized images for better performance.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Users Trust Us</h2>
            <div className="grid md:grid-cols-4 gap-8">

              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-gray-600">Privacy Guaranteed</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <p className="text-gray-600">Optimization Iterations</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">0</div>
                <p className="text-gray-600">Quality Loss</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">∞</div>
                <p className="text-gray-600">Free Usage</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Images?</h2>
              <p className="text-xl mb-6 opacity-90">
                Experience the power of precise image compression with perfect quality preservation.
              </p>
              <a
                href="/"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Start Compressing Now
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default About;
