
import { APPerror } from "../../errors/AppError";
import { User } from "../User/User.model";
import { TLoginUser } from "./auth.interface";
import httpStatus from "http-status";
import { createToken } from "./auth.utils";
import config from "../../config";

const loginUser = async (payload: TLoginUser) => {
    const user = await User.isUserExistByEmail(payload.email);
    if (!user) {
        throw new APPerror(httpStatus.NOT_FOUND, "User not found");
    }
    if (user.isBlocked) {
        throw new APPerror(httpStatus.FORBIDDEN, "User is blocked");
    }
    if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
        throw new APPerror(httpStatus.FORBIDDEN, 'Password is not matched')
    }
    const JwtPayload = {
        email: user.email,
        role: user.role as string
    }
    const token = createToken(JwtPayload, config.jwt_access_secret as string, config.jwt_expire_access as string)
    return {
        token
    }


}
export const authService = {
    loginUser
}