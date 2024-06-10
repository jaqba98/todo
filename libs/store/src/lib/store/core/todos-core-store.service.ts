import { Injectable } from "@angular/core";
import { v4 } from "uuid";

import {
  TodosCoreStoreModel,
  TodoCoreStoreModel
} from "../../model/core/todos-core-store.model";
import { BaseStoreService } from "../base/base-store.service";
import { cloneDeep } from "lodash";

@Injectable({ providedIn: "root" })
export class TodosCoreStoreService
  extends BaseStoreService<TodosCoreStoreModel> {
  constructor() {
    super({ todos: new Map() });
  }

  addTodo(newTodo: TodoCoreStoreModel) {
    const id = v4();
    const todo = cloneDeep(newTodo);
    this.checkTodoNotExist(id);
    this.model.todos.set(id, todo);
    this.emitModel();
  }

  deleteTodo(id: string) {
    this.checkTodoExist(id);
    this.model.todos.delete(id);
    this.emitModel();
  }

  editTodo(id: string, newTodo: TodoCoreStoreModel) {
    this.checkTodoExist(id);
    const todo = cloneDeep(newTodo);
    this.model.todos.set(id, todo);
    this.emitModel();
  }

  changeIsEdited(id: string, isEdited: boolean) {
    this.checkTodoExist(id);
    const oldModel = this.model.todos.get(id);
    if (!oldModel) throw new Error("The oldModel is undefined!");
    const newModel = cloneDeep(oldModel);
    newModel.isEdited = isEdited;
    this.model.todos.set(id, newModel);
    this.emitModel();
  }

  private checkTodoExist(id: string) {
    if (this.model.todos.has(id)) return;
    throw new Error(`There is no task with the given id: ${id}`);
  }

  private checkTodoNotExist(id: string) {
    if (!this.model.todos.has(id)) return;
    throw new Error(`There is already a task with the id: ${id}`);
  }
}
