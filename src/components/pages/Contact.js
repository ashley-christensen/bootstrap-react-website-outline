import React from 'react';

const Contact = () => {
  return (
    <div>
      <section className='py-4 bg-primary bg-gradient'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 my-auto'>
              <h4>Contact</h4>
            </div>
            <div className='col-md-8 my-auto'>
              <h6 className='float-end'>Home / Contact</h6>
            </div>
          </div>
        </div>
      </section>

      <section className='section'>
        <div className='container'>
          <div className='card shadow'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-6'>
                  <h6>Contact Form</h6>
                  <hr />

                  <div className='form-group'>
                    <label className='mb-1'>Full Name</label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter Full Name'
                    />
                  </div>
                  <div className='form-group'>
                    <label className='mb-1'>Phone Number</label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter Full Name'
                    />
                  </div>
                  <div className='form-group'>
                    <label className='mb-1'>Email Address</label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Enter Full Name'
                    />
                  </div>

                  <div className='form-group'>
                    <label className='mb-1'>Message</label>

                    <textarea
                      rows='3'
                      className='form-control'
                      placeholder='Enter Full Name'
                    ></textarea>
                  </div>

                  <div className='form-group py-3'>
                    <button
                      type='button'
                      className='btn btn-primary shadow w-100'
                    >
                      Send Message
                    </button>
                  </div>
                </div>

                <div className='col-md-6 border-start'>
                  <h5 className='main-heading'>Address Information</h5>
                  <div className='underline'></div>
                  <p>#XXX Brentwood, CA, USA</p>
                  <p>Phone: 650 518 9906</p>
                  <p>Email: achristensen33@icloud.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
