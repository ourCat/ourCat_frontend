import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { MainLayout } from 'layouts';
import { ToastComponentContainer } from 'components';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import GlobalStyles from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Themes from 'styles/Theme';
import 'react-toastify/dist/ReactToastify.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={Themes}>
      <Head>
        <title>타이틀</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <GlobalStyles />
      <Provider store={store}>
        <MainLayout>
          <Component {...pageProps} />
          <ToastComponentContainer />
        </MainLayout>
      </Provider>
    </ThemeProvider>
  );
};

export default MyApp;
