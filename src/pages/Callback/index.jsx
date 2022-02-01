/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loader from 'pages/Loader';
import { useCookies } from 'react-cookie';

function Callback({ history, location }) {
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
        history.push('/');
      } catch (error) {
        console.log(error.meesage);
        history.push('/login');
      }
    }

    getToken();
  }, [cookies, history]);
  return <Loader />;
}

Callback.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default Callback;
