import React from 'react';

function ProfileLink({ userName }) {
  return (
    <div className="profile-link">
      <span>{userName}</span>
    </div>
  );
}

export default ProfileLink;
