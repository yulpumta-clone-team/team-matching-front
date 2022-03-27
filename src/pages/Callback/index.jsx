import React, { useEffect } from 'react';
import Loader from 'pages/Loader';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';

function Callback() {
  const { myData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    function getToken() {
      try {
        // setCookie
        navigate('/');
      } catch (error) {
        console.log(error.meesage);
        navigate('/login');
      }
    }

    getToken();
  }, [navigate]);
  return <Loader />;
}

export default Callback;
