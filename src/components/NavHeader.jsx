import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const Header = styled.div`
  line-height: 0;
  margin-top: 40px;

  & h1 {
    letter-spacing: 4px;
    font-weight: 100;
    position: sticky;
  }
  & .deco {
    font-family: 'Cinzel Decorative';
  }

  & #name {
    position: absolute;
    right: 290px;
    left: 0;
    letter-spacing: 0;
  }

  & #subheading {
    position: absolute;
    font-size: 20px;
    font-weight: lighter;
    letter-spacing: 0.04em;
    transition: color ease 0.2s;
  }
`;

const Nav = styled.nav`
  position: absolute;
  text-decoration: none;
  top: 50px;
  left: 0;
  bottom: 0;
  right: 0;
  line-height: 0;

  a,
  li {
    color: #444444;
  }

  & a:hover {
    background: none;
    color: var(--default);
  }

  & ul li {
    font-size: 13px;
    font-weight: 700;
    display: inline;
    margin-left: 1em;
  }

  & ul li a {
    text-decoration: none;
  }

  & ul li a:hover {
    cursor: pointer;
    transition: color 0.2s ease;
  }
`;

const NavHeader = ({ subHeading, subColor }) => (
  <>
    <Header>
      <h1>
        <span id="name">
          <span className="deco">K</span>atja Schmelzer
        </span>
        <span id="subheading" style={{ color: subColor }}>
          {subHeading}
        </span>
      </h1>
    </Header>
    <Nav>
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
    </Nav>{' '}
  </>
);

export default NavHeader;
