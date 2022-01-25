import React, { useEffect } from 'react';
import qs from 'qs';
import Loader from 'pages/Loader';
import { PropTypes as RouterPropTypes } from 'react-router';

function Callback({ history, location }) {
  const authUri = `BE와협의한 주소`;
  useEffect(() => {
    const getToken = async () => {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      try {
        const response = await fetch(`${authUri}?code=${code}`);
        const data = await response.json();
        console.log(data);
        history.push('/');
      } catch (error) {
        console.log(error.meesage);
        history.push('/login');
      }
    };

    getToken();
  }, [location, history, authUri]);
  return <Loader />;
}

Callback.propTypes = {
  history: RouterPropTypes.history.isRequired,
  location: RouterPropTypes.location.isRequired,
};

export default Callback;
