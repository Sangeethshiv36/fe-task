import React from 'react';

function ModalTriggerButton({ triggerText, buttonRef, showModal, classType }) {
  return (
    <button
      className={
        classType === 'button'
          ? 'add-ct-btn'
          : 'icon-button nav-button contact-modal-btn'
      }
      ref={buttonRef}
      onClick={showModal}
    >
      <strong>{triggerText}</strong>
    </button>
  );
}

export default ModalTriggerButton;
