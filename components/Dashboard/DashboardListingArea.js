import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { IndiceContext } from '../../contexts';
import { parseCookies } from 'nookies';
import { useToasts } from 'react-toast-notifications';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import ActiveListingPagination from '../activeListing/ActiveListingPagination';
import PendingListingPagination from '../pendingListing/PendingListingPagination';

//components
import UpdateListing from './UpdateListing';

//owl carousel
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

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

const DashboardListingArea = ({ user, data, totalPages, status }) => {
  //context state
  const { setActiveListing, setPendingListing } = useContext(IndiceContext);

  const router = useRouter();
  const { addToast } = useToasts();
  const { token } = parseCookies();
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);
  const [listings, setListings] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [updateList, setUpdateList] = useState(false);
  let page = parseInt(router.query.page) ? parseInt(router.query.page) : 1;

  const handleShow = (list) => {
    setUpdateList(list);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  //show new data after every changes
  useEffect(() => {
    setListings(data);
  }, [page]);

  //updated listings data
  const updatedListings = (listings) => {
    setListings(listings);
    addToast('Listing updated successfully', {
      appearance: 'success',
    });
  };

//   const fetchListing = async () => {
//     const payload = {
//       headers: { Authorization: token },
//       params: {
//         page,
//         limit: 6,
//       },
//     };
//     const url = `${baseUrl}/api/v1/listings/my-listings?status=active`;

//     const res = await axios.get(url, payload);
//     const { listings } = await res.data;
//     const pending = listings.filter((list) => list.status === 'pending')
//     setPendingListing(pending)
//   };

  //chane listing status
  const statusHandler = async (id) => {
    let response = await axios.put(
      `${baseUrl}/api/v1/listings/status/${id}/?status=pending`
    );
    setListings(response.data.updatedListing);
    setActiveListing(response.data.activeListings);
    setPendingListing(response.data.pendingListings);
  };

  //delete listing
  const deleteHandler = async (id) => {

    const payload = {
      headers: { Authorization: token },
    };

    const url =  `${baseUrl}/api/v1/listings/${id}?status=${status}`

    const response = await axios.delete(url, payload);
    if (user.role === 'admin') {
      setListings(response.data.adminListings);
      setActiveListing(response.data.adminActiveListings);
      setPendingListing(response.data.adminPendingListings);
    }else{
      setListings(response.data.listings);
      setActiveListing(response.data.activeListings);
      setPendingListing(response.data.pendingListings);
    }
    
  };

  return (
    <>
      <div className='tab-content' id='myTabContent'>
        <div className='tab-pane fade show ' id='all-listing'>
          <div className='row'>
            {listings.length > 0 ? (
              listings.map((list) => (
                <div className='col-xl-4 col-lg-6 col-md-6' key={list.id}>
                  <div className='single-listings-box'>
                    <div className='listings-image'>
                      <div className='listings-image-slides owl-theme'>
                        {list.gallery.length === 1 ? (
                          list.gallery.length > 0 &&
                          list.gallery.map((gal, i) => (
                            <div className='single-image' key={i}>
                              <Image
                                src={gal}
                                alt='Picture of the author'
                                width={400}
                                height={300}
                              />
                              <Link href={`/listing/${list.id}`}>
                                <a className='link-btn'></a>
                              </Link>
                            </div>
                          ))
                        ) : display ? (
                          <OwlCarousel {...options}>
                            {list.gallery.length > 0 &&
                              list.gallery.map((gal, i) => (
                                <div className='single-image' key={i}>
                                  <Image
                                    src={gal}
                                    alt='Picture of the author'
                                    width={400}
                                    height={300}
                                  />
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
                    </div>

                    <div className='listings-content'>
                      <ul className='listings-meta'>
                        <li>
                          <a>
                            <i className='flaticon-furniture-and-household'></i>{' '}
                            {list.category}
                          </a>
                        </li>
                        <li>
                          <a>
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
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='rating'>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bxs-star'></i>
                          <i className='bx bx-star'></i>
                          <span className='count'>(10)</span>
                        </div>
                      </div>
                    </div>

                    <div className='listings-footer'>
                      <div className='d-flex justify-content-between align-items-center'>
                        {user.role === 'admin' && list.status === 'pending' && (
                          <a
                            className='default-btn global-pointer'
                            onClick={() => statusHandler(list.id)}
                          >
                            Approve
                          </a>
                        )}

                        {(user.role === 'user' || user.role === 'admin') &&
                          list.status === 'active' && (
                            <a
                              className='default-btn global-pointer'
                              onClick={() => handleShow(list)}
                            >
                              Edit
                            </a>
                          )}

                        <a
                          className='default-btn global-pointer'
                          onClick={() => deleteHandler(list.id)}
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className='empty-listing'>{`No ${status} Listing Available`}</p>
            )}
          </div>
        </div>
      </div>
      {status === 'pending' && listings.length > 0 ? (
        <PendingListingPagination totalPages={totalPages} />
      ) : status === 'active' && listings.length > 0 ? (
        <ActiveListingPagination totalPages={totalPages} />
      ) : (
        ''
      )}

      <UpdateListing
        show={showModal}
        handleClose={handleClose}
        updateList={updateList}
        updatedListings={updatedListings}
      />
    </>
  );
};

export default DashboardListingArea;
