import React from 'react';
import WindowModal from 'components/WindowModal';
import useModal from 'hooks/useModal';

function Main() {
  const [showModal, onCloseModal, openModal] = useModal();
  return (
    <div>
      <h1>Main</h1>
      <button onClick={openModal}>Open Modal</button>
      <WindowModal show={showModal} onCloseModal={onCloseModal}>
        <div>
          <h1>this is modal</h1>
          <p>modal content</p>
        </div>
      </WindowModal>
    </div>
  );
}

export default Main;
