import React, { useContext } from 'react';
import SearchInput from './SearchInput';
import ModalContainer from './ModalContainer';
import DispatchContext from '../DispatchContext';

function ContactsHeader() {
  const triggerText = `+ Add Contacts`;
  const appDispatch = useContext(DispatchContext);

  function onSubmit(event) {
    event.preventDefault(event);
    const target = event.target;
    const nameArr = target.name.value.split(' ');
    const ctObj = {
      id: Math.floor(Math.random() * 1000),
      first_name: nameArr[0],
      last_name: nameArr[1] ? nameArr[1] : '',
      email: target.email.value,
      phone: target.phone.value,
      role: target.role.value,
      company: target.company.value,
      country: target.country.value,
      profileColor: '#783927'
    };
    appDispatch({ type: 'CONTACT_ADDED', data: ctObj });
    document.querySelector('#add-form').reset();
  }

  return (
    <>
      <div className="top-content">
        <div className="ct-header">
          <h1>Contacts</h1>
          <sub>Welcome to FlatCRM Contact page</sub>
        </div>
        <div className="sort-contacts">
          <span>
            Sort by: <strong>Date Created </strong>
          </span>
        </div>
      </div>
      <div className="bottom-content">
        <SearchInput />
        <ModalContainer
          classType="button"
          mode="add"
          triggerText={triggerText}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
}

export default ContactsHeader;
