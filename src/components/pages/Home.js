import React from 'react';
import Slider from '../inc/Slider';
import { Link } from 'react-router-dom';
import Vmc from './inc/Vmc';
import Service1 from '../images/react.png';
import Service2 from '../images/js.png';
import Service3 from '../images/css3.png';

const Home = () => {
  return (
    <div>
      <Slider />
      <section className='section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h3 className='main-heading'>My Work</h3>
              <div className='underline mx-auto'></div>
              <p>
                Cliche cold-pressed everyday carry, put a bird on it ennui kogi
                humblebrag lomo prism mustache. Mixtape plaid schlitz, pug
                meditation freegan beard flexitarian portland cold-pressed
                sustainable. Swag iPhone single-origin coffee tumeric
                thundercats viral dreamcatcher bespoke quinoa. I'm baby unicorn
                thundercats tumeric organic. Sriracha cray cornhole cold-pressed
              </p>
              <Link to='/about' className='btn btn-info shadow'>
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* background, mission, values */}
      <Vmc />

      {/* Services */}

      <section className='section border-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 mb-4 text-center'>
              <h3 className='main-heading'>Specialties</h3>
              <div className='underline mx-auto'></div>
            </div>

            <div className='col-md-4'>
              <div className='card p-4 shadow'>
                <img
                  src={Service1}
                  className='w-100 p-4 border-bottom'
                  alt='services'
                />
                <div className='card-body'></div>
                <h6>React / React-Native</h6>
                <div className='underline'></div>
                <p>
                  I'm baby unicorn thundercats tumeric organic. Sriracha cray
                  cornhole cold-pressed
                </p>
                <Link to='/services' className='btn btn-link'>
                  Read More
                </Link>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='card p-4 shadow'>
                <img
                  src={Service2}
                  className='w-100 p-4 border-bottom'
                  alt='services'
                />
                <div className='card-body'></div>
                <h6>JavaScript / ES6</h6>
                <div className='underline'></div>
                <p>
                  I'm baby unicorn thundercats tumeric organic. Sriracha cray
                  cornhole cold-pressed
                </p>
                <Link to='/services' className='btn btn-link'>
                  Read More
                </Link>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='card p-4 shadow'>
                <img
                  src={Service3}
                  className='w-100 p-4 border-bottom'
                  alt='services'
                />
                <div className='card-body'></div>
                <h6>CSS3 / Bootstrap</h6>
                <div className='underline'></div>
                <p>
                  I'm baby unicorn thundercats tumeric organic. Sriracha cray
                  cornhole cold-pressed
                </p>
                <Link to='/services' className='btn btn-link'>
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
