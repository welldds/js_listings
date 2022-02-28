import Link from 'next/link';

const Footer = ({ bgColor }) => {
  return (
    <>
      <footer className={`footer-area ${bgColor}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Despre Noi</h3>

                <ul className='link-list'>
                  <li>
                    <Link href='/about'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Informatii Chirie24
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/listings'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Cariere
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/about'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Noutati
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/testimonial'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Investitori
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/about'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Ghiduri Continut
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/about'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Politica si Termeni
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/about'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Privacy Policy
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Descopera</h3>

                <ul className='link-list'>
                  <li>
                    <Link href='/listings'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Project Cost
                        Guides
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/listings'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Upcoming
                        Events
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/listings'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Mobile App
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Customer
                        Support
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/about'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Developers
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/listings'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Collections
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/listings'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Our Blog
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Business Chirie24</h3>

                <ul className='link-list'>
                  <li>
                    <Link href='/listings'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Claim your
                        Business
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/listings'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Advertise on
                        Chirie24
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/listings'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Restaurant
                        Owners
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/testimonial'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Business
                        Success Stories
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/listings'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Business
                        Support
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/listings'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Blog for
                        Business
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/about'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Privacy Policy
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Limba</h3>
                <div className='languages-switch'>
                  <select>
                    <option>Engleza</option>
                    <option>Romana</option>
                    <option>German</option>
                    <option>Spanish</option>
                  </select>
                </div>

                <h3>Tara</h3>
                <div className='country-switch'>
                  <select>
                    <option>Romania</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Spain</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className='copyright-area'>
            <p>
              Copyright @2022 <span>Chirie24</span> Realizat de{' '}
              <a href='#' target='_blank' rel='noreferrer'>
                DOOIT24 Web & Creative Solutions.
              </a>
            </p>
          </div>
        </div>

        <div className='footer-image text-center'>
          <img src='/images/footer-image.png' alt='image' />
        </div>
      </footer>
    </>
  );
};

export default Footer;
