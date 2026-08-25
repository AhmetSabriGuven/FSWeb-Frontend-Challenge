import SectionHeading from './SectionHeading';

export default function Skills({ content }) {
  return (
    <section id="skills" className="design-container skills" aria-labelledby="skills-title">
      <SectionHeading id="skills-title">{content.title}</SectionHeading>
      <div className="skills__grid">
        {content.items.map((skill) => (
          <article className="skill" key={skill.name}>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
