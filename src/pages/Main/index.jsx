import Modal from 'components/Modal';
import React, { useCallback, useState } from 'react';

function Main() {
  const [showModal, setShowModal] = useState(false);
  const onCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);
  const openModal = useCallback(() => {
    setShowModal((prev) => !prev);
  }, []);
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
