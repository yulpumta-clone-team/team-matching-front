import React, { useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

function MarkdownEditor() {
  const editorRef = useRef<Editor>(null);
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
        initialValue="여기에 작성해주세요."
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        ref={editorRef}
        onChange={onChangeEditorTextHandler}
      />
      <button onClick={handleSubmit}>버튼</button>
    </div>
  );
}

export default MarkdownEditor;
