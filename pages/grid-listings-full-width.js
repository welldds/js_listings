import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

//components
import NavbarTwo from '../components/_App/NavbarTwo';
import PopularPlacesFilter from '../components/Common/PopularPlacesFilter';
import Footer from '../components/_App/Footer';

const options = {
  loop: true,
  margin: 0,
  nav: true,
  mouseDrag: false,
  items: 1,
  dots: false,
  autoplay: true,
  smartSpeed: 500,

  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
};

const GridListingsFullWidth = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <NavbarTwo />
      <PopularPlacesFilter />

      <section className='listings-area ptb-100 bg-f9f9f9'>
        <div className='container'>
          <div className='listings-grid-sorting row align-items-center'>
            <div className='col-lg-5 col-md-6 result-count'>
              <p>
                We found <span className='count'>9</span> listings available for you
              </p>
            </div>

            <div className='col-lg-7 col-md-6 ordering'>
              <div className='d-flex justify-content-end'>
                <div className='select-box'>
                  <label>Sort By:</label>
                  <select className="blog-select">
                    <option>Recommended</option>
                    <option>Default</option>
                    <option>Popularity</option>
                    <option>Latest</option>
                    <option>Price: low to high</option>
                    <option>Price: high to low</option>
                  </select>
                </div>

                <div className='select-box'>
                  <label>Distance:</label>
                  <select className="blog-select">
                    <option>Driving (5 mi.)</option>
                    <option>Walking (1 mi.)</option>
                    <option>Biking (2 mi.)</option>
                    <option>Within 4 blocks</option>
                    <option>Bicycle (6 mi.)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-xl-4 col-lg-6 col-md-6'>
              <div className='single-listings-box'>
                <div className='listings-image'>
                  <img src='/images/listings/listings1.jpg' alt='image' />
                  <Link href="/single-listings">

                  <a  className='link-btn'></a>
                  </Link>
                  <a href='#' className='bookmark-save'>
                    <i className='flaticon-heart'></i>
                  </a>
                  <a href='#' className='category'>
                    <i className='flaticon-cooking'></i>
                  </a>
                </div>

                <div className='listings-content'>
                  <div className='author'>
                    <div className='d-flex align-items-center'>
                      <img src='/images/user1.jpg' alt='image' />
                      <span>Taylor</span>
                    </div>
                  </div>
                  <ul className='listings-meta'>
                    <li>
                      <a href='#'>
                        <i className='flaticon-furniture-and-household'></i>
                        Restaurant
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='flaticon-pin'></i> New York, USA
                      </a>
                    </li>
                  </ul>
                  <h3>
                  <Link href="/single-listings">

                    <a>Chipotle Mexican Grill</a>
                  </Link>
                  </h3>
                  <span className='status'>
                    <i className='flaticon-save'></i> Open Now
                  </span>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='rating'>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <span className='count'>(45)</span>
                    </div>
                    <div className='price'>
                      Start From <span>$150</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-6 col-md-6'>
              <div className='single-listings-box'>
                <div className='listings-image'>
                  <div className='listings-image-slides owl-theme'>
                    {display ? (
                      <OwlCarousel {...options}>
                        <div className='single-image'>
                          <img
                            src='/images/listings/listings2.jpg'
                            alt='image'
                          />
                          <Link href="/single-listings">

                          <a className='link-btn'></a>
                          </Link>
                        </div>

                        <div className='single-image'>
                          <img
                            src='/images/listings/listings4.jpg'
                            alt='image'
                          />
                          <Link href="/single-listings">

                          <a className='link-btn'></a>
                          </Link>
                        </div>
                      </OwlCarousel>
                    ) : (
                      ''
                    )}
                  </div>
                  <a href='#' className='bookmark-save'>
                    <i className='flaticon-heart'></i>
                  </a>
                  <a href='#' className='category'>
                    <i className='flaticon-cooking'></i>
                  </a>
                </div>

                <div className='listings-content'>
                  <div className='author'>
                    <div className='d-flex align-items-center'>
                      <img src='/images/user2.jpg' alt='image' />
                      <span>Sarah</span>
                    </div>
                  </div>
                  <ul className='listings-meta'>
                    <li>
                      <a href='#'>
                        <i className='flaticon-furniture-and-household'></i> Hotel
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='flaticon-pin'></i> Los Angeles, USA
                      </a>
                    </li>
                  </ul>
                  <h3>
                  <Link href="/single-listings">

                    <a>The Beverly Hills Hotel</a>
                  </Link>
                  </h3>
                  <span className='status'>
                    <i className='flaticon-save'></i> Open Now
                  </span>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='rating'>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bx-star'></i>
                      <span className='count'>(10)</span>
                    </div>
                    <div className='price'>
                      Start From <span>$200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-6 col-md-6'>
              <div className='single-listings-box'>
                <div className='listings-image'>
                  <img src='/images/listings/listings3.jpg' alt='image' />
                  <Link href="/single-listings">

                  <a className='link-btn'></a>
                  </Link>
                  <a href='#' className='bookmark-save'>
                    <i className='flaticon-heart'></i>
                  </a>
                  <a href='#' className='category'>
                    <i className='flaticon-cooking'></i>
                  </a>
                </div>

                <div className='listings-content'>
                  <div className='author'>
                    <div className='d-flex align-items-center'>
                      <img src='/images/user3.jpg' alt='image' />
                      <span>James</span>
                    </div>
                  </div>
                  <ul className='listings-meta'>
                    <li>
                      <a href='#'>
                        <i className='flaticon-shopping-bags'></i> Shopping
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='flaticon-pin'></i> Bangkok, Thailand
                      </a>
                    </li>
                  </ul>
                  <h3>
                  <Link href="/single-listings">

                    <a>Central Shopping Center</a>
                  </Link>
                  </h3>
                  <span className='status status-close'>
                    <i className='flaticon-save'></i> Close Now
                  </span>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='rating'>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star-half'></i>
                      <span className='count'>(35)</span>
                    </div>
                    <div className='price'>
                      Start From <span>$110</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-6 col-md-6'>
              <div className='single-listings-box'>
                <div className='listings-image'>
                  <div className='listings-image-slides owl-theme'>
                    {display ? (
                      <OwlCarousel {...options}>
                        <div className='single-image'>
                          <img
                            src='/images/listings/listings5.jpg'
                            alt='image'
                          />
                          <Link href="/single-listings">

                          <a className='link-btn'></a>
                          </Link>
                        </div>

                        <div className='single-image'>
                          <img
                            src='/images/listings/listings6.jpg'
                            alt='image'
                          />
                          <Link href="/single-listings">

                          <a className='link-btn'></a>
                          </Link>
                        </div>
                      </OwlCarousel>
                    ) : (
                      ''
                    )}
                  </div>
                  <a href='#' className='bookmark-save'>
                    <i className='flaticon-heart'></i>
                  </a>
                  <a href='#' className='category'>
                    <i className='flaticon-cooking'></i>
                  </a>
                </div>

                <div className='listings-content'>
                  <div className='author'>
                    <div className='d-flex align-items-center'>
                      <img src='/images/user4.jpg' alt='image' />
                      <span>Andy</span>
                    </div>
                  </div>
                  <ul className='listings-meta'>
                    <li>
                      <a href='#'>
                        <i className='flaticon-cleansing'></i> Beauty
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='flaticon-pin'></i> Suwanee, USA
                      </a>
                    </li>
                  </ul>
                  <h3>
                  <Link href="/single-listings">

                    <a>Indice Beauty Center</a>
                  </Link>
                  </h3>
                  <span className='status'>
                    <i className='flaticon-save'></i> Open Now
                  </span>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='rating'>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bx-star'></i>
                      <i className='bx bx-star'></i>
                      <span className='count'>(15)</span>
                    </div>
                    <div className='price'>
                      Start From <span>$100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-6 col-md-6'>
              <div className='single-listings-box'>
                <div className='listings-image'>
                  <img src='/images/listings/listings7.jpg' alt='image' />
                  <Link href="/single-listings">

                  <a className='link-btn'></a>
                  </Link>
                  <a href='#' className='bookmark-save'>
                    <i className='flaticon-heart'></i>
                  </a>
                  <a href='#' className='category'>
                    <i className='flaticon-cooking'></i>
                  </a>
                </div>

                <div className='listings-content'>
                  <div className='author'>
                    <div className='d-flex align-items-center'>
                      <img src='/images/user3.jpg' alt='image' />
                      <span>James</span>
                    </div>
                  </div>
                  <ul className='listings-meta'>
                    <li>
                      <a href='#'>
                        <i className='flaticon-furniture-and-household'></i>
                        Restaurant
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='flaticon-pin'></i> Francisco, USA
                      </a>
                    </li>
                  </ul>
                  <h3>
                  <Link href="/single-listings">

                    <a>The Mad Made Grill</a>
                  </Link>
                  </h3>
                  <span className='status'>
                    <i className='flaticon-save'></i> Open Now
                  </span>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='rating'>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <span className='count'>(18)</span>
                    </div>
                    <div className='price'>
                      Start From <span>$121</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-6 col-md-6'>
              <div className='single-listings-box'>
                <div className='listings-image'>
                  <div className='listings-image-slides owl-theme'>
                    {display ? (
                      <OwlCarousel {...options}>
                        <div className='single-image'>
                          <img
                            src='/images/listings/listings4.jpg'
                            alt='image'
                          />
                          <Link href="/single-listings">

                          <a className='link-btn'></a>
                          </Link>
                        </div>

                        <div className='single-image'>
                          <img
                            src='/images/listings/listings2.jpg'
                            alt='image'
                          />
                          <Link href="/single-listings">

                          <a className='link-btn'></a>
                          </Link>
                        </div>
                      </OwlCarousel>
                    ) : (
                      ''
                    )}
                  </div>
                  <a href='#' className='bookmark-save'>
                    <i className='flaticon-heart'></i>
                  </a>
                  <a href='#' className='category'>
                    <i className='flaticon-cooking'></i>
                  </a>
                </div>

                <div className='listings-content'>
                  <div className='author'>
                    <div className='d-flex align-items-center'>
                      <img src='/images/user2.jpg' alt='image' />
                      <span>Sarah</span>
                    </div>
                  </div>
                  <ul className='listings-meta'>
                    <li>
                      <a href='#'>
                        <i className='flaticon-hotel'></i> Hotel
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='flaticon-pin'></i> Los Angeles, USA
                      </a>
                    </li>
                  </ul>
                  <h3>
                  <Link href="/single-listings">

                    <a>The Beverly Hills Hotel</a>
                  </Link>
                  </h3>
                  <span className='status'>
                    <i className='flaticon-save'></i> Open Now
                  </span>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='rating'>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bx-star'></i>
                      <span className='count'>(10)</span>
                    </div>
                    <div className='price'>
                      Start From <span>$200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-6 col-md-6'>
              <div className='single-listings-box'>
                <div className='listings-image'>
                  <img src='/images/listings/listings8.jpg' alt='image' />
                  <Link href="/single-listings">

                  <a className='link-btn'></a>
                  </Link>
                  <a href='#' className='bookmark-save'>
                    <i className='flaticon-heart'></i>
                  </a>
                  <a href='#' className='category'>
                    <i className='flaticon-cooking'></i>
                  </a>
                </div>

                <div className='listings-content'>
                  <div className='author'>
                    <div className='d-flex align-items-center'>
                      <img src='/images/user5.jpg' alt='image' />
                      <span>Lina</span>
                    </div>
                  </div>
                  <ul className='listings-meta'>
                    <li>
                      <a href='#'>
                        <i className='flaticon-shopping-bags'></i> Shopping
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='flaticon-pin'></i> Seattle, USA
                      </a>
                    </li>
                  </ul>
                  <h3>
                  <Link href="/single-listings">

                    <a>Blue Water Shopping City</a>
                  </Link>
                  </h3>
                  <span className='status'>
                    <i className='flaticon-save'></i> Open Now
                  </span>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='rating'>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <span className='count'>(55)</span>
                    </div>
                    <div className='price'>
                      Start From <span>$500</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-6 col-md-6'>
              <div className='single-listings-box'>
                <div className='listings-image'>
                  <img src='/images/listings/listings13.jpg' alt='image' />
                  <Link href="/single-listings">

                  <a className='link-btn'></a>
                  </Link>
                  <a href='#' className='bookmark-save'>
                    <i className='flaticon-heart'></i>
                  </a>
                  <a href='#' className='category'>
                    <i className='flaticon-cooking'></i>
                  </a>
                </div>

                <div className='listings-content'>
                  <div className='author'>
                    <div className='d-flex align-items-center'>
                      <img src='/images/user3.jpg' alt='image' />
                      <span>James</span>
                    </div>
                  </div>
                  <ul className='listings-meta'>
                    <li>
                      <a href='#'>
                        <i className='flaticon-shopping-bags'></i> Fitness
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='flaticon-pin'></i> Bangkok, Thailand
                      </a>
                    </li>
                  </ul>
                  <h3>
                  <Link href="/single-listings">

                    <a>Power House Gym</a>
                  </Link>
                  </h3>
                  <span className='status status-close'>
                    <i className='flaticon-save'></i> Close Now
                  </span>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='rating'>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star-half'></i>
                      <span className='count'>(35)</span>
                    </div>
                    <div className='price'>
                      Start From <span>$110</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xl-4 col-lg-6 col-md-6'>
              <div className='single-listings-box'>
                <div className='listings-image'>
                  <div className='listings-image-slides owl-theme'>
                    {display ? (
                      <OwlCarousel {...options}>
                        <div className='single-image'>
                          <img
                            src='/images/listings/listings14.jpg'
                            alt='image'
                          />
                          <Link href="/single-listings">

                          <a className='link-btn'></a>
                          </Link>
                        </div>

                        <div className='single-image'>
                          <img
                            src='/images/listings/listings15.jpg'
                            alt='image'
                          />
                          <Link href="/single-listings">

                          <a className='link-btn'></a>
                          </Link>
                        </div>
                      </OwlCarousel>
                    ) : (
                      ''
                    )}
                  </div>
                  <a href='#' className='bookmark-save'>
                    <i className='flaticon-heart'></i>
                  </a>
                  <a href='#' className='category'>
                    <i className='flaticon-cooking'></i>
                  </a>
                </div>

                <div className='listings-content'>
                  <div className='author'>
                    <div className='d-flex align-items-center'>
                      <img src='/images/user4.jpg' alt='image' />
                      <span>Andy</span>
                    </div>
                  </div>
                  <ul className='listings-meta'>
                    <li>
                      <a href='#'>
                        <i className='flaticon-cleansing'></i> Beauty
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='flaticon-pin'></i> Suwanee, USA
                      </a>
                    </li>
                  </ul>
                  <h3>
                  <Link href="/single-listings">

                    <a>
                      Divine Beauty Parlour & Spa
                    </a>
                  </Link>
                  </h3>
                  <span className='status'>
                    <i className='flaticon-save'></i> Open Now
                  </span>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='rating'>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bxs-star'></i>
                      <i className='bx bx-star'></i>
                      <i className='bx bx-star'></i>
                      <span className='count'>(15)</span>
                    </div>
                    <div className='price'>
                      Start From <span>$100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xl-12 col-lg-12 col-md-12'>
              <div className='pagination-area text-center'>
                <a href='#' className='prev page-numbers'>
                  <i className='bx bx-chevrons-left'></i>
                </a>
                <span className='page-numbers current' aria-current='page'>
                  1
                </span>
                <a href='#' className='page-numbers'>
                  2
                </a>
                <a href='#' className='page-numbers'>
                  3
                </a>
                <a href='#' className='page-numbers'>
                  4
                </a>
                <a href='#' className='next page-numbers'>
                  <i className='bx bx-chevrons-right'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer bgColor='bg-f5f5f5' />
    </>
  );
};

export default GridListingsFullWidth;
