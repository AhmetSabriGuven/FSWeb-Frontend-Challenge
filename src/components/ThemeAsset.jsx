import { usePreferences } from '../hooks/usePreferences';

export default function ThemeAsset({ light, dark, ...props }) {
  const { theme } = usePreferences();
  return <img src={theme === 'dark' ? dark : light} {...props} />;
}
