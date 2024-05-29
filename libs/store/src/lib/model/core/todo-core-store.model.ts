import { BaseTodoFormStoreModel } from "../base/base-todo-form-store.model";

export interface TodoCoreElementStoreModel extends BaseTodoFormStoreModel {
    isEdited: boolean;
}

export interface TodoCoreStoreModel {
    todos: Map<string, TodoCoreElementStoreModel>;
}
