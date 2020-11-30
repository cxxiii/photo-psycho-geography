import React from 'react';
import Link from 'next/link';

const NavHeader = ({ subHeading, subColor }) => (
  <>
    <header>
      <h1>
        <span id="name">
          <span className="deco">K</span>atja Schmelzer
        </span>
        <span id="subheading" style={{ color: subColor }}>
          {subHeading}
        </span>
      </h1>
    </header>
    <nav>
      <ul>
        <li>
          <Link href="/" className="home one">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" id="about" className="one">
            About
          </Link>
        </li>
        <li className="two">|</li>
        <li>
          <Link href="/galleries/botanical" className="botanical three">
            Botanical
          </Link>
        </li>
        <li>
          <Link href="/galleries/finland" className="finland three">
            Finland
          </Link>
        </li>
        <li>
          <Link href="/galleries/forest" className="forest three">
            Forest
          </Link>
        </li>
        <li>
          <Link href="/galleries/ireland" className="ireland three">
            Ireland
          </Link>
        </li>
        <li>
          <Link href="/galleries/psycho" className="psycho three">
            Psycho
          </Link>
        </li>
      </ul>
    </nav>{' '}
  </>
);

export default NavHeader;
