import { AddTodoFormStoreModel } from "../form/add-todo-form-store.model";

export interface AddTodoItemCoreStoreModel extends AddTodoFormStoreModel {
    id: string;
}

export interface AddTodoCoreStoreModel {
    todos: AddTodoItemCoreStoreModel[];
}
