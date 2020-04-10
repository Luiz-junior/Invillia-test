import React from 'react';

import './styles.scss';

function Header() {
  return (
    <div className="container">
      <div className="section-header">
        <a href="/" className="title">
          <img src={'https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png'} alt="Logo" />
        </a>
      </div>
    </div>
  )
}

export default Header;
