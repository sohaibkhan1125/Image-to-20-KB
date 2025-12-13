import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { getHomePageContent, saveHomePageContent } from '../../supabaseService';
import './ContentManagement.css';

const ContentManagement = () => {
    const editorRef = useRef(null);
    const quillRef = useRef(null);
    const wrapperRef = useRef(null);
    const fileInputRef = useRef(null);
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const [lastSaved, setLastSaved] = useState('Unsaved');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showCodeModal, setShowCodeModal] = useState(false);
    const [codeOutput, setCodeOutput] = useState('');
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('success');
    const [showToast, setShowToast] = useState(false);

    // Load initial theme
    useEffect(() => {
        const theme = localStorage.getItem('editor_theme_preference');
        if (theme === 'dark') {
            setIsDarkMode(true);
        }
    }, []);

    // Initialize Quill
    useEffect(() => {
        if (!editorRef.current) return;

        // Prevent double init
        if (quillRef.current) return;

        // Custom Toolbar Configuration
        const toolbarOptions = [
            // Header & Font
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],

            // Formatting
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],

            // Block Formatting
            [{ 'align': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent

            // Elements
            ['blockquote', 'code-block'],
            ['link', 'image'], // video removed as per requirement for text/image focus

            // Utility
            ['clean'] // remove formatting
        ];

        quillRef.current = new Quill(editorRef.current, {
            theme: 'snow',
            modules: {
                toolbar: {
                    container: toolbarOptions,
                    handlers: {
                        image: imageHandler // Custom image handler
                    }
                },
                history: { // Undo/Redo
                    delay: 1000,
                    maxStack: 50,
                    userOnly: true
                }
            },
            placeholder: 'Start writing your document here...'
        });

        // Text Change Listener for Stats
        quillRef.current.on('text-change', () => {
            updateStats();
        });

        // Load Content
        loadContent();

        // Auto Save Loop
        const autoSaveInterval = setInterval(() => {
            handleAutoSave();
        }, 30000); // 30 seconds

        return () => {
            clearInterval(autoSaveInterval);
            // Cleanup logic if needed, but Quill instance persist usually fine in this scope
        };
    }, []);

    const imageHandler = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && /^image\//.test(file.type)) {
            saveImage(file);
        } else if (file) {
            triggerToast('Please select a valid image file', 'error');
        }
    };

    const saveImage = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const range = quillRef.current.getSelection(true);
            quillRef.current.insertEmbed(range.index, 'image', reader.result);
            quillRef.current.setSelection(range.index + 1);
            triggerToast('Image inserted successfully');
        };
    };

    const updateStats = () => {
        const text = quillRef.current.getText();
        const words = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
        const chars = text.length > 1 ? text.length - 1 : 0;
        setWordCount(words);
        setCharCount(chars);
    };

    const loadContent = async () => {
        try {
            // Replace localStorage with Supabase
            // const saved = localStorage.getItem('quill_editor_content');
            const saved = await getHomePageContent();
            if (saved) {
                // Check if it's JSON (Quill Delta) or HTML string
                // The previous implementation utilized HTML string format for Froala
                // Quill works best with Delta but handles HTML too.
                // Assuming saved content is HTML string from getHomePageContent
                // Use clipboard.dangerouslyPasteHTML for HTML or root.innerHTML
                if (quillRef.current) {
                    quillRef.current.clipboard.dangerouslyPasteHTML(saved);
                    updateStats();
                }
            }
        } catch (error) {
            console.error("Error loading content:", error);
            triggerToast("Error loading content from server", "error");
        }
    };

    const saveContent = async (isAuto = false) => {
        if (!quillRef.current) return;

        try {
            const content = quillRef.current.root.innerHTML; // Save as HTML to be compatible with website display
            // localStorage.setItem('quill_editor_content', content);
            await saveHomePageContent(content);

            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            if (isAuto) {
                setLastSaved(`Autosaved at ${timeString}`);
            } else {
                setLastSaved(`Saved at ${timeString}`);
                triggerToast('Document saved successfully');
            }
        } catch (error) {
            console.error("Error saving content:", error);
            if (!isAuto) triggerToast("Error saving content to server", "error");
        }
    };

    const handleAutoSave = () => {
        saveContent(true);
    };

    // Text to Code Logic
    const convertToCode = () => {
        if (!quillRef.current) return;
        const html = quillRef.current.root.innerHTML;
        const formattedHtml = formatHTML(html);
        setCodeOutput(formattedHtml);
        setShowCodeModal(true);
    };

    useEffect(() => {
        if (showCodeModal && codeOutput) {
            // Trigger Prism highlight after render
            requestAnimationFrame(() => {
                Prism.highlightAll();
            });
        }
    }, [showCodeModal, codeOutput]);


    const formatHTML = (html) => {
        let formatted = '';
        let indent = '';
        const tab = '    ';
        html.split(/>\s*</).forEach(function (element) {
            if (element.match(/^\/\w/)) {
                indent = indent.substring(tab.length);
            }
            formatted += indent + '<' + element + '>\r\n';
            if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith("input") && !element.startsWith("img") && !element.startsWith("br")) {
                indent += tab;
            }
        });
        return formatted.substring(1, formatted.length - 3);
    };

    const triggerToast = (msg, type = 'success') => {
        setToastMessage(msg);
        setToastType(type);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    const clearEditor = () => {
        if (window.confirm('Are you sure you want to clear the editor? This cannot be undone.')) {
            quillRef.current.setContents([]);
            saveContent();
            triggerToast('Editor cleared');
        }
    };

    const toggleFullscreen = () => {
        const container = wrapperRef.current.querySelector('.editor-container');
        if (container) {
            container.classList.toggle('fullscreen');
            document.body.style.overflow = container.classList.contains('fullscreen') ? 'hidden' : '';
        }
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('editor_theme_preference', !isDarkMode ? 'dark' : 'light');
    };

    const copyCode = () => {
        navigator.clipboard.writeText(codeOutput).then(() => {
            triggerToast('HTML code copied to clipboard');
        });
    };

    const downloadHtml = () => {
        const blob = new Blob([codeOutput], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'document.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div ref={wrapperRef} className={`content-management-wrapper ${isDarkMode ? 'dark-mode' : ''}`}>
            {/* Header */}
            <div className="editor-header">
                <div className="logo">
                    <i className="fas fa-pen-nib"></i>
                    Professional Editor
                </div>
                <div className="header-controls">
                    <button className="btn btn-primary" onClick={convertToCode}>
                        <i className="fas fa-code"></i> Convert Text to Code
                    </button>
                    <div style={{ width: '1px', height: '24px', background: 'var(--border-color)', margin: '0 5px' }}></div>
                    <button className="btn btn-icon" onClick={toggleTheme} title="Toggle Dark Mode">
                        <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button>
                    <button className="btn btn-icon" onClick={toggleFullscreen} title="Fullscreen">
                        <i className="fas fa-expand"></i>
                    </button>
                    <button className="btn btn-icon" onClick={clearEditor} title="Clear All">
                        <i className="fas fa-trash-alt"></i>
                    </button>
                    <button className="btn" onClick={() => saveContent(false)} title="Save Content">
                        <i className="fas fa-save"></i> Save
                    </button>
                </div>
            </div>

            {/* Main Editor */}
            <div className="editor-container">
                <div ref={editorRef} id="editor"></div>
            </div>

            {/* Status Bar */}
            <div className="stats-bar">
                <div className="stats-group">
                    <span>{wordCount} words</span>
                    <span>{charCount} characters</span>
                </div>
                <div className="stats-group">
                    <span>{lastSaved}</span>
                </div>
            </div>

            {/* View Code Modal */}
            {showCodeModal && (
                <div className="modal active" id="codeModal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3><i className="fas fa-file-code"></i> Generated HTML Code</h3>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button className="btn" onClick={copyCode}>
                                    <i className="fas fa-copy"></i> Copy HTML
                                </button>
                                <button className="btn" onClick={downloadHtml}>
                                    <i className="fas fa-download"></i> Download .html
                                </button>
                                <button className="btn btn-icon" onClick={() => setShowCodeModal(false)}>
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div className="modal-body">
                            <pre className="code-output" style={{ margin: 0, padding: '20px' }}>
                                <code className="language-html">{codeOutput}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast Notification */}
            {showToast && (
                <div className={`toast show`} style={{ borderLeftColor: toastType === 'error' ? 'var(--error-color)' : 'var(--primary-color)' }}>
                    <i className={`fas ${toastType === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'}`}></i>
                    <span>{toastMessage}</span>
                </div>
            )}

            <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
        </div>
    );
};

export default ContentManagement;
