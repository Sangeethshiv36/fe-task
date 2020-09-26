import React from 'react';

function ProfileInfo({ name, email, color, role, company, view }) {
  function getInitials(name) {
    const nameArr = name.split(' ').filter(Boolean); //return only truthy values
    if (nameArr.length > 1) {
      return `${nameArr[0][0]} ${nameArr[1][0]}`;
    } else {
      return `${nameArr[0][0]}`;
    }
  }

  const initials = getInitials(name).toUpperCase();
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
