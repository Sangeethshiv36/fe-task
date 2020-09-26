import React, { useEffect, useRef, useContext } from 'react';
import StateContext from '../StateContext';
import DispatchContext from '../DispatchContext';
import { useImmer } from 'use-immer';

function Chat({ toUser }) {
  const chatField = useRef(null);
  const chatLog = useRef(null);

  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const [state, setState] = useImmer({
    fieldValue: '',
    chatMessages: []
  });

  function handleFieldChange(e) {
    const { value } = e.target;
    setState((draft) => {
      draft.fieldValue = value;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const time = Date.now();
    setState((draft) => {
      console.log(toUser);
      draft.chatMessages.push({
        sentMessage: {
          to: toUser, //102
          from: appState.activeUser.id, //161
          message: draft.fieldValue,
          time: time
        },
        userName: appState.activeUser.userName,
        userId: appState.activeUser.id
      });
      draft.fieldValue = '';
    });
  }

  useEffect(() => {
    if (appState.isChatOpen) {
      chatField.current.focus();
    }
  }, [appDispatch, appState.isChatOpen]);

  return (
    <div
      id="chat-wrapper"
      className={`chat-wrapper  shadow border-top border-left border-right ${
        appState.isChatOpen ? 'chat-wrapper--is-visible' : ''
      }`}
    >
      <div className="chat-title-bar">
        Chat
        <button
          onClick={() => {
            appDispatch({ type: 'CLOSE_CHAT' });
          }}
          className="icon-button nav-button chat-close-icon"
        >
          <svg className="_modal-close-icon" viewBox="0 0 40 40">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </button>
      </div>
      <div id="chat" ref={chatLog} className="chat-log">
        {state.chatMessages.map((message, index) => {
          if (
            message.userId === appState.activeUser.id &&
            message.sentMessage.to === appState.toChatId
          ) {
            console.log(message.sentMessage.to, message.sentMessage.from);
            return (
              <div key={index} className="chat-self">
                <div className="chat-message">
                  <div className="chat-message-inner">
                    {message.sentMessage && message.sentMessage.message}
                  </div>
                </div>
              </div>
            );
          }
          if (
            message.sentMessage.to === appState.activeUser.id &&
            message.sentMessage.from === appState.toChatId
          ) {
            console.log(message.sentMessage.to, message.sentMessage.from);
            return (
              <div key={index} className="chat-other">
                <div className="chat-message">
                  <div className="chat-message-inner">
                    {message.sentMessage && message.sentMessage.message}
                  </div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <form
        onSubmit={handleSubmit}
        id="chatForm"
        className="chat-form border-top"
      >
        <input
          value={state.fieldValue}
          onChange={handleFieldChange}
          ref={chatField}
          type="text"
          className="chat-field"
          id="chatField"
          placeholder="Type a message…"
          autoComplete="off"
        />
      </form>
    </div>
  );
}

export default Chat;
