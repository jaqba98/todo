import { Injectable } from "@angular/core";

import { FromStore } from "./form.store";
import { AddTodoFormStoreModel } from "../../model/form/add-todo-form-store.model";
import { CreateFormValue } from "../../service/create-form-value.service";

@Injectable({ providedIn: "root" })
export class AddTodoFormStore extends FromStore<AddTodoFormStoreModel> {
    constructor(private readonly formValue: CreateFormValue) {
        super({
            title: formValue.create(""),
            description: formValue.create("")
        });
    }

    clearModel() {
        this.setModel({
            title: this.formValue.create(""),
            description: this.formValue.create("")
        });
    }
}
