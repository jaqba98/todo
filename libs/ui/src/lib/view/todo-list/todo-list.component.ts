import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { AddTodoCoreStoreModel, TodoListCoreStoreService } from "@todo/store";

@Component({
  selector: "lib-todo-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./todo-list.component.html",
  styleUrl: "./todo-list.component.scss"
})
export class TodoListComponent {
  model: AddTodoCoreStoreModel = {
    todos: []
  };
  
  constructor(private readonly store: TodoListCoreStoreService) {
    this.store.getModel().subscribe(model => {
      this.model = model;
    });
  }
}
