import config from "../config"
import { APPerror } from "../errors/AppError"
import { TRole } from "../modules/User/user.interface"
import { User } from "../modules/User/User.model"
import catchAsync from "../utils/catchAsync"
import httpStatus from "http-status"
import { JwtPayload } from "jsonwebtoken"
import jwt from "jsonwebtoken"


const auth = (...requiredUserRoles: TRole[]) => {
    return catchAsync(async (req, res, next) => {
        const token = req.headers.authorization?.split(' ')[1];
        const bearer = req.headers.authorization?.split(' ')[0];
        if (bearer !== 'Bearer') {
            throw new APPerror(httpStatus.UNAUTHORIZED, 'You are not authorized')
        }

        if (!token) {
            throw new APPerror(httpStatus.UNAUTHORIZED, 'You are not authorized')
        }
        const decoded = jwt.verify(token, config.jwt_access_secret as string) as JwtPayload;
        const {role, email} = decoded
        const user = await User.isUserExistByEmail(email);
        if (!user) {
            throw new APPerror(httpStatus.NOT_FOUND, "User not found");
        }
        if (user.isBlocked) {
            throw new APPerror(httpStatus.FORBIDDEN, "User is blocked");
        }
        if (requiredUserRoles && !requiredUserRoles.includes(role)) {
            throw new APPerror(httpStatus.UNAUTHORIZED, 'You are not Authorized')
        }
        req.user = { id: user.id, email: user.email, role: user.role };
        next()

    })
}
export default auth