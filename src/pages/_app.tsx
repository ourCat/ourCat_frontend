import React from 'react';
import Head from 'next/head';
import GlobalStyles from 'styles/GlobalStyles';

import { ThemeProvider } from 'styled-components';
import Themes from 'styles/Theme';

const MyApp = () => {
  return (
    <ThemeProvider theme={Themes}>
      <Head>
        <title>타이틀</title>
      </Head>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default MyApp;
