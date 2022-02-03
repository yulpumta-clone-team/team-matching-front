import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Potal from 'components/Potal';
import { ModalWrapper, ModalContainer, CloseModalButton } from './style';

function Modal({ children, show, onCloseModal }) {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);
  const handleKeyEsc = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        onCloseModal();
      }
    },
    [onCloseModal],
  );
  if (!show) {
    return null;
  }
  return (
    <Potal>
      <ModalWrapper onClick={onCloseModal} onKeyDown={handleKeyEsc} tabIndex={0}>
        <ModalContainer onClick={stopPropagation}>
          <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
          {children}
        </ModalContainer>
      </ModalWrapper>
    </Potal>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Modal;
