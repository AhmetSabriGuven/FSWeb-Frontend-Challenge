import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ThemeLanguageControls from './components/ThemeLanguageControls';
import { usePortfolioData } from './hooks/usePortfolioData';

export default function App() {
  const { content, syncStatus } = usePortfolioData();

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">{content.accessibility.skipToContent}</a>
      <div className="design-container utility-row">
        <ThemeLanguageControls content={content.controls} syncStatus={syncStatus} />
      </div>
      <Header content={content} />
      <main id="main-content">
        <Hero content={content.hero} links={content.links} />
        <Skills content={content.skills} />
        <Profile content={content.profile} />
        <Projects content={content.projects} />
      </main>
      <Footer content={content.footer} links={content.links} />
    </div>
  );
}
