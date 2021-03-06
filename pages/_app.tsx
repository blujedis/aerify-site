import type { AppProps } from 'next/app';
import Providers from '../providers';
import 'theme/base.scss';

function App(props: AppProps & { err?: Error & Record<string, any> }) {
  const { Component, pageProps } = props;
  return (
    <Providers {...props}>
      <Component {...pageProps} />
    </Providers>
  );
}

export default App;
