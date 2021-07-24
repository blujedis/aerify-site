import { FC } from 'react';
import fetcher from 'hooks/fetcher';
import { SWRConfig } from 'swr';

const FetcherProvider: FC = ({ children }) => {
  return (
    <SWRConfig value={{
      fetcher
    }}>
      {children}
    </SWRConfig>
  );
}

export { FetcherProvider };