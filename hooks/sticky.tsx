import { useEffect, useState, useRef } from 'react';
import useMedia from './media';

/**
 * Creates a hook for managing a sticky header element.
 * 
 * @example
 * const { isSticky, parent } = useSticky();
 * <div ref={parent}>
 *  <header className={isSticky ? 'sticky' : ''}>
 *     Your Header Content.
 *   </header>
 * </div>
 * 
 * @example 
 * .sticky {
 *   z-index: 10;
 *   position: fixed;
 *   top: 0;
 *   left: 0;
 *   width: 100%;
 *   animation: moveDown 0.3s ease-in-out;
 * }
 * 
 * @param props options for sticky header.
 * @returns a hook useful for managing a sticky header.
 */
function useSticky(props?: { delay?: number }) {

  props = {
    delay: 100, // the debounce delay.
    ...props
  };

  const { delay } = props;

  const { isMobileBreak } = useMedia();
  const [isSticky, setSticky] = useState(false);
  const parent = useRef<HTMLElement>(null);

  useEffect(() => {

    const handleScroll = () => {

      if (!parent || !parent.current)
        return setSticky(false);

      const scrollY = window.scrollY;
      const bottom = parent.current.getBoundingClientRect().bottom;

      if (scrollY > bottom || (scrollY < bottom && scrollY > 0)) {
        setSticky(true);
      }
      else {
        setSticky(false);
      }

    }

    const debounce = (callback: (...args: any[]) => void, time?: number) => {
      let interval: NodeJS.Timeout | undefined;
      return (...args: any[]) => {
        if (interval)
          clearTimeout(interval);
        interval = setTimeout(() => {
          interval = undefined;
          callback(...args);
        }, time);
      };
    };


    let handler: (...args: any[]) => void;

    if (!isMobileBreak) {
      handler = debounce(handleScroll, delay);
      window.addEventListener("scroll", handler);
    }

    return () => {
      if (handler)
        window.removeEventListener("scroll", handler);
    };

  }, [delay, isMobileBreak]);

  return { isSticky, parent };

}

export default useSticky;

