import SectionHeading from './SectionHeading';

export default function Profile({ content }) {
  return (
    <section id="profile" className="design-container ruled-section profile" aria-labelledby="profile-title">
      <SectionHeading id="profile-title">{content.title}</SectionHeading>
      <div className="profile__grid">
        <div className="profile__facts">
          <h3>{content.subtitle}</h3>
          <dl>
            {content.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <article className="profile__about">
          <h3>{content.aboutTitle}</h3>
          {content.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </article>
      </div>
    </section>
  );
}
