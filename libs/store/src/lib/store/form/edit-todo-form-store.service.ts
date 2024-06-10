import { Injectable } from "@angular/core";

import { PriorityEnum } from "../../enum/priority.enum";
import {
  EditTodoFormStoreModel
} from "../../model/form/edit-todo-form-store.model";
import { BaseStoreService } from "../base/base-store.service";

@Injectable({ providedIn: "root" })
export class EditTodoFormStoreService
  extends BaseStoreService<EditTodoFormStoreModel> {
  constructor() {
    super({
      name: "",
      description: "",
      completion: 0,
      deadline: new Date(),
      priority: PriorityEnum.doItFirst,
      tags: ""
    });
  }
}
