import { useEffect } from 'react';
import { useLastRef } from './lastref';

/**
 * Persists/maintains setTimeout using useLastRef hook.
 * 
 * @example
 * useTimeout(() => {}, 1000)
 *
 * @param cb callback to run after delay
 * @param timeout the timeout delay (in ms)
 */
export function useTimeout(cb: Function, timeout: number | null) {
  
  const cbRef = useLastRef(cb);

  useEffect(() => {

    if (timeout == null || typeof window === 'undefined') 
      return;

    const timeoutId = window.setTimeout(() => {
      cbRef.current?.();
    }, timeout);

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };

  }, [cbRef, timeout]);

}
