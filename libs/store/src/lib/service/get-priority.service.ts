import { PriorityEnum } from "../enum/priority.enum";

export class GetPriorityService {
    getArray() {
        return Object.values(PriorityEnum);
    }
}
