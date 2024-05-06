import { Injectable } from "@angular/core";

import { BaseStoreService } from "../base/base-store.service";
import { AddTodoFormStoreModel } from "../../model/form/add-todo-form-store.model";
import { PriorityEnum } from "../../enum/priority.enum";

@Injectable({ providedIn: "root" })
export class AddTodoFormStoreService extends BaseStoreService<AddTodoFormStoreModel> {
    constructor() {
        super({
            name: "",
            description: "",
            range: 0,
            deadline: new Date(),
            priority: PriorityEnum.low,
            tags: ""
        });
    }
}
