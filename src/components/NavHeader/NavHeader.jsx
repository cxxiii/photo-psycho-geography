import React from 'react';
import styles from './NavHeader.module.css';
import Link from 'next/link';

const NavHeader = ({ subHeading, subColor }) => (
  <div className={styles.NavHeader_container}>
    <header className={styles.NavHeader_header}>
      <h1>
        <span className={styles.NavHeader_header__name}>
          <span className={styles.NavHeader_header__name___deco}>K</span>atja
          Schmelzer
        </span>
        <span
          className={styles.NavHeader_header__subHeading}
          style={{ color: subColor }}
        >
          {subHeading}
        </span>
      </h1>
    </header>
    <nav className={styles.NavHeader_nav}>
      <ul className={styles.NavHeader_nav__menu}>
        <li className={styles.NavHeader_nav__menu___item}>
          <Link href="/" className="home">
            Home
          </Link>
        </li>
        <li className={styles.NavHeader_nav__menu___item}>
          <Link href="/about" id="about">
            About
          </Link>
        </li>
        <li className={styles.NavHeader_nav__menu___item}>|</li>
        <li className={styles.NavHeader_nav__menu___item}>
          <Link href="/galleries/botanical" className="botanical">
            Botanical
          </Link>
        </li>
        <li className={styles.NavHeader_nav__menu___item}>
          <Link href="/galleries/finland" className="finland">
            Finland
          </Link>
        </li>
        <li className={styles.NavHeader_nav__menu___item}>
          <Link href="/galleries/forest" className="forest">
            Forest
          </Link>
        </li>
        <li className={styles.NavHeader_nav__menu___item}>
          <Link href="/galleries/ireland" className="ireland">
            Ireland
          </Link>
        </li>
        <li className={styles.NavHeader_nav__menu___item}>
          <Link href="/galleries/psycho" className="psycho">
            Psycho
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default NavHeader;
