import Head from 'next/head';
import { ToastProvider } from 'react-toast-notifications';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        {/* Required meta tags */}
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <title>Chirie 24 - Anunturi Chirie Romania</title>
      </Head>

      <ToastProvider
        placement='bottom-center'
        autoDismissTimeout={6000}
        autoDismiss
      >
        {children}
      </ToastProvider>
    </>
  );
};

export default Layout;
