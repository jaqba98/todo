import { AddTodoFormStoreModel } from "../form/add-todo-form-store.model";

export interface AddTodoItemCoreStoreModel extends AddTodoFormStoreModel {
}

export interface AddTodoCoreStoreModel {
    todos: AddTodoItemCoreStoreModel[];
}
