import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useScrollLock from 'hooks/useScrollLock';

function NoDataMessage({ isLock }) {
  const [handleLock] = useScrollLock();
  useEffect(() => {
    handleLock(isLock);
  }, []);
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
