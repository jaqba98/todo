import { Injectable } from "@angular/core";

import { TodoCoreStoreModel } from "../../model/core/todo-core-store.model";
import { BaseStoreService } from "../base/base-store.service";

@Injectable({ providedIn: "root" })
export class TodoCoreStoreService extends BaseStoreService<TodoCoreStoreModel> {
    constructor() {
        super({ todos: new Map() });
    }
}
