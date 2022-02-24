import { useState, useEffect } from 'react';

import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

//components
import ListingPagination from './ListingPagination';

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

const ListingArea = ({ listings, totalPages }) => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  //get active listings for showing listing count
  const activeListings = listings.filter((list) => list.status !== 'pending');

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <section className='listings-area ptb-100 bg-f9f9f9'>
        <div className='container'>
          <div className='listings-grid-sorting row align-items-center'>
            <div className='col-lg-5 col-md-6 result-count'>
              <p>
                We found <span className='count'>{activeListings.length}</span>{' '}
                listings available for you
              </p>
            </div>

            <div className='col-lg-7 col-md-6 ordering'>
              <div className='d-flex justify-content-end'>
                <div className='select-box'>
                  <label>Sort By:</label>
                  <select className='blog-select'>
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
                  <select className='blog-select'>
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
            {listings &&
              listings.map(
                (list) =>
                  list.status === 'active' && (
                    <div className='col-xl-4 col-lg-6 col-md-6' key={list.id}>
                      <div className='single-listings-box'>
                        <div className='listings-image'>
                          <div className='listings-image-slides owl-theme'>
                            {display ? (
                              <OwlCarousel {...options}>
                                {list.gallery.length > 0 &&
                                  list.gallery.map((gal, i) => (
                                    <div className='single-image' key={i}>
                                      <img src={gal} alt='image' />
                                      <Link href={`/listing/${list.id}`}>
                                        <a className='link-btn'></a>
                                      </Link>
                                    </div>
                                  ))}
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
                                <i className='flaticon-pin'></i> {list.city},
                                {list.state}
                              </a>
                            </li>
                          </ul>
                          <h3>
                            <Link href={`/listing/${list.id}`}>
                              <a>{list.listingTitle}</a>
                            </Link>
                          </h3>
                          <span className='status'>
                            <i className='flaticon-save'></i> Open Now2
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
                              Start From2 <span>$200</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}

            <div className='col-xl-12 col-lg-12 col-md-12'>
			{ activeListings.length > 0 && <ListingPagination totalPages={totalPages} /> }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListingArea;
