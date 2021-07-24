
import { useState, useRef, MutableRefObject } from 'react';

/**
 * Creates a hook with normalized persistent state this
 * is useful when needing to maintain state when outside 
 * React's context while maintaining compatibility when inside.
 * 
 * @param defaultValue the default value for the state.
 * @returns a hook normalized using both useState and ref
 */
function useRefState<T = any>(defaultValue: T) {

  const [state, setStateBase] = useState(defaultValue);
  const refState = useRef(state);

  const setState = (value: T) => {
    if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
      if (Array.isArray(value)) {
        refState.current = [...value] as any;
        setStateBase([...value] as any);
      }
      else {
        refState.current = { ...value };
        setStateBase({ ...value });
      }
    }
    else {
      refState.current = value;
      setStateBase(value);
    }
  };

  return [state, setState, refState] as [T, (value: T) => void, MutableRefObject<T>];

}

export default useRefState;