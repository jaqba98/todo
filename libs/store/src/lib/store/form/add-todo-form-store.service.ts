import { Injectable } from "@angular/core";

import { BaseFormStoreService } from "../base/base-form-store.service";
import { AddTodoFormStoreModel } from "../../model/form/add-todo-form-store.model";

@Injectable({ providedIn: "root" })
export class AddTodoFormStoreService extends BaseFormStoreService<AddTodoFormStoreModel> {
    constructor() {
        super({
            name: "",
            description: "",
            deadline: new Date(),
            priority: "low",
            tags: ""
        });
    }
}
