import React from 'react';

function ProfileInfo({ name, email, color }) {
  const initials = `${name.split(' ')[0][0]} ${name.split(' ')[1][0]}`;
  return (
    <>
      <div className="contact-info">
        <span className="initials" style={{ backgroundColor: `${color}` }}>
          <strong>{initials}</strong>
        </span>
        <div className="user-info">
          <h3>{name}</h3>
          <sub>{email}</sub>
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;
