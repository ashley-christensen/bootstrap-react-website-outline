import React from 'react';
import Vmc from './inc/Vmc';

const About = () => {
  return (
    <div>
      <section className='py-4 bg-primary bg-gradient'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 my-auto'>
              <h4>About</h4>
            </div>
            <div className='col-md-8 my-auto'>
              <h6 className='float-end'>Home / About</h6>
            </div>
          </div>
        </div>
      </section>

      <section className='section border-bottom'>
        <div className='container'>
          <h5 className='main-heading'>My Development</h5>
          <div className='underline'> </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            itaque recusandae beatae optio voluptate, nisi neque possimus enim,
            nesciunt vitae tempora ea dolores! Asperiores, incidunt nemo natus
            ab repudiandae corporis.
          </p>
        </div>
      </section>

      {/* background, mission, values */}
      <Vmc />
    </div>
  );
};

export default About;
