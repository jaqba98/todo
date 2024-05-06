import { PriorityEnum } from "../../enum/priority.enum";

export interface AddTodoItemCoreStoreModel {
    name: string;
    description: string;
    deadline: Date;
    priority: PriorityEnum;
    tags: string;
}

export interface AddTodoCoreStoreModel {
    todos: AddTodoItemCoreStoreModel[];
}
