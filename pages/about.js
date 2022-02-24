import Link from 'next/link';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import ModalVideo from 'react-modal-video';

//components
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import HowItWorks from '../components/Common/HowItWorks';
import Feedback from '../components/Common/Feedback';
import Countdowns from '../components/Common/Countdowns';
import Footer from '../components/_App/Footer';

const options = {
  loop: true,
  margin: 0,
  nav: false,
  mouseDrag: false,
  items: 7,
  dots: false,
  autoplay: true,
  smartSpeed: 500,

  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
};

const About = ({ user }) => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  const [isDisplayVideo, setIsDisplayVideo] = useState(0);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
    setIsDisplayVideo(true);
  }, []);

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <Navbar userRole={user} />
      <PageBanner pageTitle='About Us' pageName='About Us' />
      <section className='about-area ptb-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='about-content'>
                <h2>How We Were Established</h2>
                <span>
                  <strong>
                    Check video presentation to find out more about us.
                  </strong>
                </span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p>
                  Every month they moved their money the old way – which wasted
                  their time and money. So they invented a beautifully simple
                  workaround that became a billion-dollar business.
                </p>
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='about-image'>
                <img src='/images/about-img.jpg' alt='image' />
                {isDisplayVideo ? (
                  <ModalVideo
                    channel='youtube'
                    className="modal-video"
                    autoplay
                    isOpen={isOpen}
                    videoId='bk7McNUjWgw'
                    onClose={() => setOpen(false)}
                  />
                ) : (
                  ''
                )}

                <a
                  className='video-btn popup-youtube'
                  onClick={() => openModal()}
                >
                  <i className='bx bx-play'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='funfacts-area pb-70'>
        <div className='container'>
          <div className='row'>
            <Countdowns />
          </div>
        </div>
      </section>

      <section className='team-area pt-100 pb-70 bg-f9f9f9'>
        <div className='container'>
          <div className='section-title'>
            <h2>Meet Our Awesome Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-team-member'>
                <div className='member-image'>
                  <Link href='/contact'>
                    <img src='/images/team/team1.jpg' alt='image' />
                  </Link>
                  <ul className='social'>
                    <li>
                      <a href='#' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='member-content'>
                  <h3>
                    <Link href='/listings'>
                      <a>James Anderson</a>
                    </Link>
                  </h3>
                  <span>CEO & Founder</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-team-member'>
                <div className='member-image'>
                  <img src='/images/team/team2.jpg' alt='image' />

                  <ul className='social'>
                    <li>
                      <a href='#' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='member-content'>
                  <h3>
                    <Link href='/contact'>
                      <a>Sarah Taylor</a>
                    </Link>
                  </h3>
                  <span>Co-Founder</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-team-member'>
                <div className='member-image'>
                  <img src='/images/team/team3.jpg' alt='image' />

                  <ul className='social'>
                    <li>
                      <a href='#' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='member-content'>
                  <h3>
                    <Link href='/listings'>
                      <a>Steven Smith</a>
                    </Link>
                  </h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='single-team-member'>
                <div className='member-image'>
                  <img src='/images/team/team4.jpg' alt='image' />

                  <ul className='social'>
                    <li>
                      <a href='#' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' rel='noreferrer'>
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='member-content'>
                  <h3>
                    <Link href='/listings'>
                      <a>John Capabel</a>
                    </Link>
                  </h3>
                  <span>Programer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HowItWorks />

      <div className='partner-area ptb-100 bg-f5f5f5'>
        <div className='container'>
          <div className='section-title'>
            <h2>Our Partners</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <div className='partner-slides owl-theme'>
            {display ? (
              <OwlCarousel className='owlNavOne' {...options}>
                <div className='partner-item'>
                  <a href='#'>
                    <img src='/images/partner/partner1.png' alt='image' />
                  </a>
                </div>

                <div className='partner-item'>
                  <a href='#'>
                    <img src='/images/partner/partner2.png' alt='image' />
                  </a>
                </div>

                <div className='partner-item'>
                  <a href='#'>
                    <img src='/images/partner/partner3.png' alt='image' />
                  </a>
                </div>

                <div className='partner-item'>
                  <a href='#'>
                    <img src='/images/partner/partner4.png' alt='image' />
                  </a>
                </div>

                <div className='partner-item'>
                  <a href='#'>
                    <img src='/images/partner/partner5.png' alt='image' />
                  </a>
                </div>

                <div className='partner-item'>
                  <a href='#'>
                    <img src='/images/partner/partner6.png' alt='image' />
                  </a>
                </div>
              </OwlCarousel>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <Feedback bgColor='bg-f9f9f9' />
      <Footer />
    </>
  );
};

export default About;
