import Link from 'next/link';
import React from 'react';

const navbar = () => {
  return (
    <div className="navbar-container">
      <ul className="navbar-items">
        <li className="navbar-item">
          <Link className="navbar-link" href="/">
            home
          </Link>
        </li>
        <li className="navbar-item navbar-about">about</li>
      </ul>
    </div>
  );
};

export default navbar;
