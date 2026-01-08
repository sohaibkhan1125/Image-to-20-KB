import React from 'react';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Privacy Policy"
        description="Learn about our privacy practices and how we protect your data. At ImageCompress, all processing happens locally in your browser for 100% privacy."
        canonical="/privacy-policy"
      />
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we protect your data and ensure complete confidentiality.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                At ImageCompress, we are committed to protecting your privacy and ensuring the security of your personal information.
                This Privacy Policy explains how we collect, use, and safeguard your data when you use our image compression service.
              </p>
            </div>
          </section>

          {/* Key Privacy Points */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Privacy Principles</h2>
            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">100% Local Processing</h3>
                <p className="text-gray-600">
                  All image compression happens entirely in your browser. Your images never leave your device or are transmitted to our servers.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">No Data Collection</h3>
                <p className="text-gray-600">
                  We do not collect, store, or process any personal information or image data from our users.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">No Tracking</h3>
                <p className="text-gray-600">
                  We do not use tracking cookies, analytics, or any other methods to monitor your usage patterns.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Anonymity</h3>
                <p className="text-gray-600">
                  You can use our service without providing any personal information or creating an account.
                </p>
              </div>

            </div>
          </section>

          {/* Detailed Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Privacy Policy</h2>

            <div className="space-y-8">

              {/* Information We Don't Collect */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Information We Don't Collect</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Personal identification information (name, email, address)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Your uploaded images or any image data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>IP addresses or device identifiers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Usage patterns or browsing history</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Cookies or tracking data</span>
                  </li>
                </ul>
              </div>

              {/* How Our Service Works */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How Our Service Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Image Upload</h4>
                      <p className="text-gray-600 text-sm">You select an image file from your device</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Local Processing</h4>
                      <p className="text-gray-600 text-sm">Your browser processes the image locally using HTML5 Canvas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Download Result</h4>
                      <p className="text-gray-600 text-sm">You download the compressed image directly to your device</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mt-4 text-sm">
                  <strong>Important:</strong> At no point during this process does your image data leave your device or get transmitted to our servers.
                </p>
              </div>

              {/* Third-Party Services */}
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Services</h3>
                <p className="text-gray-700 mb-4">
                  Our website may use minimal third-party services for basic functionality:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>CDN Services:</strong> For fast content delivery (no personal data collected)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Hosting Services:</strong> For website availability (no user data stored)</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 text-sm">
                  These services do not have access to your images or personal information.
                </p>
              </div>

              {/* Data Security */}
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Security</h3>
                <p className="text-gray-700 mb-4">
                  Since we don't collect or store any personal data or images, there's no risk of data breaches or unauthorized access to your information.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">No Server Storage</h4>
                    <p className="text-gray-600 text-sm">Your images are never stored on our servers</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">No Database</h4>
                    <p className="text-gray-600 text-sm">We don't maintain any user databases</p>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h3>
                <p className="text-gray-700 mb-4">
                  Since we don't collect personal data, traditional privacy rights don't apply. However, you have the right to:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Use our service completely anonymously</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Compress images without any registration or login</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Delete your browser's local storage at any time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Contact us with questions about this policy</span>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Email:</strong> <a href="mailto:admin@imagecompress.com" className="text-blue-600 hover:text-blue-800">admin@imagecompress.com</a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Response Time:</strong> We typically respond within 24 hours
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Policy Updates */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Policy Updates</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Changes to This Policy</h3>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
              <p className="text-gray-700">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </section>

          {/* Trust Indicators */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Your Privacy is Our Priority</h2>
              <p className="text-xl mb-6 opacity-90">
                We've designed our service with privacy-first principles to ensure your data stays completely secure.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <p className="opacity-90">Local Processing</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">0</div>
                  <p className="opacity-90">Data Collected</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">∞</div>
                  <p className="opacity-90">Privacy Protection</p>
                </div>
              </div>
              <a
                href="/"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Start Using Our Secure Tool
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
