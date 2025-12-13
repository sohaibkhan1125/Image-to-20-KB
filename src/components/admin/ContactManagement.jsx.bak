import React, { useState, useEffect } from 'react';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'font-awesome/css/font-awesome.css';
import 'froala-editor/js/third_party/font_awesome.min.js';
import { getHomePageContent, saveHomePageContent } from '../../supabaseService';


const froalaConfig = {
  key: 'nQE2uG3B1F1nmnspC5qpH3B3C11A6D5F5F5G4A-8A-7A2cefE3B2F3C2G2ilva1EAJLQCVLUVBf1NXNRSSATEXA-62WVLGKF2G2H2G1I4B3B2B8D7F6==',
  licenseKey: 'nQE2uG3B1F1nmnspC5qpH3B3C11A6D5F5F5G4A-8A-7A2cefE3B2F3C2G2ilva1EAJLQCVLUVBf1NXNRSSATEXA-62WVLGKF2G2H2G1I4B3B2B8D7F6==',
  placeholderText: 'Type or paste your content here!',
  toolbarButtons: [
    ['undo', 'redo', '|', 'bold', 'italic', 'underline', 'strikeThrough'],
    ['paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent'],
    ['insertLink', 'insertTable', 'quote', 'html']
  ],
  charCounterCount: true
};

const ContactManagement = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [message, setMessage] = useState('');

  // Load saved content on component mount
  useEffect(() => {
    const loadContent = async () => {
      try {
        setInitialLoading(true);
        const savedContent = await getHomePageContent();
        if (savedContent) {
          setContent(savedContent);
        }
      } catch (error) {
        console.error('Error loading content:', error);
        setMessage('Error loading content. Please refresh the page.');
      } finally {
        setInitialLoading(false);
      }
    };

    loadContent();
  }, []);

  const handleSave = async () => {
    setLoading(true);
    setMessage('');

    try {
      await saveHomePageContent(content);
      setMessage('Content saved successfully! The home page will update immediately across all devices.');
    } catch (error) {
      console.error('Error saving content:', error);
      setMessage('Error saving content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setContent('');
    setMessage('');
  };

  if (initialLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Contact Management</h2>
        <div className="flex space-x-3">
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
          >
            Clear Content
          </button>
          <button
            onClick={handleSave}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {loading ? 'Saving...' : 'Save Content'}
          </button>
        </div>
      </div>

      {message && (
        <div className={`p-4 rounded-lg ${message.includes('Error') ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'
          }`}>
          {message}
        </div>
      )}

      {/* Rich Text Editor */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Home Page Content Editor</h3>
        <p className="text-sm text-gray-600 mb-6">
          Use the rich text editor below to create custom content that will appear on the home page below the image compression area.
        </p>

        <div className="rounded-lg border bg-white p-2">
          <FroalaEditorComponent
            tag="textarea"
            model={content}
            onModelChange={setContent}
            config={froalaConfig}
          />
        </div>
      </div>

      {/* Content Preview */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Content Preview</h3>
        <p className="text-sm text-gray-600 mb-4">
          This is how your content will appear on the home page:
        </p>
        <div
          className="prose max-w-none p-4 bg-gray-50 rounded-lg border"
          dangerouslySetInnerHTML={{ __html: content || '<p class="text-gray-500 italic">No content added yet. Use the editor above to create your content.</p>' }}
        />
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="text-sm font-medium text-blue-900 mb-2">Instructions</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Use the rich text editor to create formatted content for your home page</li>
          <li>• You can add headings, paragraphs, lists, links, images, and more</li>
          <li>• The content will appear below the image compression area on the home page</li>
          <li>• Changes are saved to the cloud and appear across all devices and browsers</li>
          <li>• Use the preview section to see how your content will look</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactManagement;
