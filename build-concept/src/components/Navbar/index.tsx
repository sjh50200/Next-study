import React, { useState } from 'react';
import Link from 'next/link';
import AboutHoverList from '@/components/AboutHoverList';

const navbar = () => {
  const [aboutItemHover, setAboutItemHover] = useState<boolean>(false);

  return (
    <nav className="navbar-container">
      <ul className="navbar-items">
        <li className="navbar-item">
          <Link className="navbar-link" href="/">
            home
          </Link>
        </li>
        <li
          className="navbar-item navbar-about"
          onMouseOver={() => setAboutItemHover(true)}
          onMouseOut={() => setAboutItemHover(false)}
        >
          about
          {aboutItemHover && <AboutHoverList />}
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
