import React from 'react';
import Link from 'next/link';

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">Logo</div>
      <ul className="navbar_links">
        <li className="navbar_item">
          <Link href="/">
            <a className="navbar_link">Home</a>
          </Link>
        </li>

        <li className="navbar_item">
          <Link href="/about">
            <a className="navbar_link">About</a>
          </Link>
        </li>
        <li className="navbar_item">
          <Link href="/contact">
            <a className="navbar_link">Contact</a>
          </Link>
        </li>
      </ul>

      <button className="navbar_burger">
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
}

export default Nav;
