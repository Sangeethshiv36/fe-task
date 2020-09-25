import React, { useState } from 'react';
import ContactsList from './ContactsList';
import ContactView from './ContactView';
import ContactsHeader from './ContactsHeader';

function ContactsPage() {
  const [userInfo, setUserInfo] = useState([]);
  return (
    <div className="contacts-page">
      <div className="contacts-header">
        <ContactsHeader />
      </div>
      <div className="contacts-content">
        <ContactsList setUserInfo={setUserInfo} />
        <ContactView userInfo={userInfo && userInfo} />
      </div>
    </div>
  );
}

export default ContactsPage;
