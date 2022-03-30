import React from 'react';
import PropTypes from 'prop-types';

function ErrModal({ errorContent }) {
  return <div>{errorContent.message}</div>;
}

ErrModal.propTypes = {
  errorContent: PropTypes.shape({
    code: PropTypes.number,
    message: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default ErrModal;
