import { AuthenticationOptions } from '@adminjs/express'
import { User } from '../models'
import bcrypt from 'bcrypt'
import {UserPermission} from "../models/User";

export const authtenticationOptions: AuthenticationOptions = {
    authenticate: async (email, password) => {
        const user = await User.findOne({ where: { email } })

        if (user && user.role === UserPermission.Admin.getValue()) {
            const matched = await bcrypt.compare(password, user.password)

            if (matched) {
                return user
            }
        }

        return false
    },
    cookiePassword: 'senha-do-cookie'
}