import { UserEntity } from "../../entity/user"

class CreateUserUseCaseRequest {
    name: string
    email: string
    password: string
    phone: string
    role: "manager" | "professional" | "client"

    constructor(name: string, email: string, password: string, phone: string, role: "manager" | "professional" | "client") {
        this.name = name
        this.email = email
        this.password = password
        this.phone = phone
        this.role = role
    }
}
class CreateUserUseCaseResponse {
    error: string | null

    constructor(error: string | null) {
        this.error = error
    }
}
class ListUsersUseCaseResponse {
    users: UserEntity[]
    error?: string

    constructor(users: UserEntity[], error?: string) {
        this.users = users
        this.error = error
    }
}

class ListUserByIdUseCaseRequest {
    ID: string

    constructor(ID: string) {
        this.ID = ID
    }
}
class ListUserByIdUseCaseResponse {
    user?: UserEntity
    error?: string

    constructor(user?: UserEntity | string, error?: string) {
        if (typeof user === 'string') {
            this.error = user
        } else {
            this.user = user
            this.error = error
        }
    }
}

class UpdateUserByIdUseCaseRequest {
    ID: string
    name?: string
    email?: string
    password?: string
    phone?: string
    updatedAt?: Date

    constructor(ID: string, name?: string, email?: string, password?: string, phone?: string, updatedAt?: Date) {
        this.ID = ID
        this.name = name
        this.email = email
        this.password = password
        this.phone = phone
        this.updatedAt = updatedAt
    }
}

class UpdateUserByIdUseCaseResponse {
    user?: UserEntity
    error?: string

    constructor(user?: UserEntity | string, error?: string) {
        if (typeof user === 'string') {
            this.error = user
        } else {
            this.user = user
            this.error = error
        }
    }
}

class DeleteUserByIdUseCaseRequest {
    ID: string

    constructor(ID: string) {
        this.ID = ID
    }
}
class DeleteUserByIdUseCaseResponse {
    error: string | null

    constructor(error: string | null) {
        this.error = error
    }
}

export {
    CreateUserUseCaseRequest,
    CreateUserUseCaseResponse, DeleteUserByIdUseCaseRequest,
    DeleteUserByIdUseCaseResponse, ListUserByIdUseCaseRequest,
    ListUserByIdUseCaseResponse,
    ListUsersUseCaseResponse,
    UpdateUserByIdUseCaseRequest,
    UpdateUserByIdUseCaseResponse
}

