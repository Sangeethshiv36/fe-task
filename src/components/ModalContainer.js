import React, { useState, useRef } from 'react';
import Modal from './Modal';
import ModalTriggerButton from './ModalTriggerButton';

function ModalContainer({ onSubmit, triggerText, classType, mode, userInfo }) {
  const [isShown, setIsShown] = useState(false);
  const modal = useRef(null);
  const closeButton = useRef(null);
  const triggerButton = useRef(null);

  function showModal() {
    setIsShown(true);
    toggleScrollLock();
  }

  function closeModal() {
    setIsShown(false);
    triggerButton.current.focus();
    toggleScrollLock();
  }

  function onKeyDown(event) {
    if (event.keyCode === 27) {
      closeModal();
    }
  }

  function onClickOutside(event) {
    if (modal && modal.current.contains(event.target)) return;
    closeModal();
  }

  function toggleScrollLock() {
    document.querySelector('html').classList.toggle('scroll-lock');
  }

  return (
    <>
      <ModalTriggerButton
        showModal={showModal}
        buttonRef={triggerButton}
        triggerText={triggerText}
        classType={classType}
      />
      {isShown ? (
        <Modal
          onSubmit={onSubmit}
          modalRef={modal}
          buttonRef={closeButton}
          closeModal={closeModal}
          onKeyDown={onKeyDown}
          onClickOutside={onClickOutside}
          mode={mode}
          userInfo={userInfo}
        />
      ) : null}
    </>
  );
}

export default ModalContainer;
