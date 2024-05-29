import { PriorityEnum } from "../../enum/priority.enum";

export interface BaseTodoFormStoreModel {
    name: string;
    description: string;
    range: number;
    deadline: Date;
    priority: PriorityEnum;
    tags: string;
}
