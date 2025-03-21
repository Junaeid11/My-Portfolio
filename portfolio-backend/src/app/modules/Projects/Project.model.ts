import  { model, Schema } from "mongoose";
import { TProject } from "./project.interface";

const projectSchema = new Schema<TProject>(
    {
     
      name: {
        type: String,
        required: [true, "Project name is required!"],
      },
      description: {
        type: String,
        required: [true, "Project description is required!"],
      },
      technologies: {
        type: [String],
        required: [true, "Technologies used are required!"],
      },
      link: {
        type: String,
        required: [true, "Project link is required!"],
      },
      github: {
        type: String,
        required: [true, "GitHub link is required!"],
      },
      completionDate: {
        type: Date,
        required: [true, "Completion date is required!"],
      },
      image: {
        type: [String],
        required: [true, "Project image is required!"],
      },
      status: {
        type: String,
        enum: ["Completed", "In Progress", "Pending"],
        default: "Pending",
      },
      features: {
        type: [String],
        required: [true, "Project features are required!"],
      },
      challenges: {
        type: [String],
        required: [true, "Project challenges are required!"],
      },
      opinions: {
        type: [String],
        required: [true, "Project opinions are required!"],
      },
    },
    {
      timestamps: true,
    }
  );
  
export const Project = model<TProject>("Project", projectSchema);

projectSchema.set('toJSON', {
    transform:(doc,value)=>{
        delete value.__v
        return value
    }
})


