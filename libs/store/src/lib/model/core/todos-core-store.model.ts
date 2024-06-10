import { TodoBaseStoreModel } from "../base/todo-base-store.model";

export interface TodoCoreStoreModel extends TodoBaseStoreModel {
  isEdited: boolean;
}

export interface TodosCoreStoreModel {
  todos: Map<string, TodoCoreStoreModel>;
}
