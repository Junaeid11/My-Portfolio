import { User } from "./User.model";

const createUserIntoDb = async (data: string) => {
    const result = await User.create(data);
    return result;
}


export const userService = {
    createUserIntoDb,

}