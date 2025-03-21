import { ProjectCard } from "@/components/shared/ProjectCard";
import Spinner from "@/components/shared/Spinner";
import { getMyProjects } from "@/service/Projects";
import { Project } from "@/types/types";

const Projects = async () => {
  const { data: projects, error } = await getMyProjects();

  if (error) {
    return <div>Error loading projects</div>;
  }

  if (!projects) {
    return <Spinner/>}; 

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project: Project, idx: number) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
