export interface TBlog {
    _id: string;
    title: string;
    content: string;
    image: string;
    author: string;
    isPublished: boolean;
    createdAt: string
  }
  export interface TUser {
    id: string;
    name: string;
    email:string;
    password: string;
    role?: "admin" | "user";
    isBlocked?: boolean;

}

export interface Project {
  id: string,
  _id: string ;
  name: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
  completionDate: string;
  image:  string[];
  status: string;
  features: string[];
  challenges: string[];
  opinions: string[];
}
export interface TMessage {
  _id: string
  name: string,
  email: string,
  message:string,
  createdAt: string

}