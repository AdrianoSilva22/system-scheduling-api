import { CreateSchedulingUseCaseRequest, ListSchedulingByIdUseCaseRequest } from "../useCase/ucio/scheduling";
import { CreateSchedulingUseCaseValidateInterface, ListSchedulingByIdUseCaseValidateInterface } from "../useCase/validate/scheduling";
import { checkEmpty, checkStringEmpty } from "./validate";

class CreateSchedulingUseCaseValidate implements CreateSchedulingUseCaseValidateInterface {
    validateScheduling(req: CreateSchedulingUseCaseRequest): string | null {
        const { client, horarioId } = req
        if (checkEmpty(client)) return 'O ID do cliente deve ser preenchido!'
        if (checkEmpty(horarioId)) return 'O ID do horário deve ser preenchido!'

        return null
    }
}

class ListSchedulingByIdUseCaseValidate implements ListSchedulingByIdUseCaseValidateInterface {
    validateSchedulingById(req: ListSchedulingByIdUseCaseRequest): string | null {

        if (checkEmpty(req)) return "O Id é necessário"

        return null
    }
}



export {
    CreateSchedulingUseCaseValidate,
    ListSchedulingByIdUseCaseValidate
}