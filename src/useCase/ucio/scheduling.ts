import { AvailableScheduleEntity } from "../../entity/availableSchedule"
import { SchedulingEntity } from "../../entity/scheduling"
import { UserEntity } from "../../entity/user"

class CreateSchedulingUseCaseRequest {
    client: UserEntity
    horario: AvailableScheduleEntity

    constructor(client: UserEntity, horarioId: AvailableScheduleEntity) {
        this.client = client
        this.horario = horarioId
    }
}

class CreateSchedulingUseCaseResponse {
    error: string | null

    constructor(error: string | null) {
        this.error = error
    }
}

class ListSchedulingsUseCaseResponse {
    schedulings: SchedulingEntity[]
    error?: string

    constructor(schedulings: SchedulingEntity[], error?: string) {
        this.schedulings = schedulings
        this.error = error
    }
}

class ListSchedulingByIdUseCaseRequest {
    ID: string

    constructor(ID: string) {
        this.ID = ID
    }
}
class ListSchedulingByIdUseCaseResponse {
    scheduling?: SchedulingEntity
    error?: string

    constructor(scheduling?: SchedulingEntity | string, error?: string) {
        if (typeof scheduling === 'string') {
            this.error = scheduling
        } else {
            this.scheduling = scheduling
            this.error = error
        }
    }
}

class UpdateSchedulingByIdUseCaseRequest {
    ID: string
    client?: UserEntity
    horario?: AvailableScheduleEntity
    updatedAt?: Date

    constructor(ID: string, client?: UserEntity, horario?: AvailableScheduleEntity, updatedAt?: Date) {
        this.ID = ID
        this.client = client
        this.horario = horario
        this.updatedAt = updatedAt
    }
}

class UpdateSchedulingByIdUseCaseResponse {
    scheduling?: SchedulingEntity
    error?: string

    constructor(scheduling?: SchedulingEntity | string, error?: string) {
        if (typeof scheduling === 'string') {
            this.error = scheduling
        } else {
            this.scheduling = scheduling
            this.error = error
        }
    }
}

class DeleteSchedulingByIdUseCaseRequest {
    ID: string

    constructor(ID: string) {
        this.ID = ID
    }
}
class DeleteSchedulingByIdUseCaseResponse {
    error: string | null

    constructor(error: string | null) {
        this.error = error
    }
}

export {
    CreateSchedulingUseCaseRequest,
    CreateSchedulingUseCaseResponse,
    ListSchedulingsUseCaseResponse,
    ListSchedulingByIdUseCaseRequest,
    ListSchedulingByIdUseCaseResponse,
    UpdateSchedulingByIdUseCaseRequest,
    UpdateSchedulingByIdUseCaseResponse,
    DeleteSchedulingByIdUseCaseRequest,
    DeleteSchedulingByIdUseCaseResponse
}