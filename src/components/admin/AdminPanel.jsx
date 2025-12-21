import React, { useState, useEffect, Suspense, lazy } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import AdminAuth from './AdminAuth';
import AdminLayout from './AdminLayout';
import ErrorBoundary from './ErrorBoundary';

// Lazy load admin tabs to reduce initial bundle size
const GeneralSettings = lazy(() => import('./GeneralSettings'));
const BrandingManagement = lazy(() => import('./BrandingManagement'));
const AppearanceManagement = lazy(() => import('./AppearanceManagement'));
const FooterManagement = lazy(() => import('./FooterManagement'));
const ContentManagement = lazy(() => import('./ContentManagement'));
const HeroSectionManagement = lazy(() => import('./HeroSectionManagement'));

const TabLoader = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

const AdminPanel = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('settings');

  useEffect(() => {
    if (!auth) {
      console.error('Firebase auth not available');
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleAuthSuccess = () => {
    // This will be handled by the onAuthStateChanged listener
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'settings':
        return <GeneralSettings />;
      case 'branding':
        return <BrandingManagement />;
      case 'appearance':
        return <AppearanceManagement />;
      case 'footer':
        return <FooterManagement />;
      case 'content':
        return <ContentManagement />;
      case 'hero':
        return <HeroSectionManagement />;
      default:
        return <GeneralSettings />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin panel...</p>
          {!auth && (
            <p className="mt-2 text-sm text-red-600">Firebase connection issue detected</p>
          )}
        </div>
      </div>
    );
  }

  if (!user) {
    return <AdminAuth onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <ErrorBoundary>
      <AdminLayout user={user} currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <Suspense fallback={<TabLoader />}>
          {renderPage()}
        </Suspense>
      </AdminLayout>
    </ErrorBoundary>
  );
};

export default AdminPanel;
