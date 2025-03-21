import UpdateProjectForm from '@/components/shared/updateProject';
import { getSingleProject } from '@/service/Projects'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UpdateProject = async({ params }: { params: any }) => {
  const {projectId} = await params
  const { data: project } = await getSingleProject(projectId);

  
    return (
    <div>
      <UpdateProjectForm project={project} />
    </div>
  )
}

export default UpdateProject
