import React, { useEffect } from 'react';
import axios from 'axios';

function Main() {
  function fetchLogout() {
    axios.get('/api/logout').then((response) => console.log(response));
  }
  return <div>Main
    <button onClick={fetchLogout}>로그아웃</button>
  </div>;
}

export default Main;
