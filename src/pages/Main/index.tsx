import React, { useEffect } from 'react';
import axios from 'axios';

function Main() {
  function fetchData() {
    axios.get('/api/test1').then((response) => console.log(response));
  }
  useEffect(() => {
    fetchData();
  }, []);
  return <div>Main</div>;
}

export default Main;
