import { Injectable } from "@angular/core";
import { v4 } from "uuid";

import { TodoCoreElementStoreModel, TodoCoreStoreModel } from "../../model/core/todo-core-store.model";
import { BaseStoreService } from "../base/base-store.service";

@Injectable({ providedIn: "root" })
export class TodoCoreStoreService extends BaseStoreService<TodoCoreStoreModel> {
    constructor() {
        super({ todos: new Map() });
    }

    addTodo(newTodo: TodoCoreElementStoreModel) {
        const id = v4();
        this.model.todos.set(id, newTodo);
        this.setModel(this.model);
    }

    deleteTodo(id: string) {
        this.model.todos.delete(id);
        this.setModel(this.model);
    }

    switchEditMode(id: string) {
        if (!this.model.todos.has(id)) return;
        const oldModel = this.model.todos.get(id);
        if (!oldModel) return;
        oldModel.isEdited = !oldModel.isEdited;
        this.model.todos.set(id, oldModel);
        this.setModel(this.model);
    }
}
