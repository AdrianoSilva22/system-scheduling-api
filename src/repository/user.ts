import { createUser, deleteUserById, listUserById, listUsers, updateUserById } from "../database/postgres/user";
import { UserEntity } from "../entity/user";
import { CreateUserUseCaseRepositoryInterface, DeleteUserByIdUseCaseRepositoryInterface, ListUserByIdUseCaseRepositoryInterface, ListUsersUseCaseRepositoryInterface, UpdateUserByIdUseCaseRepositoryInterface } from "../useCase/repository/user";
import { ListUserByIdUseCaseRequest, UpdateUserByIdUseCaseRequest } from "../useCase/ucio/user";

class CreateUserUserCaseRepository implements CreateUserUseCaseRepositoryInterface {
    async createUser(user: UserEntity): Promise<void> {
        await createUser(user)
    }
}
class ListUsersUseCaseRepository implements ListUsersUseCaseRepositoryInterface {
    async listUsers(): Promise<UserEntity[]> {
        return await listUsers()
    }

}
class ListUserByIdUseCaseRepository implements ListUserByIdUseCaseRepositoryInterface {
    async listUserById(ID: ListUserByIdUseCaseRequest): Promise<UserEntity> {
        return listUserById(ID)
    }
}
class UpdateUserByIdUseCaseRepository implements UpdateUserByIdUseCaseRepositoryInterface {
    async updateUserById(req: UpdateUserByIdUseCaseRequest): Promise<UserEntity> {
        return updateUserById(req)
    }
}
class DeleteUserByIdUseCaseRepository implements DeleteUserByIdUseCaseRepositoryInterface {
    async deleteUserById(ID: string): Promise<void> {
        await deleteUserById(ID)
    }
}

export {
    CreateUserUserCaseRepository, DeleteUserByIdUseCaseRepository, ListUserByIdUseCaseRepository,
    ListUsersUseCaseRepository, UpdateUserByIdUseCaseRepository
};

