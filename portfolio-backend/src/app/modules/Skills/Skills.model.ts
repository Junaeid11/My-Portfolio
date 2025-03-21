import { Schema, model } from "mongoose";
import {  ISkills } from "./Skills.interface";


const SkillsSchema = new Schema<ISkills>(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      unique: true,
      trim: true,
    },
    icon: {
      type: [String],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);



export const Skills = model<ISkills>("Skills", SkillsSchema);
