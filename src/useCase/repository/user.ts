import { UserEntity } from "../../entity/user"
import { DeleteUserByIdUseCaseRequest, ListUserByIdUseCaseRequest, UpdateUserByIdUseCaseRequest } from "../ucio/user"

interface CreateUserUseCaseRepositoryInterface {
    createUser(user: UserEntity): Promise<void>
}
interface ListUsersUseCaseRepositoryInterface {
    listUsers(): Promise<UserEntity[]>
}
interface ListUsersByIdUseCaseRepositoryInterface {
    listUserById(ID: ListUserByIdUseCaseRequest): Promise<UserEntity>
}
interface UpdateUsersByIdUseCaseRepositoryInterface {
    updateUserById(ID: UpdateUserByIdUseCaseRequest): Promise<UserEntity>
}
interface DeleteUsersByIdUseCaseRepositoryInterface {
    deleteUserById(ID: DeleteUserByIdUseCaseRequest): Promise<void>
}

export {
    CreateUserUseCaseRepositoryInterface,
    ListUsersByIdUseCaseRepositoryInterface,
    ListUsersUseCaseRepositoryInterface,
    UpdateUsersByIdUseCaseRepositoryInterface,
    DeleteUsersByIdUseCaseRepositoryInterface
}

