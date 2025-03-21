/* eslint-disable no-unused-vars */
import { Model } from "mongoose";
import { ROLE } from "./user.constant";

export interface TUser {
    id: string;
    name: string;
    email:string;
    password: string;
    role?: "admin" | "user";
    isBlocked?: boolean;

}
export type TRole = keyof typeof ROLE

export enum UserRole {
    Admin = 'admin',
    USER = 'user'
 }

export interface UserModel extends Model<TUser>{
    isPasswordMatched(plainTextPassword: string, hashedPassword: string): Promise<boolean>
    isUserExistByEmail(email: string): Promise<TUser>

}