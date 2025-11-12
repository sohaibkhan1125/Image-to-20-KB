import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Conditions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please read these terms carefully before using our image compression service.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using ImageCompress ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>
          </section>

          {/* Service Description */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Service Description</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Provide</h3>
              <p className="text-gray-700 mb-4">
                ImageCompress is a free, web-based image compression tool that allows users to reduce the file size of their images 
                while maintaining visual quality. Our service operates entirely within your web browser and does not require registration.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Local image compression using HTML5 Canvas technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Support for JPG, PNG, GIF, and WebP image formats</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Precise size control with target KB specifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Quality preservation with advanced compression algorithms</span>
                </li>
              </ul>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">User Responsibilities</h2>
            <div className="space-y-6">
              
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Acceptable Use</h3>
                <p className="text-gray-700 mb-4">You agree to use our service only for lawful purposes and in accordance with these terms. You agree not to:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Upload images containing illegal, harmful, or inappropriate content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Attempt to reverse engineer or modify our service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Use automated tools to overload our servers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Violate any applicable laws or regulations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Image Ownership</h3>
                <p className="text-gray-700 mb-4">
                  You retain full ownership and rights to all images you upload and process through our service. 
                  We do not claim any ownership rights to your images.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Your Rights</h4>
                    <p className="text-gray-600 text-sm">You own all rights to your original and compressed images</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Our Rights</h4>
                    <p className="text-gray-600 text-sm">We claim no ownership or rights to your images</p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Service Availability */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Service Availability</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">No Guarantees</h3>
              <p className="text-gray-700 mb-4">
                While we strive to provide reliable service, we cannot guarantee that our service will be available at all times. 
                The service is provided "as is" without warranties of any kind.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Service may be temporarily unavailable for maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Browser compatibility may affect functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Large files may take longer to process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Internet connection required for service access</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Limitations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Service Limitations</h2>
            <div className="space-y-6">
              
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">File Size Limits</h3>
                <p className="text-gray-700 mb-4">To ensure optimal performance, we have implemented the following limitations:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Maximum input file size: 50MB</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Target compression size: 1KB to 10MB</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Supported formats: JPG, PNG, GIF, WebP only</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Limitations</h3>
                <p className="text-gray-700 mb-4">Our service has certain technical limitations:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Requires modern web browser with HTML5 Canvas support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Processing time depends on image size and complexity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Compression results may vary based on image content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Some image formats may not compress as effectively</span>
                  </li>
                </ul>
              </div>

            </div>
          </section>

          {/* Privacy and Data */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Privacy and Data Handling</h2>
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Processing</h3>
              <p className="text-gray-700 mb-4">
                Our service is designed with privacy in mind. All image processing occurs locally in your browser:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">What We Don't Do</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Store your images on our servers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Collect personal information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Track your usage patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Share your data with third parties</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">What Happens Locally</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Images are processed in your browser</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Compressed images are downloaded directly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>No data transmission to our servers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Complete privacy and security</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Disclaimers</h2>
            <div className="space-y-6">
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">No Warranties</h3>
                <p className="text-gray-700 mb-4">
                  Our service is provided "as is" without any warranties, express or implied. We disclaim all warranties including:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>Warranties of merchantability or fitness for a particular purpose</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>Warranties regarding the accuracy or reliability of results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span>Warranties that the service will be uninterrupted or error-free</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Limitation of Liability</h3>
                <p className="text-gray-700 mb-4">
                  In no event shall ImageCompress be liable for any direct, indirect, incidental, special, or consequential damages 
                  arising out of or in connection with the use of our service.
                </p>
                <p className="text-gray-700 text-sm">
                  This includes but is not limited to: loss of data, loss of profits, business interruption, or any other 
                  commercial damages or losses.
                </p>
              </div>

            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Intellectual Property</h2>
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Ownership</h3>
              <p className="text-gray-700 mb-4">
                The ImageCompress service, including its design, functionality, and underlying technology, is owned by us. 
                You may not copy, modify, or distribute our service without permission.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Our Rights</h4>
                  <p className="text-gray-600 text-sm">We own the service, website, and all related intellectual property</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Your Rights</h4>
                  <p className="text-gray-600 text-sm">You retain full rights to your images and compressed results</p>
                </div>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Termination</h2>
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Termination</h3>
              <p className="text-gray-700 mb-4">
                We reserve the right to terminate or suspend access to our service at any time, with or without notice, 
                for any reason including violation of these terms.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>We may suspend service for maintenance or updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>We may terminate access for violations of these terms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>You may stop using the service at any time</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Modification of Terms</h3>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. 
                Your continued use of the service after changes constitutes acceptance of the new terms.
              </p>
              <p className="text-gray-700">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Questions About These Terms</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
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
          </section>

          {/* Governing Law */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Governing Law</h2>
              <p className="text-xl mb-6 opacity-90">
                These terms are governed by and construed in accordance with applicable laws. 
                By using our service, you agree to these terms and conditions.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">✓</div>
                  <p className="opacity-90">Fair Terms</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">🛡️</div>
                  <p className="opacity-90">User Protection</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">⚖️</div>
                  <p className="opacity-90">Legal Compliance</p>
                </div>
              </div>
              <a 
                href="/" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Start Using Our Service
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
