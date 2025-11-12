import React from 'react';

// Require Froala Editor CSS files
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Include font-awesome css for icons (package installed)
import 'font-awesome/css/font-awesome.css';
// Include Froala's Font Awesome bridge
import 'froala-editor/js/third_party/font_awesome.min.js';

// Optionally include all plugins in one go
// import 'froala-editor/js/plugins.pkgd.min.js';

// Core editor package (required when using react-froala-wysiwyg)
import 'froala-editor/js/froala_editor.pkgd.min.js';

import FroalaEditorComponent from 'react-froala-wysiwyg';

const Editor = ({ value, onChange }) => {
  const handleModelChange = (content) => {
    if (typeof onChange === 'function') {
      onChange(content);
    }
  };

  const config = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false,
    // immediateReactModelUpdate: true, // enable if you want per-keystroke updates
  };

  return (
    <FroalaEditorComponent
      tag='textarea'
      model={value || ''}
      onModelChange={handleModelChange}
      config={config}
    />
  );
};

export default Editor;
