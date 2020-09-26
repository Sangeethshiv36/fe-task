import React from 'react';

function ProfileInfo({ name, email, color, role, company, view }) {
  const initials = `${name.split(' ')[0][0]} ${name.split(' ')[1][0]}`;
  return (
    <>
      <div
        className={view === 'column' ? 'contact-info view-col' : 'contact-info'}
      >
        <span className="initials" style={{ backgroundColor: `${color}` }}>
          <strong>{initials}</strong>
        </span>
        <div className="user-info">
          <h3>{name}</h3>
          <sub>{email}</sub>
          {role && company && (
            <div className="work-info">
              <sub>{role}</sub>
              <sub>@{company}</sub>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;
