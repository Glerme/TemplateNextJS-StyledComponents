import Head from 'next/head';
import { NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';
import { AppProps } from 'next/dist/shared/lib/router/router';

import { AppTheme } from 'types/utils/colors';

import { DefaultLayout } from 'layouts/DefaultLayout';

import { theme } from 'styles/theme';
import GlobalStyles from 'styles/global';
import { ThemeProvider } from 'styled-components';
import { ErrorBoundary } from 'components/ErrorBoundary';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [appTheme, setAppTheme] = useState<AppTheme>('light');

  const toggleAppTheme = useCallback(() => {
    setAppTheme(state => (state === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const storageTheme = localStorage.getItem('@appTheme') as AppTheme | null;
      setAppTheme(storageTheme || 'light');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@appTheme', appTheme);
  }, [appTheme]);

  return (
    <ThemeProvider theme={theme[appTheme]}>
      <GlobalStyles />

      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NextJS Starter</title>
      </Head>

      <DefaultLayout appTheme={appTheme} toggleAppTheme={toggleAppTheme}>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </DefaultLayout>
    </ThemeProvider>
  );
};

export default MyApp;
