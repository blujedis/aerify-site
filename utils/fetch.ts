import { promise } from 'utils/misc';

const ABSOLUTE_URL = process.env.ABSOLUTE_URL;

const BASE_FETCH_PATH = process.env.NODE_ENV === 'production' ? ABSOLUTE_URL : 'http://localhost:3000';

export default async function fetcher(path: string, options?: RequestInit) {

  path = BASE_FETCH_PATH + '/' + path.replace(/^\//, '');

  const res = await promise(fetch(path, options));

  return fetch(path, options)
    .then(res => res.json())
    .then(res => {
      // do other things with response.
      return res;
    }).catch(err => {
      console.error(err);
    });

}