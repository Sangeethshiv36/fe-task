import React from 'react';
import ContactsList from './ContactsList';
import ContactView from './ContactView';

function ContactsPage() {
  return (
    <div className="contacts-page">
      <ContactsList />
      <ContactView />
    </div>
  );
}

export default ContactsPage;
