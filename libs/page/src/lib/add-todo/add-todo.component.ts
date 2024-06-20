import { Component } from "@angular/core";

import { AddTodoFormComponent } from "@todo/form";
import { TasksViewComponent } from "@todo/view";

@Component({
  selector: "lib-add-todo",
  standalone: true,
  imports: [
    AddTodoFormComponent,
    TasksViewComponent
  ],
  templateUrl: "./add-todo.component.html"
})
export class AddTodoComponent {}
