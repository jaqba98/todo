import { ValueFormStoreModel } from "./form-store.model";

export interface AddTodoFormStoreModel {
    title: ValueFormStoreModel<string>;
    description: ValueFormStoreModel<string>;
}
