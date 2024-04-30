import { ValueFormStoreModel } from "../model/form/form-store.model";

export class CreateFormValue {
    create<TValue>(value: TValue): ValueFormStoreModel<TValue> {
        return { value };
    }
}
