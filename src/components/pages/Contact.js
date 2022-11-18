import React, { useState, useEffect } from 'react';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Contact() {
  useEffect(() => {
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    const popoverList = [...popoverTriggerList].map(
      (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
    );
  });

  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [email, setEmail] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      return setErrorMsg('Please input a name');
    }
    if (!email.match(/[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}/)) {
      return setErrorMsg('Please input a valid email');
    }
    if (!message) {
      return setErrorMsg('Please input the messages');
    }
    setMessage('');
    setEmail('');
    setUsername('');
    setConfirm('Successfully receive your message!');
    setErrorMsg('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-3 w-50">
        <label htmlFor="userName" className="form-label">
          Name
        </label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="form-control"
          id="userName"
          value={username}
          data-bs-toggle="popover"
          data-bs-trigger="hover focus"
          data-bs-content="This field is required!"
        />
      </div>
      <div className="m-3 w-50">
        <label htmlFor="InputEmail1" className="form-label">
          Email address
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          className="form-control"
          id="InputEmail1"
          data-bs-toggle="popover"
          data-bs-trigger="hover focus"
          data-bs-content="This field is required!"
        />
      </div>
      <div className="m-3">
        <label htmlFor="message" className="form-label">
          Message:
        </label>
        <div>
          <textarea
            id="message"
            style={{ width: '50%' }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            data-bs-toggle="popover"
            data-bs-trigger="hover focus"
            data-bs-content="This field is required!"
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary mx-3">
        Submit
      </button>
      {errorMsg ? (
        <p className="text-danger">{errorMsg}</p>
      ) : !confirm ? (
        <></>
      ) : (
        <p className="text-success">{confirm}</p>
      )}
    </form>
  );
}
