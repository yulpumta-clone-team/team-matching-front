import React, { useEffect } from 'react';
import axios from 'axios';
import MarkdownEditor from '@components/mdEditor';
import MarkdwonViewer from '@components/mdViewer';

function Main() {
  function fetchLogout() {
    axios.get('/api/logout').then((response) => console.log(response));
  }
  function fetchTest() {
    axios.get('/api/test').then((response) => console.log(response));
  }
  useEffect(() => {
    fetchTest();
  }, []);
  return (
    <div>
      <button onClick={fetchLogout}>로그아웃</button>
      <MarkdownEditor />
      <MarkdwonViewer />
    </div>
  );
}

export default Main;
