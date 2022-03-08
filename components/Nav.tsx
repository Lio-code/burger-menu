import Link from 'next/link';
import { useState } from 'react';

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
      <div className="navbar_logo">Logo</div>
      <ul className="navbar_links">
        <li className="navbar_item slideInDown-1">
          <Link href="/">
            <a className="navbar_link">Home</a>
          </Link>
        </li>

        <li className="navbar_item slideInDown-2">
          <Link href="/about">
            <a className="navbar_link">About</a>
          </Link>
        </li>
        <li className="navbar_item slideInDown-3">
          <Link href="/contact">
            <a className="navbar_link">Contact</a>
          </Link>
        </li>
      </ul>

      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
}

export default Nav;
