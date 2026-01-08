import React, { useState } from 'react';
import SEO from '../components/SEO';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "How does ImageCompress work?",
      answer: "ImageCompress uses advanced HTML5 Canvas technology to process your images entirely in your browser. When you upload an image and set a target size, our algorithm intelligently adjusts compression quality and dimensions to achieve your exact target while preserving visual quality. All processing happens locally - your images never leave your device."
    },
    {
      question: "Is ImageCompress really free?",
      answer: "Yes, ImageCompress is completely free with no hidden costs, usage limits, or premium features. You can compress as many images as you want, as often as you want, without any restrictions."
    },
    {
      question: "Are my images secure and private?",
      answer: "Absolutely! Your privacy is our top priority. All image compression happens locally in your browser using HTML5 Canvas. Your images are never uploaded to our servers, stored in our databases, or shared with third parties. We don't collect any personal information or track your usage."
    },
    {
      question: "What image formats are supported?",
      answer: "We support the most common image formats: JPG/JPEG, PNG, GIF, and WebP. Our intelligent algorithm automatically selects the best output format based on your original image and compression settings to maintain optimal quality."
    },
    {
      question: "How accurate is the size targeting?",
      answer: "Our advanced compression algorithm is designed to get as close as possible to your target size. Typically, compressed images will be within 1-3KB of your target size. The algorithm uses binary search optimization and multiple compression phases to achieve precise results."
    },
    {
      question: "Will compressed images lose quality?",
      answer: "Our compression algorithm is designed to preserve visual quality while reducing file size. We use high-quality rendering settings and intelligent quality adjustment to minimize any visual degradation. The goal is to make compressed images look virtually identical to the original."
    },
    {
      question: "What are the file size limits?",
      answer: "You can upload images up to 50MB in size. For compression targets, you can specify anywhere from 1KB to 10MB (10,000KB). These limits ensure optimal performance and prevent browser memory issues."
    },
    {
      question: "How long does compression take?",
      answer: "Compression time depends on your image size and complexity, but most images are processed in seconds. Our algorithm uses up to 50 optimization iterations to achieve the best results, which typically takes 5-30 seconds depending on your device's performance."
    },
    {
      question: "Do I need to create an account?",
      answer: "No account required! ImageCompress works completely anonymously. Simply upload your image, set your target size, and download the compressed result. No registration, login, or personal information needed."
    },
    {
      question: "Can I use compressed images commercially?",
      answer: "Yes! You retain full ownership and rights to your compressed images. You can use them for any purpose - personal, commercial, or professional - without any restrictions. We claim no rights to your images."
    },
    {
      question: "What browsers are supported?",
      answer: "ImageCompress works on all modern browsers that support HTML5 Canvas, including Chrome, Firefox, Safari, Edge, and Opera. For the best experience, we recommend using the latest version of your preferred browser."
    },
    {
      question: "Why is my compressed image larger than expected?",
      answer: "This can happen with certain image types or very small target sizes. Our algorithm prioritizes quality preservation, so if achieving your target size would result in significant quality loss, it may produce a slightly larger file. Try increasing your target size by 10-20KB for better results."
    },
    {
      question: "Can I compress multiple images at once?",
      answer: "Currently, ImageCompress processes one image at a time to ensure optimal quality and performance. This approach allows us to give each image the attention it needs for the best compression results. You can process multiple images by repeating the process for each one."
    },
    {
      question: "What if compression fails or produces errors?",
      answer: "If you encounter issues, try refreshing the page and uploading your image again. Make sure your image is in a supported format and under 50MB. If problems persist, check that your browser supports HTML5 Canvas and try a different browser."
    },
    {
      question: "How do I contact support?",
      answer: "If you have questions or need help, you can reach us at admin@imagecompress.com. We typically respond within 24 hours and are happy to help with any technical issues or questions about our service."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to common questions about ImageCompress, privacy, security, and how to optimize your images for better results."
        canonical="/faq"
      />
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our image compression service. Can't find what you're looking for? Contact us!
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Quick Stats */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-6">Quick Facts</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <p className="opacity-90">Free & Secure</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">4</div>
                  <p className="opacity-90">Supported Formats</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">50MB</div>
                  <p className="opacity-90">Max File Size</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">0</div>
                  <p className="opacity-90">Data Collected</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Items */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openItems[index] ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openItems[index] && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Categories */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-blue-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting Started</h3>
                <p className="text-gray-600 mb-4">Learn how to use our service effectively</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• How does compression work?</li>
                  <li>• What formats are supported?</li>
                  <li>• File size limits</li>
                  <li>• Browser requirements</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy & Security</h3>
                <p className="text-gray-600 mb-4">Understand how we protect your data</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Local processing</li>
                  <li>• No data collection</li>
                  <li>• Image ownership</li>
                  <li>• Commercial use rights</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Support</h3>
                <p className="text-gray-600 mb-4">Get help with technical issues</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Compression accuracy</li>
                  <li>• Quality preservation</li>
                  <li>• Troubleshooting</li>
                  <li>• Contact support</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Tips Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pro Tips</h2>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">For Best Results</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Start with a reasonable target size (not too small)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Use high-quality source images for better compression</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Try different target sizes to find the sweet spot</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Use modern browsers for optimal performance</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Use Cases</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><strong>Web Development:</strong> Optimize images for faster loading</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><strong>Email Marketing:</strong> Reduce attachment sizes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><strong>Social Media:</strong> Meet platform size requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><strong>Presentations:</strong> Optimize for better performance</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-xl mb-6 opacity-90">
                Can't find the answer you're looking for? Our support team is here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:admin@imagecompress.com"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Email Support
                </a>
                <a
                  href="/contact"
                  className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  Contact Form
                </a>
                <a
                  href="/"
                  className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  Try Our Tool
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default FAQ;
