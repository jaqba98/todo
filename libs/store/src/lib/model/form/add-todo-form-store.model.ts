import { PriorityEnum } from "../../enum/priority.enum";

export interface AddTodoFormStoreModel {
    name: string;
    description: string;
    deadline: Date;
    priority: PriorityEnum;
    tags: string;
}
