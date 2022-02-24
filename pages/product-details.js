import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const Tabs = dynamic(
  import('react-tabs').then((mod) => mod.Tabs),
  { ssr: false }
);
import { resetIdCounter, Tab, TabList, TabPanel } from 'react-tabs';
resetIdCounter();

//components
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer';

const ProductDetails = () => {

  const [count, setCount] = useState(1);

  const productIncrement = () => {
    setCount(count + 1);
  };
  const productDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Navbar />
      <PageBanner pageTitle='Products Details' pageName='Products Details' />

      <section className='products-details-area ptb-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-5 col-md-12'>
              <div className='products-details-image'>
                <a
                  href='/images/products/products-img1.jpg'
                  data-fancybox='gallery'
                >
                  <img src='/images/products/products-img1.jpg' alt='image' />
                </a>
              </div>
            </div>

            <div className='col-lg-7 col-md-12'>
              <div className='products-details-desc'>
                <h3>Motivational Book Cover</h3>

                <div className='price'>
                  <span className='new-price'>$200</span>
                  <span className='old-price'>$210</span>
                </div>

                <div className='products-review'>
                  <div className='rating'>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                  </div>
                  <a href='#' className='rating-count'>
                    3 reviews
                  </a>
                </div>

                <p>
                  Santiago who travels from his homeland in Spain to the
                  Egyptian desert in search of a treasure buried near the
                  Pyramids. Lorem ipsum dolor sit amet, consectetur elit, sed do
                  eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt et.
                </p>

                <div className='products-meta'>
                  <span>
                    SKU: <span className='sku'>10</span>
                  </span>
                  <span>
                    Availability: <span className='in-stock'>In Stock</span>
                  </span>
                  <span>
                    Category: <a href='#'>Business</a>
                  </span>
                  <span>
                    Tag: <a href='#'>Book</a>
                  </span>
                </div>

                <div className='products-add-to-cart'>
                  <div className='input-counter'>
                    <span className='minus-btn' onClick={() => productDecrement()}>
                      <i className='bx bx-minus'></i>
                    </span>
                    <input type='text' min='1' value={count} onChange={(e) => e} />
                    <span className='plus-btn' onClick={() => productIncrement()}>
                      <i className='bx bx-plus'></i>
                    </span>
                  </div>
                  <button type='submit' className='default-btn'>
                    Add to Cart
                  </button>
                </div>

                <div className='products-share'>
                  <ul className='social'>
                    <li>
                      <span>Share:</span>
                    </li>
                    <li>
                      <a href='#' className='facebook'>
                        <i className='bx bxl-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='twitter'>
                        <i className='bx bxl-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='linkedin'>
                        <i className='bx bxl-linkedin'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#' className='instagram'>
                        <i className='bx bxl-instagram'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col-lg-12 col-md-12'>
              <div className='products-details-tabs'>
                <Tabs>
                  <ul className='nav nav-tabs' id='myTab'>
                    <TabList>
                      <Tab className='nav-item'>
                        <a className='nav-link' id='description-tab'>
                          Description
                        </a>
                      </Tab>
                      <Tab className='nav-item'>
                        <a className='nav-link' id='reviews-tab'>
                          Reviews (2)
                        </a>
                      </Tab>
                    </TabList>
                  </ul>

                  <div className='tab-content' id='myTabContent'>
                    <TabPanel>
                      <div
                        className='tab-pane fade show active'
                        id='description'
                        role='tabpanel'
                      >
                        <p>
                          This story, dazzling in its powerful simplicity and
                          soul-stirring wisdom, is about an Andalusian shepherd
                          boy named Santiago who travels from his homeland in
                          Spain to the Egyptian desert in search of a treasure
                          buried near the Pyramids. Lorem ipsum dolor sit.
                        </p>
                        <ul>
                          <li>Instant Dibiz bestseller</li>
                          <li>Translated into 18 languages</li>
                          <li>#1 Most Recommended Book of the year.</li>
                          <li>
                            A neglected project, widely dismissed, its champion
                            written off as unhinged.
                          </li>
                          <li>
                            Yields a negative result in an experiment because of
                            a flaw in the design of the experiment.
                          </li>
                          <li>
                            An Amazon, Bloomberg, Financial Times, Forbes, Inc.,
                            Newsweek, Strategy + Business, Tech Crunch,
                            Washington Post Best Business Book of the year
                          </li>
                        </ul>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className='tab-pane' id='reviews'>
                        <div className='products-reviews'>
                          <h3>Products Rating</h3>
                          <div className='rating'>
                            <span className='bx bxs-star checked'></span>
                            <span className='bx bxs-star checked'></span>
                            <span className='bx bxs-star checked'></span>
                            <span className='bx bxs-star checked'></span>
                            <span className='bx bxs-star'></span>
                          </div>
                          <div className='rating-count'>
                            <span>4.1 average based on 4 reviews.</span>
                          </div>
                          <div className='row'>
                            <div className='side'>
                              <div>5 star</div>
                            </div>
                            <div className='middle'>
                              <div className='bar-container'>
                                <div className='bar-5'></div>
                              </div>
                            </div>
                            <div className='side right'>
                              <div>02</div>
                            </div>
                            <div className='side'>
                              <div>4 star</div>
                            </div>
                            <div className='middle'>
                              <div className='bar-container'>
                                <div className='bar-4'></div>
                              </div>
                            </div>
                            <div className='side right'>
                              <div>03</div>
                            </div>
                            <div className='side'>
                              <div>3 star</div>
                            </div>
                            <div className='middle'>
                              <div className='bar-container'>
                                <div className='bar-3'></div>
                              </div>
                            </div>
                            <div className='side right'>
                              <div>04</div>
                            </div>
                            <div className='side'>
                              <div>2 star</div>
                            </div>
                            <div className='middle'>
                              <div className='bar-container'>
                                <div className='bar-2'></div>
                              </div>
                            </div>
                            <div className='side right'>
                              <div>05</div>
                            </div>
                            <div className='side'>
                              <div>1 star</div>
                            </div>
                            <div className='middle'>
                              <div className='bar-container'>
                                <div className='bar-1'></div>
                              </div>
                            </div>
                            <div className='side right'>
                              <div>00</div>
                            </div>
                          </div>
                        </div>
                        <div className='products-review-comments'>
                          <h3>3 Reviews</h3>
                          <div className='user-review'>
                            <img src='/images/user1.jpg' alt='image' />

                            <div className='review-rating'>
                              <div className='review-stars'>
                                <i className='bx bxs-star checked'></i>
                                <i className='bx bxs-star checked'></i>
                                <i className='bx bxs-star checked'></i>
                                <i className='bx bxs-star checked'></i>
                                <i className='bx bxs-star checked'></i>
                              </div>

                              <span className='d-inline-block'>
                                James Anderson
                              </span>
                            </div>

                            <span className='d-block sub-comment'>
                              Excellent
                            </span>
                            <p>
                              Very well built theme, couldn't be happier with
                              it. Can't wait for future updates to see what else
                              they add in.
                            </p>
                          </div>
                          <div className='user-review'>
                            <img src='/images/user2.jpg' alt='image' />
                            <div className='review-rating'>
                              <div className='review-stars'>
                                <i className='bx bxs-star checked'></i>
                                <i className='bx bxs-star checked'></i>
                                <i className='bx bxs-star checked'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                              </div>

                              <span className='d-inline-block'>
                                Sarah Taylor
                              </span>
                            </div>
                            <span className='d-block sub-comment'>
                              Video Quality!
                            </span>
                            <p>
                              Was really easy to implement and they quickly
                              answer my additional questions!
                            </p>
                          </div>
                          <div className='user-review'>
                            <img src='/images/user3.jpg' alt='image' />
                            <div className='review-rating'>
                              <div className='review-stars'>
                                <i className='bx bxs-star checked'></i>
                                <i className='bx bxs-star checked'></i>
                                <i className='bx bxs-star checked'></i>
                                <i className='bx bxs-star checked'></i>
                                <i className='bx bxs-star checked'></i>
                              </div>
                              <span className='d-inline-block'>
                                David Warner
                              </span>
                            </div>
                            <span className='d-block sub-comment'>
                              Perfect Coding!
                            </span>
                            <p>
                              Stunning design, very dedicated crew who welcome
                              new ideas suggested by customers, nice support.
                            </p>
                          </div>
                          <div className='user-review'>
                            <img src='/images/user4.jpg' alt='image' />
                            <div className='review-rating'>
                              <div className='review-stars'>
                                <i className='bx bxs-star checked'></i>
                                <i className='bx bxs-star checked'></i>
                                <i className='bx bxs-star checked'></i>
                                <i className='bx bxs-star checked'></i>
                                <i className='bx bxs-star'></i>
                              </div>
                              <span className='d-inline-block'>King Kong</span>
                            </div>
                            <span className='d-block sub-comment'>
                              Perfect Video!
                            </span>
                            <p>
                              Stunning design, very dedicated crew who welcome
                              new ideas suggested by customers, nice support.
                            </p>
                          </div>
                        </div>
                        <div className='review-form-wrapper'>
                          <h3>Add a review</h3>
                          <p className='comment-notes'>
                            Your email address will not be published. Required
                            fields are marked <span>*</span>
                          </p>

                          <form>
                            <div className='row'>
                              <div className='col-lg-12 col-md-12'>
                                <div className='rating'>
                                  <input
                                    type='radio'
                                    id='star5'
                                    name='rating'
                                    value='5'
                                    onChange={(e) => e}
                                  />
                                  <label htmlFor='star5'></label>
                                  <input
                                    type='radio'
                                    id='star4'
                                    name='rating'
                                    value='4'
                                    onChange={(e) => e}
                                  />
                                  <label htmlFor='star4'></label>
                                  <input
                                    type='radio'
                                    id='star3'
                                    name='rating'
                                    value='3'
                                    onChange={(e) => e}
                                  />
                                  <label htmlFor='star3'></label>
                                  <input
                                    type='radio'
                                    id='star2'
                                    name='rating'
                                    value='2'
                                    onChange={(e) => e}
                                  />
                                  <label htmlFor='star2'></label>
                                  <input
                                    type='radio'
                                    id='star1'
                                    name='rating'
                                    value='1'
                                    onChange={(e) => e}
                                  />
                                  <label htmlFor='star1'></label>
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
                                    Save my name, email, and website in this
                                    browser for the next time I comment.
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
                    </TabPanel>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='products-area pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>Related Products</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-products-box'>
                <div className='products-image'>
                  <Link href='/product-details'>
                    <a>
                      <img
                        src='/images/products/products-img1.jpg'
                        className='main-image'
                        alt='image'
                      />
                    </a>
                  </Link>
                </div>

                <div className='products-content'>
                  <h3>
                    <Link href='/product-details'>
                      <a>Note Book Mockup</a>
                    </Link>
                  </h3>
                  <div className='price'>
                    <span className='old-price'>$321</span>
                    <span className='new-price'>$250</span>
                  </div>
                  <a href='#' className='add-to-cart'>
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-products-box'>
                <div className='products-image'>
                  <Link href='/product-details'>
                    <a>
                      <img
                        src='/images/products/products-img2.jpg'
                        className='main-image'
                        alt='image'
                      />
                    </a>
                  </Link>

                  <div className='sale-tag'>Sale!</div>
                </div>

                <div className='products-content'>
                  <h3>
                    <Link href='/product-details'>
                      <a>Motivational Book Cover</a>
                    </Link>
                  </h3>
                  <div className='price'>
                    <span className='old-price'>$210</span>
                    <span className='new-price'>$200</span>
                  </div>
                  <a href='#' className='add-to-cart'>
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3'>
              <div className='single-products-box'>
                <div className='products-image'>
                  <Link href='/product-details'>
                    <a>
                      <img
                        src='/images/products/products-img3.jpg'
                        className='main-image'
                        alt='image'
                      />
                    </a>
                  </Link>
                </div>

                <div className='products-content'>
                  <h3>
                    <Link href='/product-details'>
                      <a>Book Cover Softcover</a>
                    </Link>
                  </h3>
                  <div className='price'>
                    <span className='old-price'>$210</span>
                    <span className='new-price'>$200</span>
                  </div>
                  <a href='#' className='add-to-cart'>
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default ProductDetails;
