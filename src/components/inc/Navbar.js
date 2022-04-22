import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar-dark bg-info bg-gradient'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <nav class='navbar navbar-expand-lg'>
              <div class='container-fluid'>
                <Link to='/' class='navbar-brand'>
                  Ashley Christensen
                </Link>
                <div
                  class='collapse navbar-collapse'
                  id='navbarSupportedContent'
                >
                  <ul class='navbar-nav ms-auto mb-2 mb-lg-0'>
                    <li class='nav-item'>
                      <Link to='/' class='nav-link active'>
                        Home
                      </Link>
                    </li>
                    <li class='nav-item'>
                      <Link to='/about' class='nav-link active'>
                        About
                      </Link>
                    </li>
                    <li class='nav-item'>
                      <Link to='/contact' class='nav-link active'>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
