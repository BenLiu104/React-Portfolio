import React from 'react';

export default function Navigation({ currentPage, setCurrent }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item" onClick={() => setCurrent('About')}>
        <a
          href="#About"
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About me
        </a>
      </li>
      <li className="nav-item" onClick={() => setCurrent('Portfolio')}>
        <a
          href="#Portfolio"
          className={
            currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item" onClick={() => setCurrent('Resume')}>
        <a
          href="#Resume"
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}
