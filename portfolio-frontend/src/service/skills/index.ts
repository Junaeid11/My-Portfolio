/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { revalidateTag } from "next/cache";


export const getMySkills = async (): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/skills`,
      {
        method: "GET",
      
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
export const createSkill = async (data: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills`, {
      method: "POST",

      body: data,
    });

    revalidateTag("Skills");

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
export const deleteSkill = async (
  id: string
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/skills/${id}`,
      {
        method: "DELETE",
        
      }
    );
    revalidateTag("Skills");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};