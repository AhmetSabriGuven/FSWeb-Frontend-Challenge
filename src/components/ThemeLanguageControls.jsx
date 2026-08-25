import { usePreferences } from '../hooks/usePreferences';
import ThemeAsset from './ThemeAsset';

const statusText = {
  idle: '',
  loading: 'Data syncing',
  success: 'Data synced',
  fallback: 'Using local data',
};

export default function ThemeLanguageControls({ content, syncStatus }) {
  const { language, theme, toggleLanguage, toggleTheme } = usePreferences();
  const isDark = theme === 'dark';

  return (
    <div className="preferences" aria-label={content.label}>
      <span className={`sync-indicator sync-indicator--${syncStatus}`} role="status">
        {statusText[syncStatus]}
      </span>
      <button
        className="theme-control"
        type="button"
        onClick={toggleTheme}
        aria-pressed={isDark}
        aria-label={isDark ? content.lightMode : content.darkMode}
      >
        <span className="theme-switch" aria-hidden="true">
          <ThemeAsset
            className="theme-switch__knob"
            light="/assets/toggle-knob-light.svg"
            dark="/assets/toggle-knob-dark.svg"
            alt=""
          />
          <ThemeAsset
            className="theme-switch__detail"
            light="/assets/toggle-detail-light.svg"
            dark="/assets/toggle-detail-dark.svg"
            alt=""
          />
        </span>
        <span>{isDark ? content.lightMode : content.darkMode}</span>
      </button>
      <span className="preferences__separator" aria-hidden="true">|</span>
      <button className="language-control" type="button" onClick={toggleLanguage}>
        {language === 'tr' ? (
          <>TO <span>ENGLISH</span></>
        ) : (
          <><span>TÜRKÇE</span>{content.switchToTurkishSuffix}</>
        )}
      </button>
    </div>
  );
}
