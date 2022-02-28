import React from 'react';

const HowItWorks = ({bgColor}) => {
  return (
    <>
      <section className={`how-it-works-area pt-100 pb-70 ${bgColor}`}>
        <div className='container'>
          <div className='section-title'>
            <h2>Cum functioneaza?</h2>
            <p>
              Gasesti anuntul, contactezi persoana, faci o rezervare si vezi locatia!
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-how-it-works-box'>
                <div className='icon'>
                  <i className='flaticon-placeholder'></i>
                </div>
                <h3>Gasesti Anunturi</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-how-it-works-box'>
                <div className='icon'>
                  <i className='flaticon-support-1'></i>
                </div>
                <h3>Contactezi Persoana</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>

            <div
              className='
              col-lg-4 col-md-6 col-sm-6
              offset-lg-0 offset-md-3 offset-sm-3
            '
            >
              <div className='single-how-it-works-box'>
                <div className='icon'>
                  <i className='flaticon-tick'></i>
                </div>
                <h3>Faci o Rezervare</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
