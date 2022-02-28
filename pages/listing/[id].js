import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import axios from 'axios';
import baseUrl from '../../utils/baseUrl';

//components
import Navbar from '../../components/_App/Navbar';
import Footer from '../../components/_App/Footer';

const options = {
  loop: true,
  margin: 20,
  nav: true,
  mouseDrag: false,
  items: 2,
  dots: false,
  autoplay: true,
  smartSpeed: 500,

  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
};

const optionsTwo = {
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

const SingleListings = ({ user, listing, images }) => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  const [photoIndex, setphotoIndex] = useState(0);
  const [isOpen, setisOpen] = useState(false);

  const openLightBox = (index) => {
    setisOpen(true);
    setphotoIndex(index);
  };

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);
  return (
    <>
      <Navbar userRole={user} />
      <section className='listings-details-area pb-70'>
        <div className='listings-details-image'>
          <img src='/images/listings-details.jpg' alt='image' />

          <div className='container'>
            <div className='container'>
              <div className='listings-details-content'>
                <span className='meta'>
                  <i className='flaticon-furniture-and-household'></i>
                  {listing.category}
                </span>
                <h3>{listing.listingTitle}</h3>
                <div className='rating d-flex align-items-center'>
                  <span className='bx bxs-star checked'></span>
                  <span className='bx bxs-star checked'></span>
                  <span className='bx bxs-star checked'></span>
                  <span className='bx bxs-star checked'></span>
                  <span className='bx bxs-star checked'></span>
                  <span className='rating-count'>(45)</span>
                </div>
                <ul className='d-flex align-items-center'>
                  <li className='phone-number'>
                    <a href='#'>
                      <i className='bx bx-phone-call'></i>{' '}
                      {listing.phone}
                    </a>
                  </li>
                  <li className='time'>
                    <i className='bx bx-time-five'></i>
                    <span>Currently Open</span>
                    {listing.openingTime} - {listing.closingTime}
                  </li>
                  <li className='location'>
                    <i className='bx bx-map'></i>
                    <span>Location</span>
                    {listing.city}, {listing.state}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='container-fluid'>
            <ul className='share-save'>
              <li>
                <div className='share'>
                  <i className='bx bx-share-alt'></i> Share
                </div>

                <div className='social'>
                  <a href='#'>
                    <i className='bx bxl-facebook'></i>
                  </a>
                  <a href='#'>
                    <i className='bx bxl-pinterest'></i>
                  </a>
                  <a href='#'>
                    <i className='bx bxl-twitter'></i>
                  </a>
                  <a href='#'>
                    <i className='bx bxl-linkedin'></i>
                  </a>
                  <a href='#'>
                    <i className='bx bxl-whatsapp'></i>
                  </a>
                </div>
              </li>

              <li>
                <a href='#'>
                  <i className='bx bx-heart'></i> Save
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='listings-details-nav'>
          <div className='container'>
            <ul className='nav nav-tabs'>
              <li className='nav-item'>
                <a className='nav-link active' href='#overview'>
                  Overview
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#gallery'>
                  Gallery
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#pricing'>
                  Pricing
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#review'>
                  Review
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#add-review'>
                  Add Review
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-12'>
              <div className='listings-details-desc'>
                <h3>Details</h3>
                {listing.description}

                <h3>Amenities</h3>
                <ul className='amenities-list'>
                  <li>
                    <span>
                      <i className='bx bx-check'></i>{listing.marca}
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Vegan Options
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Kids Activities Nearby
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Accepts Apple Pay
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Accepts Google Pay
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Wheelchair Accessible
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Takes Reservations
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Offers Takeout
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Bike Parking
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Good for Kids
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Accepts Cryptocurrency
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Accepts Credit Cards
                    </span>
                  </li>
                </ul>

                <h3>Galerie</h3>
                <div id='gallery'>
                  <div className='gallery-slides owl-theme'>
                    {display ? (
                      <OwlCarousel {...options}>
                        {listing.gallery.map((gal, i) => (
                          <div
                            className='single-image-bpx'
                            onClick={() => openLightBox(i)}
                            key={i}
                          >
                            <img src={gal} alt='image22' />
                          </div>
                        ))}
                      </OwlCarousel>
                    ) : (
                      ''
                    )}
                  </div>
                </div>

                <h3>Pricing</h3>
                <div id='pricing'>
                  <ul className='pricing-list'>
                    <li>
                      Pizza <span>{' '}</span>{listing.pricing}
                    </li>
                    <li>
                      Burger <span>{' '}</span>{listing.pricing}
                    </li>
                    <li>
                      Cool Drink <span>$12</span>
                    </li>
                    <li>
                      Fried Rice <span>$08</span>
                    </li>
                    <li>
                      Orange Juice <span>$05</span>
                    </li>
                  </ul>
                </div>

                <h3>Review</h3>
                <div className='listings-review'>
                  <div className='rating d-flex align-items-center'>
                    <span className='bx bxs-star checked'></span>
                    <span className='bx bxs-star checked'></span>
                    <span className='bx bxs-star checked'></span>
                    <span className='bx bxs-star checked'></span>
                    <span className='bx bxs-star checked'></span>

                    <span className='overall-rating'>5.0</span>
                    <span className='rating-count'>(5 reviews)</span>
                  </div>

                  <div className='row'>
                    <div className='col-lg-6 col-md-6'>
                      <div className='row m-0'>
                        <div className='side'>
                          <div>Cleanliness</div>
                        </div>
                        <div className='middle'>
                          <div className='bar-container'>
                            <div className='bar-4'></div>
                          </div>
                        </div>
                        <div className='side right'>
                          <div>4.0</div>
                        </div>

                        <div className='side'>
                          <div>Accuracy</div>
                        </div>
                        <div className='middle'>
                          <div className='bar-container'>
                            <div className='bar-5'></div>
                          </div>
                        </div>
                        <div className='side right'>
                          <div>5.0</div>
                        </div>

                        <div className='side'>
                          <div>Location</div>
                        </div>
                        <div className='middle'>
                          <div className='bar-container'>
                            <div className='bar-5'></div>
                          </div>
                        </div>
                        <div className='side right'>
                          <div>5.0</div>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-6 col-md-6'>
                      <div className='row m-0'>
                        <div className='side'>
                          <div>Check-in</div>
                        </div>
                        <div className='middle'>
                          <div className='bar-container'>
                            <div className='bar-4'></div>
                          </div>
                        </div>
                        <div className='side right'>
                          <div>4.0</div>
                        </div>

                        <div className='side'>
                          <div>Communication</div>
                        </div>
                        <div className='middle'>
                          <div className='bar-container'>
                            <div className='bar-5'></div>
                          </div>
                        </div>
                        <div className='side right'>
                          <div>5.0</div>
                        </div>

                        <div className='side'>
                          <div>Value</div>
                        </div>
                        <div className='middle'>
                          <div className='bar-container'>
                            <div className='bar-5'></div>
                          </div>
                        </div>
                        <div className='side right'>
                          <div>5.0</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='write-a-review'>
                  <h4>Tell people what you think.</h4>
                  <p>
                    Help others by sharing your experience with this business.
                  </p>
                  <a href='#' className='default-btn'>
                    Write A Review
                  </a>
                </div>

                <div id='review'>
                  <div className='listings-review-comments'>
                    <div className='user-review'>
                      <div className='row m-0'>
                        <div className='col-lg-4 col-md-4 p-0'>
                          <div className='user'>
                            <div className='d-flex'>
                              <img src='/images/user1.jpg' alt='image' />
                              <div className='title'>
                                <h4>James Andy</h4>
                                <span>New York, USA</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-lg-8 col-md-8 p-0'>
                          <div className='comments'>
                            <div className='rating'>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Quis ipsum suspendisse
                              ultrices gravida. Risus commodo maecenas accumsan
                              lacus vel facilisis.
                            </p>
                            <div className='row m-0'>
                              <div className='col-lg-8 col-md-8 col-8 col-sm-8 p-0'>
                                <ul className='like-unlike'>
                                  <li>
                                    <a href='#'>Like</a>
                                  </li>
                                  <li>
                                    <a href='#'>Unlike</a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className='
                                col-lg-4 col-md-4 col-4 col-sm-4
                                p-0
                                text-right
                              '
                              >
                                <a href='#'>Comment</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='user-review'>
                      <div className='row m-0'>
                        <div className='col-lg-4 col-md-4 p-0'>
                          <div className='user'>
                            <div className='d-flex'>
                              <img src='/images/user2.jpg' alt='image' />
                              <div className='title'>
                                <h4>Sarah Taylor</h4>
                                <span>New York, USA</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-lg-8 col-md-8 p-0'>
                          <div className='comments'>
                            <div className='rating'>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Quis ipsum suspendisse
                              ultrices gravida. Risus commodo maecenas accumsan
                              lacus vel facilisis.
                            </p>
                            <div className='row m-0'>
                              <div className='col-lg-8 col-md-8 col-8 col-sm-8 p-0'>
                                <ul className='like-unlike'>
                                  <li>
                                    <a href='#'>Like</a>
                                  </li>
                                  <li>
                                    <a href='#'>Unlike</a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className='
                                col-lg-4 col-md-4 col-4 col-sm-4
                                p-0
                                text-right
                              '
                              >
                                <a href='#'>Comment</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='user-review'>
                      <div className='row m-0'>
                        <div className='col-lg-4 col-md-4 p-0'>
                          <div className='user'>
                            <div className='d-flex'>
                              <img src='/images/user3.jpg' alt='image' />
                              <div className='title'>
                                <h4>Jason Smith</h4>
                                <span>New York, USA</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-lg-8 col-md-8 p-0'>
                          <div className='comments'>
                            <div className='rating'>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Quis ipsum suspendisse
                              ultrices gravida. Risus commodo maecenas accumsan
                              lacus vel facilisis.
                            </p>
                            <div className='row m-0'>
                              <div className='col-lg-8 col-md-8 col-8 col-sm-8 p-0'>
                                <ul className='like-unlike'>
                                  <li>
                                    <a href='#'>Like</a>
                                  </li>
                                  <li>
                                    <a href='#'>Unlike</a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className='
                                col-lg-4 col-md-4 col-4 col-sm-4
                                p-0
                                text-right
                              '
                              >
                                <a href='#'>Comment</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id='add-review'>
                  <div className='review-form-wrapper'>
                    <h3>Add A Review</h3>
                    <p className='comment-notes'>
                      Your email address will not be published. Required fields
                      are marked <span>*</span>
                    </p>

                    <form>
                      <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                          <div className='sub-ratings'>
                            <div className='row'>
                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Cleanliness</h4>
                                  <div className='cleanliness-rating'>
                                    <input
                                      type='radio'
                                      id='cleanlinessStar5'
                                      name='cleanliness-rating'
                                      value='5'
                                    />
                                    <label htmlFor='cleanlinessStar5'></label>
                                    <input
                                      type='radio'
                                      id='cleanlinessStar4'
                                      name='cleanliness-rating'
                                      value='4'
                                    />
                                    <label htmlFor='cleanlinessStar4'></label>
                                    <input
                                      type='radio'
                                      id='cleanlinessStar3'
                                      name='cleanliness-rating'
                                      value='3'
                                    />
                                    <label htmlFor='cleanlinessStar3'></label>
                                    <input
                                      type='radio'
                                      id='cleanlinessStar2'
                                      name='cleanliness-rating'
                                      value='2'
                                    />
                                    <label htmlFor='cleanlinessStar2'></label>
                                    <input
                                      type='radio'
                                      id='cleanlinessStar1'
                                      name='cleanliness-rating'
                                      value='1'
                                    />
                                    <label htmlFor='cleanlinessStar1'></label>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Accuracy</h4>
                                  <div className='accuracy-rating'>
                                    <input
                                      type='radio'
                                      id='accuracyStar5'
                                      name='accuracy-rating'
                                      value='5'
                                    />
                                    <label htmlFor='accuracyStar5'></label>
                                    <input
                                      type='radio'
                                      id='accuracyStar4'
                                      name='accuracy-rating'
                                      value='4'
                                    />
                                    <label htmlFor='accuracyStar4'></label>
                                    <input
                                      type='radio'
                                      id='accuracyStar3'
                                      name='accuracy-rating'
                                      value='3'
                                    />
                                    <label htmlFor='accuracyStar3'></label>
                                    <input
                                      type='radio'
                                      id='accuracyStar2'
                                      name='accuracy-rating'
                                      value='2'
                                    />
                                    <label htmlFor='accuracyStar2'></label>
                                    <input
                                      type='radio'
                                      id='accuracyStar1'
                                      name='accuracy-rating'
                                      value='1'
                                    />
                                    <label htmlFor='accuracyStar1'></label>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Location</h4>
                                  <div className='location-rating'>
                                    <input
                                      type='radio'
                                      id='locationStar5'
                                      name='location-rating'
                                      value='5'
                                    />
                                    <label htmlFor='locationStar5'></label>
                                    <input
                                      type='radio'
                                      id='locationStar4'
                                      name='location-rating'
                                      value='4'
                                    />
                                    <label htmlFor='locationStar4'></label>
                                    <input
                                      type='radio'
                                      id='locationStar3'
                                      name='location-rating'
                                      value='3'
                                    />
                                    <label htmlFor='locationStar3'></label>
                                    <input
                                      type='radio'
                                      id='locationStar2'
                                      name='location-rating'
                                      value='2'
                                    />
                                    <label htmlFor='locationStar2'></label>
                                    <input
                                      type='radio'
                                      id='locationStar1'
                                      name='location-rating'
                                      value='1'
                                    />
                                    <label htmlFor='locationStar1'></label>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Check-in</h4>
                                  <div className='checkin-rating'>
                                    <input
                                      type='radio'
                                      id='checkInStar5'
                                      name='rating'
                                      value='5'
                                    />
                                    <label htmlFor='checkInStar5'></label>
                                    <input
                                      type='radio'
                                      id='checkInStar4'
                                      name='rating'
                                      value='4'
                                    />
                                    <label htmlFor='checkInStar4'></label>
                                    <input
                                      type='radio'
                                      id='checkInStar3'
                                      name='rating'
                                      value='3'
                                    />
                                    <label htmlFor='checkInStar3'></label>
                                    <input
                                      type='radio'
                                      id='checkInStar2'
                                      name='rating'
                                      value='2'
                                    />
                                    <label htmlFor='checkInStar2'></label>
                                    <input
                                      type='radio'
                                      id='checkInStar1'
                                      name='rating'
                                      value='1'
                                    />
                                    <label htmlFor='checkInStar1'></label>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Communication</h4>
                                  <div className='communication-rating'>
                                    <input
                                      type='radio'
                                      id='communicationStar5'
                                      name='communication-rating'
                                      value='5'
                                    />
                                    <label htmlFor='communicationStar5'></label>
                                    <input
                                      type='radio'
                                      id='communicationStar4'
                                      name='communication-rating'
                                      value='4'
                                    />
                                    <label htmlFor='communicationStar4'></label>
                                    <input
                                      type='radio'
                                      id='communicationStar3'
                                      name='communication-rating'
                                      value='3'
                                    />
                                    <label htmlFor='communicationStar3'></label>
                                    <input
                                      type='radio'
                                      id='communicationStar2'
                                      name='communication-rating'
                                      value='2'
                                    />
                                    <label htmlFor='communicationStar2'></label>
                                    <input
                                      type='radio'
                                      id='communicationStar1'
                                      name='communication-rating'
                                      value='1'
                                    />
                                    <label htmlFor='communicationStar1'></label>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Value</h4>
                                  <div className='value-rating'>
                                    <input
                                      type='radio'
                                      id='valueStar5'
                                      name='value-rating'
                                      value='5'
                                    />
                                    <label htmlFor='valueStar5'></label>
                                    <input
                                      type='radio'
                                      id='valueStar4'
                                      name='value-rating'
                                      value='4'
                                    />
                                    <label htmlFor='valueStar4'></label>
                                    <input
                                      type='radio'
                                      id='valueStar3'
                                      name='value-rating'
                                      value='3'
                                    />
                                    <label htmlFor='valueStar3'></label>
                                    <input
                                      type='radio'
                                      id='valueStar2'
                                      name='value-rating'
                                      value='2'
                                    />
                                    <label htmlFor='valueStar2'></label>
                                    <input
                                      type='radio'
                                      id='valueStar1'
                                      name='value-rating'
                                      value='1'
                                    />
                                    <label htmlFor='valueStar1'></label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-lg-6 col-md-6'>
                          <div className='form-group'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Name *'
                            />
                          </div>
                        </div>

                        <div className='col-lg-6 col-md-6'>
                          <div className='form-group'>
                            <input
                              type='email'
                              className='form-control'
                              placeholder='Email *'
                            />
                          </div>
                        </div>

                        <div className='col-lg-12 col-md-12'>
                          <div className='form-group'>
                            <textarea
                              placeholder='Your review'
                              className='form-control'
                              cols='30'
                              rows='6'
                            ></textarea>
                          </div>
                        </div>

                        <div className='col-lg-12 col-md-12'>
                          <p className='comment-form-cookies-consent'>
                            <input type='checkbox' id='test1' />
                            <label htmlFor='test1'>
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </label>
                          </p>
                        </div>

                        <div className='col-lg-12 col-md-12'>
                          <button type='submit'>Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <h3>Other Nearby Services</h3>
                <div className='row'>
                  <div className='col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <img src='/images/listings/listings1.jpg' alt='image' />

                        <Link href='/listings'>
                          <a className='link-btn'></a>
                        </Link>
                        <a className='bookmark-save'>
                          <i className='flaticon-heart'></i>
                        </a>
                        <a className='category'>
                          <i className='flaticon-cooking'></i>
                        </a>
                      </div>

                      <div className='listings-content'>
                        <div className='author'>
                          <div className='d-flex align-items-center'>
                            <Link href='/listings'>
                              <img src='/images/user1.jpg' alt='image' />
                            </Link>
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
                          <Link href='/listings'>
                            <a>Chipotle Mexican Grill</a>
                          </Link>
                        </h3>
                        <span className='status'>
                          <i className='flaticon-save'></i> Open Now
                        </span>
                        <div
                          className='
                          d-flex
                          align-items-center
                          justify-content-between
                        '
                        >
                          <div className='rating'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <span className='count'>(45)</span>
                          </div>
                          <div className='price'>
                          Start From <span>{' '}{listing.pricing}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <div className='listings-image-slides owl-theme'>
                          {display ? (
                            <OwlCarousel {...optionsTwo}>
                              <div className='single-image'>
                                <img
                                  src='/images/listings/listings2.jpg'
                                  alt='image'
                                />
                                <Link href='/listings'>
                                  <a className='link-btn'></a>
                                </Link>
                              </div>

                              <div className='single-image'>
                                <img
                                  src='/images/listings/listings4.jpg'
                                  alt='image'
                                />
                                <Link href='/listings'>
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
                              <i className='flaticon-furniture-and-household'></i>
                              Hotel
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='flaticon-pin'></i> Los Angeles, USA
                            </a>
                          </li>
                        </ul>
                        <h3>
                        <Link href='/listings'>
                          <a>The Beverly Hills Hotel</a>
                          </Link>
                        </h3>
                        <span className='status'>
                          <i className='flaticon-save'></i> Open Now
                        </span>
                        <div
                          className='
                          d-flex
                          align-items-center
                          justify-content-between
                        '
                        >
                          <div className='rating'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bx-star'></i>
                            <span className='count'>(10)</span>
                          </div>
                          <div className='price'>
                            Start From <span>{' '}{listing.pricing}</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-12'>
              <div className='listings-sidebar'>
                <div className='listings-widget book_listings'>
                  <h3>Pret</h3>
                  <a href='#' className='default-btn'>
                    {' '}{listing.pricing}
                  </a>
                  <span>
                    By <a href='#'>Booking.com</a>
                  </span>
                </div>

                <div className='listings-widget listings_contact_details'>
                  <h3>Contact Details</h3>
                  <ul>
                    <li>
                      <i className='bx bx-globe'></i>
                      <a href='#'>{listing.website}</a>
                    </li>
                    <li>
                      <i className='bx bx-phone-call'></i>
                      <a href='tel:+2122791456'>(+212) {listing.phone}</a>
                    </li>
                    <li>
                      <i className='bx bx-directions'></i>
                      <a href='#'>Get Directions</a>
                    </li>
                    <li>
                      <i className='bx bx-map'></i> {listing.city},{' '}
                      {listing.state}
                    </li>
                  </ul>
                </div>

                <div className='listings-widget listings_author'>
                  <h3>Persoana Contact</h3>
                  <div className='author'>
                    <div className='d-flex align-items-center'>
                      <img src='/images/user1.jpg' alt='image' />
                      <div className='title'>
                        <h4>
                          <a href='#'>{' '}{listing.phone}</a>
                        </h4>
                        <span>20 Places Hosted</span>
                      </div>
                    </div>

                    <div className='author-profile'>
                      <div className='row align-items-center'>
                        <div className='col-lg-5 col-md-5'>
                          <a href='#' className='view-profile'>
                            View Profile
                          </a>
                        </div>

                        <div className='col-lg-7 col-md-7'>
                          <ul className='social'>
                            <li>
                              <a href='#'>
                                <i className='bx bxl-facebook'></i>
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <i className='bx bxl-twitter'></i>
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <i className='bx bxl-linkedin'></i>
                              </a>
                            </li>
                            <li>
                              <a href='#'>
                                <i className='bx bxl-instagram'></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={listing.gallery[photoIndex]}
            nextSrc={listing.gallery[(photoIndex + 1) % listing.gallery.length]}
            prevSrc={
              listing.gallery[
                (photoIndex + listing.gallery.length - 1) %
                  listing.gallery.length
              ]
            }
            onCloseRequest={() => setisOpen(false)}
            onMovePrevRequest={() =>
              setphotoIndex(
                (photoIndex + listing.gallery.length - 1) %
                  listing.gallery.length
              )
            }
            onMoveNextRequest={() =>
              setphotoIndex((photoIndex + 1) % listing.gallery.length)
            }
          />
        )}
      </section>
      <Footer bgColor='bg-f5f5f5' />
    </>
  );
};

SingleListings.defaultProps = {
  images: [
    '/images/gallery/gallery1.jpg',
    '/images/gallery/gallery2.jpg',
    '/images/gallery/gallery3.jpg',
  ],
};

export async function getServerSideProps({ query }) {
  const id = query.id;
  const res = await axios.get(`${baseUrl}/api/v1/listings/${id}`);
  const listing = await res.data;

  return {
    props: {
      listing,
    },
  };
}

export default SingleListings;
