import React, { Suspense } from 'react';

import StateContext from './StateContext';
import DispatchContext from './DispatchContext';
import { useImmerReducer } from 'use-immer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Container from './components/Container';
import ContactsPage from './components/ContactsPage';

const Chat = React.lazy(() => import('./components/Chat'));

function App() {
  const initialState = {
    usersList: [],
    activeUser: {
      userName: 'John Doe',
      id: 161
    },
    isDropdownOpen: false,
    isChatOpen: false,
    toChatId: ''
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case 'SET_ACTIVE_USER':
        draft.activeUser.userName = action.data.userName;
        draft.activeUser.id = action.data.id;
        break;
      case 'TOGGLE_DROPDOWN':
        draft.isDropdownOpen = !draft.isDropdownOpen;
        break;
      case 'SET_USERS_LIST':
        draft.usersList = action.data;
        break;
      case 'CONTACT_ADDED':
        draft.usersList.push(action.data);
        break;
      case 'CONTACT_EDITED':
        if (action.data) {
          const userIndex = draft.usersList.findIndex(
            (user) => user.id === action.data.id
          );
          draft.usersList[userIndex] = {
            id: action.data.id,
            gender: action.data.gender,
            profileColor: action.data.profileColor,
            ...action.data.updatedContact
          };
        }
        break;
      case 'TOGGLE_CHAT':
        draft.isChatOpen = !draft.isChatOpen;
        draft.toChatId = action.data;
        break;
      case 'CLOSE_CHAT':
        draft.isChatOpen = !draft.isChatOpen;
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
          <Suspense fallback="">
            <Chat toUser={state.toChatId && state.toChatId} />
          </Suspense>
        </Container>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
