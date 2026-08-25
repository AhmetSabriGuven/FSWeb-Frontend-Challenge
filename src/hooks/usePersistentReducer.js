import { useEffect, useReducer } from 'react';

export function usePersistentReducer(reducer, storageKey, getInitialState) {
  const initializer = () => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      return stored ? { ...getInitialState(), ...JSON.parse(stored) } : getInitialState();
    } catch {
      return getInitialState();
    }
  };

  const [state, dispatch] = useReducer(reducer, undefined, initializer);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state, storageKey]);

  return [state, dispatch];
}
