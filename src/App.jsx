import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import FAQ from './pages/FAQ';
import HelpCenter from './pages/HelpCenter';
import ReportIssue from './pages/ReportIssue';
import AdminPanel from './components/admin/AdminPanel';
import MaintenanceMode from './components/MaintenanceMode';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube, 
  FaGithub, 
  FaTiktok, 
  FaDiscord, 
  FaTelegram, 
  FaWhatsapp,
  FaGlobe
} from 'react-icons/fa';

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [branding, setBranding] = useState({
    siteTitle: 'Image Compress',
    logoUrl: ''
  });
  const { currentTheme } = useTheme();

  // Load branding settings and listen for updates
  useEffect(() => {
    const loadBrandingSettings = () => {
      const savedBranding = localStorage.getItem('brandingSettings');
      if (savedBranding) {
        try {
          const parsed = JSON.parse(savedBranding);
          setBranding(prev => ({ ...prev, ...parsed }));
        } catch (error) {
          console.error('Error loading branding settings:', error);
        }
      }
    };

    loadBrandingSettings();

    // Listen for branding updates from admin panel
    const handleBrandingUpdate = (event) => {
      setBranding(event.detail);
    };

    window.addEventListener('brandingUpdated', handleBrandingUpdate);
    return () => window.removeEventListener('brandingUpdated', handleBrandingUpdate);
  }, []);

  return (
    <nav 
      className="shadow-lg fixed w-full top-0 z-50 transition-all duration-300"
      style={{ 
        backgroundColor: currentTheme.colors.surface,
        color: currentTheme.colors.text
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            {branding.logoUrl ? (
              <img
                src={branding.logoUrl}
                alt="Logo"
                className="w-8 h-8 object-contain"
              />
            ) : (
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: currentTheme.colors.primary }}
              >
                <span className="text-white font-bold text-sm">IC</span>
              </div>
            )}
            <span 
              className="text-xl font-bold"
              style={{ color: currentTheme.colors.text }}
            >
              {branding.siteTitle}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="transition-colors duration-200 font-medium"
              style={{ 
                color: currentTheme.colors.textSecondary,
                '--hover-color': currentTheme.colors.primary
              }}
              onMouseEnter={(e) => e.target.style.color = currentTheme.colors.primary}
              onMouseLeave={(e) => e.target.style.color = currentTheme.colors.textSecondary}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="transition-colors duration-200 font-medium"
              style={{ 
                color: currentTheme.colors.textSecondary,
                '--hover-color': currentTheme.colors.primary
              }}
              onMouseEnter={(e) => e.target.style.color = currentTheme.colors.primary}
              onMouseLeave={(e) => e.target.style.color = currentTheme.colors.textSecondary}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="transition-colors duration-200 font-medium"
              style={{ 
                color: currentTheme.colors.textSecondary,
                '--hover-color': currentTheme.colors.primary
              }}
              onMouseEnter={(e) => e.target.style.color = currentTheme.colors.primary}
              onMouseLeave={(e) => e.target.style.color = currentTheme.colors.textSecondary}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">About</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const loadHero = () => {
      const savedHeading = localStorage.getItem('heroHeading');
      const savedDescription = localStorage.getItem('heroDescription');
      if (savedHeading) setHeading(savedHeading);
      if (savedDescription) setDescription(savedDescription);
    };

    loadHero();

    const handleHeroUpdate = (event) => {
      setHeading(event.detail?.heading ?? '');
      setDescription(event.detail?.description ?? '');
    };

    window.addEventListener('heroSectionUpdated', handleHeroUpdate);
    return () => window.removeEventListener('heroSectionUpdated', handleHeroUpdate);
  }, []);

  const defaultHeading = (
    <>
      Compress Images to{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Any Size
      </span>
    </>
  );

  const defaultDescription =
    'Reduce your image file sizes while maintaining quality. Upload any image and compress it to your exact target size in KB.';

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            {heading ? (
              <span className="whitespace-pre-line">{heading}</span>
            ) : (
              defaultHeading
            )}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            {description ? (
              <span className="whitespace-pre-line">{description}</span>
            ) : (
              defaultDescription
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Fast & Secure
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No Upload Required
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              High Quality Output
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom Content Component
const CustomContent = () => {
  const [content, setContent] = useState('');

  // Load custom content and listen for updates
  useEffect(() => {
    const loadContent = () => {
      const savedContent = localStorage.getItem('homePageContent');
      if (savedContent) {
        setContent(savedContent);
      }
    };

    loadContent();

    // Listen for content updates from admin panel
    const handleContentUpdate = (event) => {
      setContent(event.detail);
    };

    window.addEventListener('homePageContentUpdated', handleContentUpdate);
    return () => window.removeEventListener('homePageContentUpdated', handleContentUpdate);
  }, []);

  // Don't render if no content
  if (!content || content.trim() === '') {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  );
};

// Image Compression Component
const ImageCompression = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [targetSize, setTargetSize] = useState(200);
  const [compressedImage, setCompressedImage] = useState(null);
  const [isCompressing, setIsCompressing] = useState(false);
  const [compressionProgress, setCompressionProgress] = useState(0);
  const [error, setError] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [maxFileSize, setMaxFileSize] = useState(50); // Default 50MB
  const fileInputRef = useRef(null);
  const { currentTheme } = useTheme();

  // Load admin settings for file size limit
  useEffect(() => {
    const loadAdminSettings = () => {
      const savedSettings = localStorage.getItem('adminSettings');
      if (savedSettings) {
        try {
          const parsed = JSON.parse(savedSettings);
          if (parsed.maxFileSize) {
            setMaxFileSize(parsed.maxFileSize);
          }
        } catch (error) {
          console.error('Error loading admin settings:', error);
        }
      }
    };

    loadAdminSettings();

    // Listen for admin settings updates
    const handleSettingsUpdate = (event) => {
      if (event.detail.maxFileSize) {
        setMaxFileSize(event.detail.maxFileSize);
      }
    };

    window.addEventListener('adminSettingsUpdated', handleSettingsUpdate);
    return () => window.removeEventListener('adminSettingsUpdated', handleSettingsUpdate);
  }, []);

  const handleFileSelect = (file) => {
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file (JPG, PNG, GIF, WebP).');
      return;
    }
    
    // Check file size using admin setting
    if (file.size > maxFileSize * 1024 * 1024) {
      setError(`File size too large. Please select an image smaller than ${maxFileSize}MB.`);
      return;
    }
    
    setError('');
    setSelectedFile(file);
    setCompressedImage(null);
    setCompressionProgress(0);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const compressImage = async () => {
    if (!selectedFile || !targetSize || targetSize <= 0) {
      setError('Please select an image and enter a valid target size.');
      return;
    }
    
    if (targetSize > 10000) {
      setError('Target size cannot exceed 10MB (10000KB).');
      return;
    }
    
    if (targetSize < 1) {
      setError('Target size must be at least 1KB.');
      return;
    }

    setIsCompressing(true);
    setCompressionProgress(0);
    setError('');

    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        // Enhanced compression algorithm for precise target size
        const originalWidth = img.width;
        const originalHeight = img.height;
        const targetSizeBytes = targetSize * 1024; // Convert KB to bytes
        
        // Set canvas to original size for best quality
        canvas.width = originalWidth;
        canvas.height = originalHeight;
        
        // Enable high-quality image rendering
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        
        // Draw original image
        ctx.drawImage(img, 0, 0, originalWidth, originalHeight);

        const advancedCompression = () => {
          let bestResult = null;
          let iterations = 0;
          const maxIterations = 50; // Increased for more precision
          
          // Phase 1: Ultra-high quality preservation with strict size limit
          const qualityCompression = () => {
            let minQuality = 0.1;
            let maxQuality = 1.0;
            let qualityIterations = 0;
            const maxQualityIterations = 40; // More iterations for precision

            const tryQualityCompression = () => {
              if (qualityIterations >= maxQualityIterations) {
                // Move to dimension-based compression if quality compression isn't sufficient
                dimensionCompression();
                return;
              }

              const quality = (minQuality + maxQuality) / 2;
              
              // Determine optimal output format for quality preservation
              const originalFormat = selectedFile.type.toLowerCase();
              let outputFormat = 'image/jpeg';
              
              // Use PNG for high quality to preserve transparency and avoid JPEG artifacts
              if (originalFormat === 'image/png' && quality > 0.9) {
                outputFormat = 'image/png';
              } else if (originalFormat === 'image/webp' && quality > 0.8) {
                outputFormat = 'image/webp';
              }
              
              canvas.toBlob((blob) => {
                const currentSizeBytes = blob.size;
                const currentSizeKB = currentSizeBytes / 1024;
                
                // STRICT SIZE LIMIT: Never exceed target size
                if (currentSizeBytes <= targetSizeBytes) {
                  // This result is valid - store it if it's better than current best
                  if (!bestResult || 
                      (currentSizeBytes > bestResult.size && currentSizeBytes <= targetSizeBytes) ||
                      (bestResult.size > targetSizeBytes && currentSizeBytes <= targetSizeBytes)) {
                    bestResult = {
                      blob,
                      size: currentSizeKB,
                      quality,
                      format: outputFormat,
                      dimensions: { width: canvas.width, height: canvas.height }
                    };
                  }
                  
                  // If we're very close to target size, we're done
                  if (currentSizeBytes >= targetSizeBytes * 0.95) {
                    finalizeCompression();
                    return;
                  }
                  
                  // Try to get closer to target by increasing quality slightly
                  minQuality = quality;
                  if (quality < 0.98) {
                    minQuality = Math.min(quality * 1.05, 0.98);
                  }
                } else {
                  // Too big - reduce quality
                  maxQuality = quality;
                  if (quality > 0.1) {
                    maxQuality = quality * 0.9;
                  }
                }

                qualityIterations++;
                iterations++;
                
                // Update progress
                const progress = Math.min((iterations / maxIterations) * 80, 75);
                setCompressionProgress(progress);
                
                tryQualityCompression();
              }, outputFormat, quality);
            };

            tryQualityCompression();
          };

          // Phase 2: Dimension-based compression for strict size control
          const dimensionCompression = () => {
            let scaleFactor = 1.0;
            let minScale = 0.1;
            let maxScale = 1.0;
            let dimensionIterations = 0;
            const maxDimensionIterations = 20;

            const tryDimensionCompression = () => {
              if (dimensionIterations >= maxDimensionIterations) {
                finalOptimization();
                return;
              }

              scaleFactor = (minScale + maxScale) / 2;
              const newWidth = Math.max(originalWidth * scaleFactor, 10);
              const newHeight = Math.max(originalHeight * scaleFactor, 10);
              
              canvas.width = newWidth;
              canvas.height = newHeight;
              
              // Use highest quality settings for dimension scaling
              ctx.imageSmoothingEnabled = true;
              ctx.imageSmoothingQuality = 'high';
              ctx.drawImage(img, 0, 0, newWidth, newHeight);
              
              // Try different quality levels with new dimensions
              const qualityLevels = [0.95, 0.9, 0.85, 0.8, 0.7, 0.6, 0.5];
              let qualityIndex = 0;
              
              const tryQualityWithDimensions = () => {
                if (qualityIndex >= qualityLevels.length) {
                  // Adjust scale factor
                  if (bestResult && bestResult.size <= targetSize) {
                    minScale = scaleFactor;
                  } else {
                    maxScale = scaleFactor;
                  }
                  dimensionIterations++;
                  iterations++;
                  
                  const progress = Math.min((iterations / maxIterations) * 100, 95);
                  setCompressionProgress(progress);
                  
                  tryDimensionCompression();
                  return;
                }

                const quality = qualityLevels[qualityIndex];
                const originalFormat = selectedFile.type.toLowerCase();
                let outputFormat = 'image/jpeg';
                
                if (originalFormat === 'image/png' && quality > 0.9) {
                  outputFormat = 'image/png';
                } else if (originalFormat === 'image/webp' && quality > 0.8) {
                  outputFormat = 'image/webp';
                }
                
                canvas.toBlob((blob) => {
                  const currentSizeBytes = blob.size;
                  const currentSizeKB = currentSizeBytes / 1024;
                  
                  // STRICT SIZE LIMIT: Only accept results under target
                  if (currentSizeBytes <= targetSizeBytes) {
                    if (!bestResult || 
                        (currentSizeBytes > bestResult.size && currentSizeBytes <= targetSizeBytes) ||
                        (bestResult.size > targetSizeBytes && currentSizeBytes <= targetSizeBytes)) {
                      bestResult = {
                        blob,
                        size: currentSizeKB,
                        quality,
                        format: outputFormat,
                        dimensions: { width: canvas.width, height: canvas.height }
                      };
                    }
                  }
                  
                  qualityIndex++;
                  tryQualityWithDimensions();
                }, outputFormat, quality);
              };
              
              tryQualityWithDimensions();
            };

            tryDimensionCompression();
          };

          // Phase 3: Final optimization for perfect quality
          const finalOptimization = () => {
            if (!bestResult) {
              finalizeCompression();
              return;
            }

            // Try to improve quality while staying under target
            const optimizationQualityLevels = [0.99, 0.98, 0.97, 0.96, 0.95];
            let optIndex = 0;

            const tryOptimization = () => {
              if (optIndex >= optimizationQualityLevels.length) {
                finalizeCompression();
                return;
              }

              const quality = optimizationQualityLevels[optIndex];
              const originalFormat = selectedFile.type.toLowerCase();
              let outputFormat = 'image/jpeg';
              
              if (originalFormat === 'image/png' && quality > 0.95) {
                outputFormat = 'image/png';
              } else if (originalFormat === 'image/webp' && quality > 0.9) {
                outputFormat = 'image/webp';
              }

              // Use original dimensions for final optimization
              canvas.width = originalWidth;
              canvas.height = originalHeight;
              ctx.imageSmoothingEnabled = true;
              ctx.imageSmoothingQuality = 'high';
              ctx.drawImage(img, 0, 0, originalWidth, originalHeight);

              canvas.toBlob((blob) => {
                const currentSizeBytes = blob.size;
                const currentSizeKB = currentSizeBytes / 1024;
                
                // Only accept if it's under target and better quality than current best
                if (currentSizeBytes <= targetSizeBytes && 
                    (!bestResult || quality > bestResult.quality)) {
                  bestResult = {
                    blob,
                    size: currentSizeKB,
                    quality,
                    format: outputFormat,
                    dimensions: { width: canvas.width, height: canvas.height }
                  };
                }
                
                optIndex++;
                tryOptimization();
              }, outputFormat, quality);
            };

            tryOptimization();
          };

          // Finalize compression with best result
          const finalizeCompression = () => {
            setCompressionProgress(100);
            
            if (bestResult && bestResult.blob) {
              const url = URL.createObjectURL(bestResult.blob);
              setCompressedImage({
                url,
                size: bestResult.size,
                originalSize: selectedFile.size / 1024
              });
              setIsCompressing(false);
            } else {
              setError('Unable to compress to target size while maintaining quality. Please try a larger target size.');
              setIsCompressing(false);
            }
          };

          // Start with quality-based compression
          qualityCompression();
        };

        advancedCompression();
      };

      img.src = URL.createObjectURL(selectedFile);
    } catch (err) {
      setError('Error compressing image. Please try again.');
      setIsCompressing(false);
    }
  };

  const downloadImage = () => {
    if (compressedImage) {
      const link = document.createElement('a');
      link.href = compressedImage.url;
      link.download = `compressed_${selectedFile.name}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Compress Your Images
          </h2>
          <p className="text-lg text-gray-600">
            Upload an image and specify your target file size in KB
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
          {/* Upload Area */}
          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
              dragActive 
                ? 'border-blue-500 bg-blue-50' 
                : selectedFile 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-300 hover:border-gray-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {selectedFile ? (
              <div className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900">{selectedFile.name}</p>
                  <p className="text-sm text-gray-500">{(selectedFile.size / 1024).toFixed(1)} KB</p>
                </div>
                <button
                  onClick={() => {
                    setSelectedFile(null);
                    setCompressedImage(null);
                    setError('');
                  }}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Choose Different File
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900 mb-2">
                    Drop your image here or{' '}
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      browse
                    </button>
                  </p>
                  <p className="text-sm text-gray-500">Supports JPG, PNG, GIF, WebP</p>
                  <p className="text-xs text-blue-600 mt-1">
                    You can upload files up to {maxFileSize} MB 
                  </p>
                </div>
              </div>
            )}
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) => e.target.files[0] && handleFileSelect(e.target.files[0])}
              className="hidden"
            />
          </div>

          {/* Target Size Input */}
          {selectedFile && (
            <div className="mt-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Size (in KB)
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  value={targetSize}
                  onChange={(e) => {
                    const value = parseInt(e.target.value) || 0;
                    if (value >= 1 && value <= 10000) {
                      setTargetSize(value);
                    }
                  }}
                  min="1"
                  max="10000"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter target size in KB (1-10000)"
                />
                <button
                  onClick={compressImage}
                  disabled={isCompressing || !targetSize}
                  className="px-8 py-3 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
                  style={{ 
                    backgroundColor: currentTheme.colors.primary,
                    '--hover-bg': currentTheme.colors.secondary
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = currentTheme.colors.secondary}
                  onMouseLeave={(e) => e.target.style.backgroundColor = currentTheme.colors.primary}
                >
                  {isCompressing ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Compressing... {Math.round(compressionProgress)}%
                    </div>
                  ) : (
                    'Compress'
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Progress Bar */}
          {isCompressing && (
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Compressing image...</span>
                <span>{Math.round(compressionProgress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${compressionProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Compressed Image Preview */}
          {compressedImage && (
            <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Compressed Image</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={compressedImage.url}
                    alt="Compressed"
                    className="w-full h-64 object-contain rounded-lg border border-gray-200"
                  />
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Original Size:</span>
                      <span className="font-medium">{compressedImage.originalSize.toFixed(1)} KB</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Compressed Size:</span>
                      <span className="font-medium text-green-600">{compressedImage.size.toFixed(1)} KB</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Size Reduction:</span>
                      <span className="font-medium text-blue-600">
                        {((1 - compressedImage.size / compressedImage.originalSize) * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={downloadImage}
                    className="w-full py-3 text-white rounded-lg transition-all duration-200 font-medium"
                    style={{ 
                      backgroundColor: currentTheme.colors.success,
                      '--hover-bg': currentTheme.colors.success + 'DD'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = currentTheme.colors.success + 'DD'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = currentTheme.colors.success}
                  >
                    Download Compressed Image
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Helper function for social media icons
const getSocialMediaIcon = (iconType) => {
  const socialMediaIcons = {
    facebook: FaFacebook,
    twitter: FaTwitter,
    linkedin: FaLinkedin,
    instagram: FaInstagram,
    youtube: FaYoutube,
    github: FaGithub,
    tiktok: FaTiktok,
    discord: FaDiscord,
    telegram: FaTelegram,
    whatsapp: FaWhatsapp
  };
  
  return socialMediaIcons[iconType] || FaGlobe;
};

// Footer Component
const Footer = () => {
  const [branding, setBranding] = useState({
    siteTitle: 'Image Compress',
    logoUrl: ''
  });
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);
  const { currentTheme } = useTheme();

  // Load branding settings and social media links
  useEffect(() => {
    const loadBrandingSettings = () => {
      const savedBranding = localStorage.getItem('brandingSettings');
      if (savedBranding) {
        try {
          const parsed = JSON.parse(savedBranding);
          setBranding(prev => ({ ...prev, ...parsed }));
        } catch (error) {
          console.error('Error loading branding settings:', error);
        }
      }
    };

    const loadSocialMediaLinks = () => {
      const savedLinks = localStorage.getItem('socialMediaLinks');
      if (savedLinks) {
        try {
          setSocialMediaLinks(JSON.parse(savedLinks));
        } catch (error) {
          console.error('Error loading social media links:', error);
        }
      }
    };

    loadBrandingSettings();
    loadSocialMediaLinks();

    // Listen for updates from admin panel
    const handleBrandingUpdate = (event) => {
      setBranding(event.detail);
    };

    const handleSocialMediaUpdate = (event) => {
      setSocialMediaLinks(event.detail);
    };

    window.addEventListener('brandingUpdated', handleBrandingUpdate);
    window.addEventListener('socialMediaUpdated', handleSocialMediaUpdate);
    return () => {
      window.removeEventListener('brandingUpdated', handleBrandingUpdate);
      window.removeEventListener('socialMediaUpdated', handleSocialMediaUpdate);
    };
  }, []);

  return (
    <footer 
      className="text-white transition-all duration-300"
      style={{ backgroundColor: currentTheme.colors.primary }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              {branding.logoUrl ? (
                <img
                  src={branding.logoUrl}
                  alt="Logo"
                  className="w-8 h-8 object-contain"
                />
              ) : (
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: currentTheme.colors.accent }}
                >
                  <span className="text-white font-bold text-sm">IC</span>
                </div>
              )}
              <span className="text-xl font-bold">{branding.siteTitle}</span>
            </div>
            <p className="text-white mb-6 max-w-md">
              Professional image compression tool that helps you reduce file sizes while maintaining quality. 
              Fast, secure, and completely free to use.
            </p>
            <div className="flex space-x-4">
              {socialMediaLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors duration-200"
                  title={link.name}
                >
                  {(() => {
                    const IconComponent = getSocialMediaIcon(link.icon);
                    return <IconComponent className="w-6 h-6" />;
                  })()}
                </a>
              ))}
              {socialMediaLinks.length === 0 && (
                <p className="text-gray-300 text-sm">No social media links configured</p>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white hover:text-gray-200 transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-white hover:text-gray-200 transition-colors duration-200">About</Link></li>
              <li><Link to="/contact" className="text-white hover:text-gray-200 transition-colors duration-200">Contact</Link></li>
              <li><Link to="/privacy" className="text-white hover:text-gray-200 transition-colors duration-200">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-white hover:text-gray-200 transition-colors duration-200">Help Center</Link></li>
              <li><Link to="/faq" className="text-white hover:text-gray-200 transition-colors duration-200">FAQ</Link></li>
              <li><Link to="/report" className="text-white hover:text-gray-200 transition-colors duration-200">Report Issue</Link></li>
              <li><Link to="/terms" className="text-white hover:text-gray-200 transition-colors duration-200">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
          <p className="text-white">
            © 2025 ImageCompress. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  // Check for maintenance mode on component mount and listen for changes
  useEffect(() => {
    const checkMaintenanceMode = () => {
      const isMaintenanceMode = localStorage.getItem('maintenanceMode') === 'true';
      setMaintenanceMode(isMaintenanceMode);
    };

    checkMaintenanceMode();

    // Listen for maintenance mode changes from admin panel
    const handleMaintenanceModeChange = (event) => {
      setMaintenanceMode(event.detail.enabled);
    };

    window.addEventListener('maintenanceModeChanged', handleMaintenanceModeChange);
    return () => window.removeEventListener('maintenanceModeChanged', handleMaintenanceModeChange);
  }, []);

  // Show maintenance mode if enabled (except for admin panel)
  if (maintenanceMode && !window.location.pathname.startsWith('/admin')) {
    return <MaintenanceMode />;
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen transition-all duration-300" style={{ backgroundColor: 'var(--color-background, #F8FAFC)' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <ImageCompression />
                <CustomContent />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/report" element={<ReportIssue />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;