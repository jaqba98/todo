import { Injectable } from "@angular/core";

import { BaseStoreService } from "../base/base-store.service";
import { AddTodoCoreStoreModel } from "../../model/core/todo-list-core-store.model";

@Injectable({ providedIn: "root" })
export class TodoListCoreStoreService extends BaseStoreService<AddTodoCoreStoreModel> {
    constructor() {
        super({
            todos: []
        });
    }
}
