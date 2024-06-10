import { Injectable } from "@angular/core";

import { PriorityEnum } from "../../enum/priority.enum";
import {
  AddTodoFormStoreModel
} from "../../model/form/add-todo-form-store.model";
import { BaseStoreService } from "../base/base-store.service";

@Injectable({ providedIn: "root" })
export class AddTodoFormStoreService
  extends BaseStoreService<AddTodoFormStoreModel> {
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
