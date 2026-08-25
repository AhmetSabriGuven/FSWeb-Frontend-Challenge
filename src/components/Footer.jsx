export default function Footer({ content, links }) {
  return (
    <footer id="contact" className="site-footer">
      <div className="design-container site-footer__content">
        <h2>{content.title}</h2>
        <div className="site-footer__bottom">
          <a className="footer-email" href={`mailto:${content.email}`}>
            <span aria-hidden="true">👉</span>{content.email}
          </a>
          <nav className="footer-links" aria-label={content.socialLabel}>
            <a className="footer-github" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="footer-linkedin" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
