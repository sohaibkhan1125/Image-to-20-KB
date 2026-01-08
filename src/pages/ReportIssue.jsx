import React, { useState } from 'react';
import SEO from '../components/SEO';

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issueType: '',
    browser: '',
    description: '',
    steps: '',
    expectedResult: '',
    actualResult: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        issueType: '',
        browser: '',
        description: '',
        steps: '',
        expectedResult: '',
        actualResult: ''
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }, 2000);
  };

  const issueTypes = [
    'Compression not working',
    'File size not accurate',
    'Quality issues',
    'Browser compatibility',
    'Upload problems',
    'Download issues',
    'Performance problems',
    'Other'
  ];

  const browsers = [
    'Chrome',
    'Firefox',
    'Safari',
    'Edge',
    'Opera',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Report an Issue"
        description="Encoutered a problem? Report bugs or technical issues with ImageCompress here. We value your feedback to make our tool better."
        canonical="/report-issue"
      />
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Report <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Issue</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Help us improve ImageCompress by reporting bugs, issues, or suggestions. Your feedback is valuable to us.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Before Reporting */}
          <section className="mb-12">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Before Reporting an Issue</h2>
              <p className="text-gray-700 mb-4">
                Please check our FAQ and Help Center first, as your issue might already have a solution:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/faq"
                  className="inline-block bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-700 transition-colors duration-200"
                >
                  Check FAQ
                </a>
                <a
                  href="/help"
                  className="inline-block border border-yellow-600 text-yellow-600 px-4 py-2 rounded-lg font-medium hover:bg-yellow-50 transition-colors duration-200"
                >
                  Help Center
                </a>
              </div>
            </div>
          </section>

          {/* Issue Report Form */}
          <section className="mb-12">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Issue Report Form</h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Issue Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="issueType" className="block text-sm font-medium text-gray-700 mb-2">
                      Issue Type *
                    </label>
                    <select
                      id="issueType"
                      name="issueType"
                      value={formData.issueType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select issue type</option>
                      {issueTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="browser" className="block text-sm font-medium text-gray-700 mb-2">
                      Browser *
                    </label>
                    <select
                      id="browser"
                      name="browser"
                      value={formData.browser}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select your browser</option>
                      {browsers.map((browser, index) => (
                        <option key={index} value={browser}>{browser}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Issue Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Issue Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Describe the issue you're experiencing in detail..."
                  />
                </div>

                {/* Steps to Reproduce */}
                <div>
                  <label htmlFor="steps" className="block text-sm font-medium text-gray-700 mb-2">
                    Steps to Reproduce *
                  </label>
                  <textarea
                    id="steps"
                    name="steps"
                    value={formData.steps}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="1. Upload an image&#10;2. Set target size to...&#10;3. Click compress&#10;4. Issue occurs..."
                  />
                </div>

                {/* Expected vs Actual Results */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="expectedResult" className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Result *
                    </label>
                    <textarea
                      id="expectedResult"
                      name="expectedResult"
                      value={formData.expectedResult}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="What should have happened?"
                    />
                  </div>

                  <div>
                    <label htmlFor="actualResult" className="block text-sm font-medium text-gray-700 mb-2">
                      Actual Result *
                    </label>
                    <textarea
                      id="actualResult"
                      name="actualResult"
                      value={formData.actualResult}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="What actually happened?"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting Report...
                    </div>
                  ) : (
                    'Submit Issue Report'
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="text-green-600 font-medium">Issue report submitted successfully! We'll investigate and get back to you soon.</p>
                    </div>
                  </div>
                )}

              </form>
            </div>
          </section>

          {/* Additional Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Happens Next?</h2>
            <div className="grid md:grid-cols-3 gap-8">

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Review</h3>
                <p className="text-gray-600 text-sm">
                  Our team reviews your report and categorizes the issue for proper handling.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Investigate</h3>
                <p className="text-gray-600 text-sm">
                  We reproduce the issue and investigate the root cause to develop a solution.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Respond</h3>
                <p className="text-gray-600 text-sm">
                  We'll email you with updates, solutions, or requests for additional information.
                </p>
              </div>

            </div>
          </section>

          {/* Contact Information */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
              <p className="text-xl mb-6 opacity-90">
                For urgent issues or questions, don't hesitate to reach out directly.
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

export default ReportIssue;
