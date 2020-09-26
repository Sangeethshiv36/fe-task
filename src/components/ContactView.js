import React from 'react';
import ProfileInfo from './ProfileInfo';

function ContactView({ userInfo }) {
  if (userInfo) {
    const name = `${userInfo.first_name} ${userInfo.last_name}`;
    return (
      <div className="contacts-view">
        <div className="contact-detail">
          <div class="user-contact-badge">
            {
              <ProfileInfo
                name={name}
                role={userInfo.role}
                company={userInfo.company}
                color={userInfo.profileColor}
                view="column"
              />
            }
          </div>
          <div className="user-contact-details">
            <dl>
              <dt>
                <strong>Full Name</strong>
              </dt>
              <dd>
                <strong>{name}</strong>
              </dd>
              <dt>
                <strong>Email</strong>
              </dt>
              <dd>
                <strong>{userInfo.email}</strong>
              </dd>
              <dt>
                <strong>Phone</strong>
              </dt>
              <dd>
                <strong>{userInfo.id}</strong>
              </dd>
              <dt>
                <strong>Company</strong>
              </dt>
              <dd>
                <strong>{userInfo.company}</strong>
              </dd>
              <dt>
                <strong>Country</strong>
              </dt>
              <dd>
                <strong>{userInfo.country}</strong>
              </dd>
            </dl>
          </div>
        </div>
        <div className="notices"></div>
      </div>
    );
  } else {
    return null;
  }
}

export default ContactView;
