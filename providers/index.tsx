import { FC } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import ProgressBar from './progress';
import { Provider as StoreProvider } from './store';
import { Provider as NextProvider } from 'next-auth/client';
import { RouteChangeProvider } from './routechange';
import { FetcherProvider } from './fetcher';
import { Provider as ThemeProvider, ThemeGlobals, createGlobalStyles, Consumer } from 'theme';


const Providers: FC<AppProps> = ({ children, pageProps }) => {
  return (
    <NextProvider session={pageProps.session}>
      <StoreProvider>
        <ProgressBar />
        <RouteChangeProvider>
          <ThemeProvider theme="light">
            <ThemeGlobals rules={createGlobalStyles} />
            <FetcherProvider>
              {children}
            </FetcherProvider>
          </ThemeProvider>
        </RouteChangeProvider>
      </StoreProvider >
    </NextProvider>
  );
};

export default Providers;