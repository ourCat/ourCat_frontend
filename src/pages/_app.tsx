import React from 'react';
import Head from 'next/head';
import GlobalStyles from 'styles/GlobalStyles';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import Themes from 'styles/Theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={Themes}>
      <Head>
        <title>타이틀</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
