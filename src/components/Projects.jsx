import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

export default function Projects({ content }) {
  return (
    <section id="projects" className="design-container ruled-section projects" aria-labelledby="projects-title">
      <SectionHeading id="projects-title">{content.title}</SectionHeading>
      <div className="projects__grid">
        {content.items.map((project) => <ProjectCard key={project.name} project={project} labels={content} />)}
      </div>
    </section>
  );
}
