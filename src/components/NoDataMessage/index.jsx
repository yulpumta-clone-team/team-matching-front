import React from 'react';
import PropTypes from 'prop-types';

function NoDataMessage({ isLock }) {
  return (
    <div style={{ height: '100vh' }}>
      <span>보여줄 데이터가 없어요</span>
    </div>
  );
}

NoDataMessage.propTypes = {
  isLock: PropTypes.bool.isRequired,
};

export default NoDataMessage;
