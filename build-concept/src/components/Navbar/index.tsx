import React, { useState } from 'react';
import Link from 'next/link';
import AboutHoverList from '@/components/AboutHoverList';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [aboutItemHover, setAboutItemHover] = useState<boolean>(false);

  return (
    <nav className={styles.navbarContainer}>
      <ul className={styles.navbarItems}>
        <li className={styles.navbarItem}>
          <Link className={styles.navbarLink} href="/">
            home
          </Link>
        </li>
        <li
          className={`${styles.navbarItem} ${styles.navbarAbout}`}
          onMouseOver={() => setAboutItemHover(true)}
          onMouseOut={() => setAboutItemHover(false)}
        >
          <span className={styles.about}>about</span>
          {aboutItemHover && <AboutHoverList />}
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" href="/design-system">
            Design-System
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" href="/project2">
            Project2
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
