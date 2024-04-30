import { Injectable } from "@angular/core";
import { ValueFormStoreModel } from "../model/form/form-store.model";

@Injectable({ providedIn: "root" })
export class CreateFormValue {
    create<TValue>(value: TValue): ValueFormStoreModel<TValue> {
        return { value };
    }
}
