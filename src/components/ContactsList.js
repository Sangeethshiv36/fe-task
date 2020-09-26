import React, { useState, useContext, useEffect } from 'react';
import Table from './Table';
import DispatchContext from '../DispatchContext';
import StateContext from '../StateContext';
import LoadingOverlay from './LoadingOverlay';
import ProfileInfo from './ProfileInfo';

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

  const headingColumns = ['Basic Info', 'Company'];
  const tableData = appState.usersList.map((userData) => {
    const name = `${userData.first_name} ${userData.last_name}`;
    if (appState.activeUser.userName !== name) {
      return {
        info: (
          <ProfileInfo
            name={name}
            color={userData.profileColor}
            email={userData.email}
          />
        ),
        company: userData.company
      };
    } else {
      return null;
    }
  });

  const updatedData = tableData.filter((data) => data);
  const userInfo = appState.usersList.filter(
    (user) =>
      appState.activeUser.userName !== `${user.first_name} ${user.last_name}`
  );

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
