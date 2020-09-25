import React from 'react';
import ContactsList from './ContactsList';
import ContactView from './ContactView';
import ContactsHeader from './ContactsHeader';

function ContactsPage() {
  return (
    <div className="contacts-page">
      <div className="contacts-header">
        <ContactsHeader />
      </div>
      <div className="contacts-content">
        <ContactsList />
        <ContactView />
      </div>
    </div>
  );
}

export default ContactsPage;
