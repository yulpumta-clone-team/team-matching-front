import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

function MarkdownEditor({ mdValue }) {
  const editorRef = useRef(null);
  const onChangeEditorTextHandler = () => {
    console.log(editorRef.current?.getInstance().getMarkdown());
  };
  const handleSubmit = () => {
    const submitContent = editorRef.current?.getInstance().getHTML();
    // setInitialValue(submitContent);
    console.log(typeof submitContent, submitContent);
  };
  return (
    <div>
      <Editor
        initialValue={mdValue}
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut
        ref={editorRef}
        onChange={onChangeEditorTextHandler}
      />
      <button onClick={handleSubmit}>버튼</button>
    </div>
  );
}

MarkdownEditor.propTypes = {
  mdValue: PropTypes.string.isRequired,
};

export default MarkdownEditor;
