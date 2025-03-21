
"use server";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { revalidateTag } from "next/cache";


export const getMyProjects = async (): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/projects`,
      {
        method: "GET",
      
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
export const addProject = async (projectData: FormData): Promise<any> => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
        method: "POST",
        body: projectData,
      
      });
      revalidateTag("project");
      return res.json();
    } catch (error: any) {
      return Error(error);
    }
  };
  export const getSingleProject = async (id: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/projects/${id}`,
        {
          next: {
            tags: ["Project"],
          },
        }
      );
      const data = await res.json();
      console.log(data)
      return data;
    } catch (error: any) {
      return Error(error.message);
    }
  };
  export const updateProject = async (
    projectData: FormData,
    id: string
  ): Promise<any> => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/projects/${id}`,
        {
          method: "PATCH",
          body: projectData,
          // headers: {
          //   Authorization: (await cookies()).get("accessToken")!.value,
          // },
        }
      );
      revalidateTag("Projects");
      return res.json();
    } catch (error: any) {
      return Error(error);
    }
  };
  export const deleteProjects = async (
    id: string
  ): Promise<any> => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/projects/${id}`,
        {
          method: "DELETE",
          
        }
      );
      revalidateTag("PROJECTS");
      return res.json();
    } catch (error: any) {
      return Error(error);
    }
  };