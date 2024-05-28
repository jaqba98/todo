import { Injectable } from "@angular/core";

import { PriorityEnum } from "../../enum/priority.enum";
import { BaseStoreService } from "../base/base-store.service";
import { EditTodoFormStoreModel } from "../../model/form/edit-todo-form-store.model";

@Injectable({ providedIn: "root" })
export class EditTodoFormStoreService extends BaseStoreService<EditTodoFormStoreModel> {
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
