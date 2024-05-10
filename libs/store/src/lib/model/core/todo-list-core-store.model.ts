import { BaseFormModel } from "../base/base-form.model";

export interface AddTodoItemCoreStoreModel extends BaseFormModel {
    id: string;
}

export interface AddTodoCoreStoreModel {
    todos: AddTodoItemCoreStoreModel[];
}
