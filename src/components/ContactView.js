import React from 'react';

function ContactView({ userInfo }) {
  if (userInfo) {
    return (
      <div className="contacts-view">
        <div></div>
      </div>
    );
  } else {
    return null;
  }
}

export default ContactView;
