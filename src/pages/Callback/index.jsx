/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import Loader from 'pages/Loader';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';

function Callback() {
  const { myData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['Authorization']);
  console.log(cookies);
  useEffect(() => {
    function getToken() {
      try {
        console.log(myData);
        // setCookie
        navigate('/');
      } catch (error) {
        console.log(error.meesage);
        navigate('/login');
      }
    }

    getToken();
  }, [cookies, navigate]);
  return <Loader />;
}

export default Callback;
