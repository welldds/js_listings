import React, { useState, useEffect } from 'react';
import { IndiceProvider } from '../contexts';

import '../public/css/animate.min.css';
import '../public/css/bootstrap.min.css';
import '../public/css/meanmenu.min.css';
import '../public/css/boxicons.min.css';
import '../public/css/flaticon.css';
import '../public/css/nprogress.css';
import '../public/css/nice-select.min.css';
import '../public/css/style.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import '../public/css/responsive.css';

import Layout from '../components/_App/Layout';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';

import { parseCookies, destroyCookie } from 'nookies';
import { redirectUser } from '../utils/auth';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      <Layout>
        <IndiceProvider>
          <Component {...pageProps} />

          <Loader loading={loading} />

          <GoTop scrollStepInPx='100' delayInMs='10.50' />
        </IndiceProvider>
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const { token } = parseCookies(ctx);
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (!token) {
    // if a user not logged in then user can't access those pages
    const isProtectedRoute =
      ctx.pathname === '/dashboard' ||
      ctx.pathname === '/dashboard/add-listing' ||
      ctx.pathname === '/dashboard/messages' ||
      ctx.pathname === '/dashboard/bookings' ||
      ctx.pathname === '/dashboard/wallet' ||
      ctx.pathname === '/dashboard/my-listing/active' ||
      ctx.pathname === '/dashboard/reviews';


    if (isProtectedRoute) {
      redirectUser(ctx, '/');
    }
  } else {
    // if a user logged in then user can't access those pages

    try {
      const payload = { headers: { Authorization: token } };
      //user
      const url = `${baseUrl}/api/v1/auth/account`;
      const response = await axios.get(url, payload);
      const user = response.data;

      pageProps.user = user;
    } catch (error) {
      //invalid token
      destroyCookie(ctx, 'token');
    }
  }

  return {
    pageProps,
  };
};


export default MyApp;
