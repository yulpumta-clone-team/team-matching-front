/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loader from 'pages/Loader';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function Callback() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['token']);
  useEffect(() => {
    async function getToken() {
      try {
        const response = await axios.get('/callback', {
          withCredentials: true,
        });
        console.log(response);
        console.log(cookies);
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

Callback.propTypes = {};

export default Callback;
