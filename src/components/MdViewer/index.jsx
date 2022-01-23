import React, { useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Viewer } from "@toast-ui/react-editor";

const MarkdwonViewer = () => {
  const [initialValue, setInitialValue] = useState(
    "<p>여기에 작성해주세요.</p><h2>아아</h2><h1>아</h1><p><strong>ㅇ</strong></p>",
  );
  return <Viewer initialValue={initialValue} />;
};

export default MarkdwonViewer;
