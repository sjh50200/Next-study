import Link from 'next/link';
import React from 'react';
import styles from './AboutHoverList.module.css';

const AboutHoverList = () => {
  return (
    <div className={styles.aboutListContainer}>
      <ul className={styles.aboutLists}>
        <li className={styles.aboutList}>
          <Link href="/about/company">회사 소개</Link>
        </li>
        <li className={styles.aboutList}>
          <Link href="/about/team">팀 소개</Link>
        </li>
        <li className={styles.aboutList}>
          <Link href="/about/me">개인 소개</Link>
        </li>
      </ul>
    </div>
  );
};

export default AboutHoverList;
