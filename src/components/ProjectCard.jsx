import ThemeAsset from './ThemeAsset';

export default function ProjectCard({ project, labels }) {
  return (
    <article className="project-card">
      <ThemeAsset
        className="project-card__image"
        light={`/assets/${project.image}${project.themeAwareImage === false ? '' : '-light'}.png`}
        dark={`/assets/${project.image}${project.themeAwareImage === false ? '' : '-dark'}.png`}
        alt={project.imageAlt}
      />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <ul className="project-card__stack" aria-label={labels.technologies}>
        {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
      <div className="project-card__links">
        <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
        {project.site && <a href={project.site} target="_blank" rel="noreferrer">{labels.viewSite}</a>}
      </div>
    </article>
  );
}
