import React, { useState, useContext, useEffect } from 'react';
import Table from './Table';
import DispatchContext from '../DispatchContext';
import StateContext from '../StateContext';
import LoadingOverlay from './LoadingOverlay';
import ProfileInfo from './ProfileInfo';

function ContactsList() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  const [loading, setLoading] = useState(true);

  const colors = [
    '#264653',
    '#e76f51',
    '#f4a261',
    '#e9c46a',
    '#2a9d8f',
    '#e5989b',
    '#06d6a0',
    '#ffd166',
    '#00b4d8',
    '#3d405b',
    '#f48c06',
    '#dc2f02',
    '#6930c3',
    '#55a630'
  ];

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
            color={colors[Math.floor(Math.random() * colors.length)]}
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

  if (loading) {
    return (
      <div>
        <LoadingOverlay />
      </div>
    );
  }

  return (
    <div className="contacts-list">
      <Table tableData={updatedData} headingColumns={headingColumns} />
    </div>
  );
}

export default ContactsList;
