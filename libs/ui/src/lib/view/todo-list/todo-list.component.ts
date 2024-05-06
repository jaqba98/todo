import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

import { AddTodoCoreStoreModel, TodoListCoreStoreService } from "@todo/store";

import { StatusType } from "../../type/status.type";

@Component({
  selector: "lib-todo-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./todo-list.component.html",
  styleUrl: "./todo-list.component.scss"
})
export class TodoListComponent {
  @Input() title = "";

  @Input() status: StatusType = "inProgress";

  model: AddTodoCoreStoreModel = {
    todos: []
  };
  
  constructor(private readonly store: TodoListCoreStoreService) {
    this.store.getModel().subscribe(model => {
      this.model = model;
    });
  }

  getTasks() {
    if (this.status === "inProgress") {
      return this.model.todos.filter(todo => todo.range < 100);
    }
    return this.model.todos.filter(todo => todo.range === 100);
  }
}
