import { Injectable } from "@angular/core";

import { AddTodoFormStoreModel } from "../../model/form/add-todo-form-store.model";
import { FormStore } from "./form.store";

@Injectable({ providedIn: "root" })
export class AddTodoFormStore extends FormStore<AddTodoFormStoreModel> {
    constructor() {
        super({
            title: "",
            description: ""
        });
    }
}
