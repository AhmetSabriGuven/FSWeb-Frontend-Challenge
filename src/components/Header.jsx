import ThemeAsset from './ThemeAsset';

export default function Header({ content }) {
  return (
    <header className="design-container site-header">
      <a className="logo" href="#main-content" aria-label={content.accessibility.home}>
        <ThemeAsset light="/assets/logo-light.svg" dark="/assets/logo-dark.svg" alt="" />
        <span>A</span>
      </a>
      <nav className="main-nav" aria-label={content.accessibility.primaryNavigation}>
        <a href="#skills">{content.nav.skills}</a>
        <a href="#projects">{content.nav.projects}</a>
        <a className="button button--outline header-hire" href="#contact">{content.nav.hire}</a>
      </nav>
    </header>
  );
}
