import React, { useState, useContext, useEffect } from 'react';
import Table from './Table';
import DispatchContext from '../DispatchContext';
import StateContext from '../StateContext';
import LoadingOverlay from './LoadingOverlay';
import ProfileInfo from './ProfileInfo';
import ModalContainer from './ModalContainer';
import { ReactComponent as EditIcon } from '../icons/edit.svg';
import { ReactComponent as ChatIcon } from '../icons/chat.svg';

function ContactsList({ setUserInfo }) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      try {
        const users = await fetch('db.json');
        const data = await users.json();
        appDispatch({ type: 'SET_USERS_LIST', data: data });
        setLoading(false);
      } catch (error) {
        console.log('An error occured', error);
        setLoading(false);
      }
    }
    getUsers();
  }, [appDispatch]);

  const userInfo = appState.usersList.filter(
    (user) =>
      appState.activeUser.userName !== `${user.first_name} ${user.last_name}`
  );

  const onSubmit = (event) => {
    event.preventDefault(event);
    const target = event.target;
    const nameArr = target.name.value.split(' ');
    const userId = target.id.value;
    const ctObj = {
      first_name: nameArr[0],
      last_name: nameArr[1] ? nameArr[1] : '',
      email: target.email.value,
      company: target.company.value,
      role: target.role.value,
      phone: Number(target.phone.value),
      country: target.country.value
    };
    const foundObj = appState.usersList.find(
      (user) => user.id === Number(userId)
    );

    const { id, profileColor, gender, ...compObj } = foundObj;
    const isValueChanged =
      compObj && JSON.stringify(compObj) !== JSON.stringify(ctObj);
    if (isValueChanged) {
      appDispatch({
        type: 'CONTACT_EDITED',
        data: {
          updatedContact: ctObj,
          id,
          profileColor,
          gender
        }
      });
    }
  };

  const headingColumns = ['Basic Info', 'Company'];
  const tableData = appState.usersList.map((userData) => {
    const name = `${userData.first_name} ${userData.last_name}`;
    if (appState.activeUser.userName !== name) {
      return {
        info: (
          <div className="user-info-modal-option">
            <ProfileInfo
              name={name}
              color={userData.profileColor}
              email={userData.email}
            />
            <div className="user-info-icons">
              <ModalContainer
                classType="icon"
                mode="edit"
                userInfo={userData}
                triggerText={<EditIcon />}
                onSubmit={onSubmit}
              />
              <button
                onClick={() =>
                  appDispatch({ type: 'TOGGLE_CHAT', data: userData.id })
                }
                className="icon-button nav-button contact-modal-btn"
              >
                <ChatIcon />
              </button>
            </div>
          </div>
        ),
        company: userData.company
      };
    } else {
      return null;
    }
  });

  const updatedData = tableData.filter((data) => data);

  if (loading) {
    return (
      <div>
        <LoadingOverlay />
      </div>
    );
  }

  return (
    <div className="contacts-list">
      <Table
        tableData={updatedData}
        userInfo={userInfo}
        headingColumns={headingColumns}
        setUserInfo={setUserInfo}
      />
    </div>
  );
}

export default ContactsList;
