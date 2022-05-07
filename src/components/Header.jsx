import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  return (
    <div id="main">
      <div className="header-heading">
        <h3>It's Great Time For A Good Taste Of Burger</h3>
        <h1>
          <span>BURGER</span> FOR
          <br />
          WEEK
        </h1>
        <p className="details">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <div className="header-btns">
          {/* <a href="products" className="header-btn">
            Order
          </a> */}
          <Link
            to="products"
            className="header-btn"
            smooth={true}
            duration={2000}
          >
            Order
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
