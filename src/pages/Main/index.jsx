import React from 'react';
import Modal from 'components/Modal';
import useModal from 'hooks/useModal';

function Main() {
  const [showModal, onCloseModal, openModal] = useModal();
  return (
    <div>
      <h1>Main</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal show={showModal} onCloseModal={onCloseModal}>
        <div>
          <h1>this is modal</h1>
          <p>modal content</p>
        </div>
      </Modal>
    </div>
  );
}

export default Main;
