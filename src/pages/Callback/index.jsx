/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import qs from 'qs';
import Loader from 'pages/Loader';
// import { PropTypes as RouterPropTypes } from 'react-router';

function Callback({ history, location }) {
  const authUri = `${process.env.REACT_APP_SERVER_API}login/oauth2/code`;
  useEffect(() => {
    async function getToken() {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });
      console.log(authUri);
      try {
        const { token } = await axios.post(authUri, {
          code,
        });
        console.log(token);
        history.push('/');
      } catch (error) {
        console.log(error.meesage);
        history.push('/login');
      }
    }

    getToken();
  }, [location, history, authUri]);
  return <Loader />;
}

Callback.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default Callback;
