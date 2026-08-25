import { useEffect } from 'react';
import { usePersistentReducer } from '../hooks/usePersistentReducer';
import { PreferencesContext } from './preferences-context';

const STORAGE_KEY = 'portfolio-preferences';

function getDefaults() {
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const browserLanguage = navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'tr';
  return { theme: prefersDark ? 'dark' : 'light', language: browserLanguage };
}

function preferencesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'TOGGLE_LANGUAGE':
      return { ...state, language: state.language === 'tr' ? 'en' : 'tr' };
    default:
      return state;
  }
}

export function PreferencesProvider({ children }) {
  const [state, dispatch] = usePersistentReducer(preferencesReducer, STORAGE_KEY, getDefaults);

  useEffect(() => {
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.lang = state.language;
    document.documentElement.style.colorScheme = state.theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      state.theme === 'dark' ? '#252128' : '#ffffff',
    );
  }, [state]);

  const value = {
    ...state,
    toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
    toggleLanguage: () => dispatch({ type: 'TOGGLE_LANGUAGE' }),
  };

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}
