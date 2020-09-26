import React from 'react';

function ContactForm({ onSubmit, mode, userInfo }) {
  return (
    <div className="contacts-form">
      <form onSubmit={onSubmit} id={mode === 'add' ? 'add-form' : 'edit-form'}>
        <input
          hidden
          name="id"
          defaultValue={userInfo && userInfo.id}
          id="id"
        />
        <div className="user-contact-details user-form">
          <dl>
            <dt>
              <label htmlFor="name">
                <strong>Name </strong>
              </label>
            </dt>
            <dd>
              <input
                required
                name="name"
                defaultValue={
                  userInfo && `${userInfo.first_name} ${userInfo.last_name}`
                }
                id="fullName"
                placeholder="Enter full name.."
              />
            </dd>
            <dt>
              <label htmlFor="email">
                <strong>Email </strong>
              </label>
            </dt>
            <dd>
              <input
                required
                name="email"
                type="email"
                defaultValue={userInfo && userInfo.email}
                id="email"
                placeholder="name@example.com"
              />
            </dd>
            <dt>
              <label htmlFor="phone">
                <strong>Phone </strong>
              </label>
            </dt>
            <dd>
              <input
                required
                name="phone"
                type="text"
                defaultValue={userInfo && userInfo.phone}
                id="phone"
                placeholder="9876543210"
              />
            </dd>
            <dt>
              <label htmlFor="company">
                <strong>Company </strong>
              </label>
            </dt>
            <dd>
              <input
                required
                name="company"
                type="text"
                defaultValue={userInfo && userInfo.company}
                id="company"
                placeholder="Enter company name..."
              />
            </dd>
            <dt>
              <label htmlFor="role">
                <strong>Role </strong>
              </label>
            </dt>
            <dd>
              <input
                required
                name="role"
                type="text"
                defaultValue={userInfo && userInfo.role}
                id="role"
                placeholder="Enter Role..."
              />
            </dd>
            <dt>
              <label htmlFor="country">
                <strong>Country </strong>
              </label>
            </dt>
            <dd>
              <input
                required
                name="country"
                type="text"
                defaultValue={userInfo && userInfo.country}
                id="country"
                placeholder="Enter country name..."
              />
            </dd>
          </dl>
        </div>
        <div className="submit-btn">
          <button className="add-ct-btn btn-center" type="submit">
            <strong>Submit</strong>
          </button>
          {/* <button
            onClick={() => closeModal()}
            className="add-ct-btn btn-center"
          >
            <strong>Cancel</strong>
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
