import React from 'react';
import ProfileInfo from './ProfileInfo';

function ContactView({ userInfo }) {
  if (userInfo) {
    const name = `${userInfo.first_name} ${userInfo.last_name}`;
    return (
      <div className="contacts-view">
        <div className="contact-detail">
          {
            <ProfileInfo
              name={name}
              role={userInfo.role}
              company={userInfo.company}
              color={userInfo.profileColor}
              view="column"
            />
          }
          <div className="user-details"></div>
        </div>
        <div className="notices"></div>
      </div>
    );
  } else {
    return null;
  }
}

export default ContactView;
