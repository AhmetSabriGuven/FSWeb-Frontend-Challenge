import ThemeAsset from './ThemeAsset';

export default function Hero({ content, links }) {
  return (
    <section className="design-container hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <div className="eyebrow">
          <ThemeAsset light="/assets/name-line-light.svg" dark="/assets/name-line-dark.svg" alt="" />
          <span>{content.name}</span>
        </div>
        <h1 id="hero-title">{content.title.map((line) => <span key={line}>{line}</span>)}</h1>
        <p className="hero__intro">{content.intro}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#contact">{content.hire}</a>
          <a className="button button--social" href={links.github} target="_blank" rel="noreferrer">
            <ThemeAsset light="/assets/github-light.svg" dark="/assets/github-dark.svg" alt="" />
            GitHub
          </a>
          <a className="button button--social" href={links.linkedin} target="_blank" rel="noreferrer">
            <ThemeAsset light="/assets/linkedin-light.svg" dark="/assets/linkedin-dark.svg" alt="" />
            LinkedIn
          </a>
        </div>
      </div>
      <ThemeAsset
        className="hero__image"
        light="/assets/hero-light.png"
        dark="/assets/hero-dark.png"
        alt={content.imageAlt}
      />
    </section>
  );
}
