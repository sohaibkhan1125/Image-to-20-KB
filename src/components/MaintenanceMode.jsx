import React from 'react';

const MaintenanceMode = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Website Under Maintenance
        </h1>
        
        <p className="text-lg text-gray-600 mb-6">
          We're currently performing scheduled maintenance to improve your experience. 
          Please check back soon.
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-2">What's happening?</h3>
          <p className="text-sm text-gray-600">
            Our team is working hard to bring you an even better experience. 
            This maintenance is necessary to ensure optimal performance and security.
          </p>
        </div>
        
        <div className="mt-6 text-sm text-gray-500">
          <p>Expected completion: Within a few hours</p>
          <p className="mt-1">Thank you for your patience!</p>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceMode;
