/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { TSkills } from "@/components/shared/Skillbar";
import Spinner from "@/components/shared/Spinner";
import { deleteSkill, getMySkills } from "@/service/skills";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const SkillData = () => {
  const [skills, setSkills] = useState<TSkills[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const { data } = await getMySkills();
        setSkills(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const handleDelete = async (skill: TSkills) => {
    try {
      const res = await deleteSkill(skill._id);
      if (res.success) {
        toast.success(res.message);
        setSkills((prevSkills) => prevSkills.filter((item) => item._id !== skill._id));
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("An error occurred while deleting the skill.");
    }
  };

  if (loading) return <Spinner />;
  if (error) return <p className="text-center text-red-500">Failed to load skills</p>;

  return (
    <div className="mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Skills</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 text-left">No</th>
              <th className="py-2 px-4 text-left">Icon</th>
              <th className="py-2 px-4 text-left">Skill Name</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill, index) => (
              <tr key={skill._id} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">
                  {skill.icon?.length > 0 && (
                    <Image
                      src={skill.icon[0]}
                      alt={skill.name}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  )}
                </td>
                <td className="py-2 px-4 font-semibold">{skill.name}</td>
                <td className="py-2 px-4">
                  <button
                    className="text-gray-500 hover:text-red-500"
                    title="Delete"
                    onClick={() => handleDelete(skill)}
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SkillData;
