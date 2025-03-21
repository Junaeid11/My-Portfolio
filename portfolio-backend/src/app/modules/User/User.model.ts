import { model, Schema } from "mongoose";
import { TUser, UserModel } from "./user.interface";
import bcrypt from 'bcrypt';
import config from "../../config";
const userSchema = new Schema<TUser>({
    name: {
        type: String,
        required: [true, 'Name is required!']

    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],

    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    isBlocked: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})
userSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this;
    user.password = await bcrypt.hash(user.password,
        parseInt(config.bcrypt_salt_rounds as string)
    )
    next()
}
)

//for removing __v and also removing password from response
userSchema.set('toJSON', {
    transform: (doc, value) => {
        delete value.__v;
        delete value.password;
        return value;
    }
})




userSchema.statics.isUserExistByEmail = async function (email: string) {
    return await this.findOne({ email })
}
userSchema.statics.isPasswordMatched = async function (plainTextPassword: string, hashedPassword: string) {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
}


export const User = model<TUser, UserModel>('user', userSchema);