// src/components/ProjectsSection.tsx
import { projects, Project } from '@/data/projects'; // Make sure the path to your projects data is correct

// Define the ProjectCard component here (or import it if you moved it to its own file)
const ProjectCard = ({ project }: { project: Project }) => (
  <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
    <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-400">{project.title}</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-3">{project.description}</p>
    {project.tags && (
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-medium px-2.5 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
    )}
    <a
      href={project.link}
      target="_blank" // Open link in a new tab
      rel="noopener noreferrer" // Security best practice for target="_blank"
      className="text-blue-600 dark:text-blue-400 hover:underline"
    >
      View Project &rarr; {/* Or "View Code", "Live Demo", etc. */}
    </a>
  </div>
);


export default function ProjectsSection() {
  return (
    // Add the id="projects" to this main section tag
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-600 dark:text-purple-400">
          My Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
