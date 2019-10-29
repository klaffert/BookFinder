import React from 'react';
import booksImage from '../images/booksImage.jpg'

const Header = props => (
  <div className="image">
    <img
      src={booksImage}
      alt="books"
    />
    <h1>
      <span>Welcome to Book Finder</span>
    </h1>
  </div>
);

export default Header;
