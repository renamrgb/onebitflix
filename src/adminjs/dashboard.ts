import AdminJs, { PageHandler } from 'adminjs'
import { Category, Course, Episode, User } from '../models'
import {UserPermission} from "../models/User";

export const dashboardOptions: {
    handler?: PageHandler
    component?: string
} = {
    component: AdminJs.bundle('../adminjs/components/Dashboard'),
    handler: async (req, res, context) => {
        const courses = await Course.count()
        const episodes = await Episode.count()
        const category = await Category.count()
        const standardUsers = await User.count({ where: { role: UserPermission.User.getValue() } })

        res.json({
            'Cursos': courses,
            'Episódios': episodes,
            'Categorias': category,
            'Usuários Padrão': standardUsers
        })
    },
}