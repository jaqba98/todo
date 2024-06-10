import { Component } from "@angular/core";

import {
  AddTodoFormComponent,
  EditTodoFormComponent
} from "@todo/form";

@Component({
  selector: "lib-tasks",
  standalone: true,
  imports: [
    AddTodoFormComponent,
    EditTodoFormComponent
  ],
  templateUrl: "./tasks.component.html"
})
export class TasksComponent {}
