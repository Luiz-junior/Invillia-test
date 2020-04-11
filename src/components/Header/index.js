import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

import './styles.scss';

function Header() {
  return (
    <div className="container">
      <div className="section-header">
        <Router>
          <Link to="/" className="title">
            <img src={'https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png'} alt="Logo" />
          </Link>
        </Router>
      </div>
    </div>
  )
}

export default Header;
