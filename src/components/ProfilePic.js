import React from 'react';

function ProfileLink({ image, initials }) {
  return (
    <div className="profile-pic">
      {image ? (
        <img src={image} alt="profile-pic"></img>
      ) : (
        <span className="initials">
          <strong>{initials}</strong>
        </span>
      )}
    </div>
  );
}

export default ProfileLink;
