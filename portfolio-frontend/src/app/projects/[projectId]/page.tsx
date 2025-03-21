/* eslint-disable @typescript-eslint/no-explicit-any */
import ProjectDetails from "@/components/shared/ProjectDetails";
import { getSingleProject } from "@/service/Projects";

const ProjectDetailsPage = async ({ params }: { params: any }) => {

  const { projectId } =params; 
  
  if (!projectId) {
   
    return <p>Invalid Project ID</p>;
  }

  const { data: project } = await getSingleProject(projectId);

  return <ProjectDetails project={project} />;
};

export default ProjectDetailsPage;
