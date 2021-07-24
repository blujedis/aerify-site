import qs from 'querystring';

export type BodyInit = Blob | BufferSource | FormData | URLSearchParams | ReadableStream<Uint8Array> | string | Record<string, any>;

export interface IRequestInit extends Omit<RequestInit, 'url' | 'body'> {
  body?: BodyInit;
  query?: Record<string, any>;
}

export interface IFetchError extends Error {
  status: number;
  statusText: string;
  [key: string]: any;
}

/**
 * Common statuses.
 */
const STATUS_MAP = {
  400: 'Bad Request',
  401: 'Unauthenticated',
  403: 'Unauthorized',
  405: 'Method Not Allowed',
  404: 'Not Found',
  500: 'Server Error'
} as Record<number, string>;

/**
 * Checks if body should be stringified.
 * 
 * @param body body value to be inspected.
 */
function shouldStringify(body: BodyInit) {
  if (
    typeof body === 'string' ||
    (body instanceof Blob) ||
    (body instanceof ArrayBuffer) ||
    (body instanceof FormData) ||
    (body instanceof ReadableStream) ||
    (body instanceof URLSearchParams)
  )
    return false;
  return typeof body === 'object';
}

/**
 * Safely parses JSON or returns original value.
 * 
 * @param value the value to be parsed.
 */
function tryParseJSON(value: unknown) {
  try {
    return JSON.parse(value as any);
  }
  catch (_) {
    return value;
  }
}

/**
 * Safely stringify.
 * 
 * @param value the value to stringify.
 */
function tryStringifyJSON(value: unknown) {
  try {
    return JSON.stringify(value) as string;
  }
  catch (_) {
    return value as string;
  }
}

/**
 * Creates normalized Fetch request.
 * 
 * @param endpoint the endpoint to be fetched.
 * @param config optional fetch configuration.
 */
async function fetcher<T = any>(endpoint: string, initConfig: IRequestInit = {}) {

  try {

    const { query, ...config } = initConfig;

    config.method = config.method || 'GET';

    if (query)
      endpoint = endpoint + '?' + qs.stringify(query);

    if (config.body && shouldStringify(config.body))
      config.body = tryStringifyJSON(config.body);

    const headers = !(config.headers instanceof Headers) ? new Headers(config.headers || {}) : config.headers;

    // if content-type not set assume json.
    if (!headers.has('Content-Type') && !headers.has('content-type'))
      headers.set('Content-Type', 'application/json');

    config.headers = headers;

    const request = new Request(endpoint, config as RequestInit);
    const res = await fetch(request);

    if (!res.ok)
      return Promise.reject({ status: res.status, statusText: res.statusText });

    const text = await res.text();
    const data = text === '' ? null : tryParseJSON(text);

    return data as null | T;

  }
  catch (err) {

    const error = err as IFetchError;
    error.status = (err.status || 500) as number;
    error.name = error.name || STATUS_MAP[error.status] || 'Server Error';
    error.statusText = error.statusText || 'Unknown Server Error.';
    return Promise.reject(error);
    
  }

}

export default fetcher
