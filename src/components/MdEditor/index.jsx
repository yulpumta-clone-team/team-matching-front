import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor, Viewer } from '@toast-ui/react-editor';

function MarkdownEditor({ mdValue }) {
  console.log(mdValue);
  const editorRef = useRef(null);
  const onChangeEditorTextHandler = () => {
    // console.log(editorRef.current?.getInstance().getHTML());
  };
  const handleSubmit = () => {
    const submitContent = editorRef.current?.getInstance().getMarkdown();
    // setInitialValue(submitContent);
    console.log(typeof submitContent, submitContent);
    const removeone = submitContent.replace(/\n/g, '\\n');
    console.log(removeone);
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
      <Viewer initialValue={mdValue} />
    </div>
  );
}

MarkdownEditor.propTypes = {
  mdValue: PropTypes.string.isRequired,
};

export default MarkdownEditor;
