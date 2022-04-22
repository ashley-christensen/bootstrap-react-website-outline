import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='section footer bg-info text-white'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h6>Information</h6>
            <hr />
            <p className='text-white'>
              Coloring book tbh artisan wayfarers cronut. Cliche cold-pressed
              everyday carry, put a bird on it ennui kogi humblebrag lomo prism
              mustache. Mixtape plaid schlitz, pug meditation freegan beard
              flexitarian portland cold-pressed sustainable.
            </p>
          </div>
          <div className='col-md-4'>
            <h6>Quick Links</h6>
            <hr />
            <div>
              <Link to='/'>Home</Link>
            </div>
            <div>
              <Link to='/about'>About</Link>
            </div>
            <div>
              <Link to='/contact'>Contact</Link>
            </div>
            <div>
              <Link to='/'>Blog</Link>
            </div>
          </div>

          <div className='col-md-4'>
            <h6>Contact Information</h6>
            <hr />
            <div className='text-white mb-1'>
              70 Main Street, Brentwood, CA USA
            </div>
            <div className='text-white mb-1'>650 518 9906</div>
            <div className='text-white mb-1'>achristensen33@icloud.com</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
