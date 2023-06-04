import {ResourceOptions} from "adminjs";
import {UserPermission} from "../../models/User";


const userResourceOptions: ResourceOptions = {
    navigation: 'Administração',
    properties: {
        birth: {
            type: 'date'
        },
        password: {
            type: 'password'
        },
        role: {
            availableValues: [
                { value: UserPermission.User.getValue(), label: UserPermission.User.getLabel() },
                { value: UserPermission.Admin.getValue(), label: UserPermission.Admin.getLabel() }
            ]
        }
    },
    editProperties: [
        'firstName',
        'lastName',
        'phone',
        'birth',
        'email',
        'password',
        'role'
    ],
    filterProperties: [
        'firstName',
        'lastName',
        'phone',
        'birth',
        'email',
        'role',
        'createdAt',
        'updatedAt'
    ],
    listProperties: [
        'id',
        'firstName',
        'email',
        'role'
    ],
    showProperties: [
        'id',
        'firstName',
        'lastName',
        'phone',
        'birth',
        'email',
        'role',
        'createdAt',
        'updatedAt'
    ],
}

export { userResourceOptions }