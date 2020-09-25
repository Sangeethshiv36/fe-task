import React from 'react';

import StateContext from './StateContext';
import DispatchContext from './DispatchContext';
import { useImmerReducer } from 'use-immer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Container from './components/Container';
import ContactsPage from './components/ContactsPage';

function App() {
  const initialState = {
    usersList: [],
    activeUser: {
      userName: 'John Doe'
    },
    isDropdownOpen: false
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case 'SET_ACTIVE_USER':
        draft.activeUser = action.data;
        break;
      case 'TOGGLE_DROPDOWN':
        draft.isDropdownOpen = !draft.isDropdownOpen;
        break;
      case 'SET_USERS_LIST':
        draft.usersList = action.data;
        break;
      default:
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Container>
          <Header />
          <Sidebar />
          <ContactsPage />
        </Container>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
