import { Component } from "@angular/core";

import {
  AddTodoFormComponent,
  EditTodoFormComponent
} from "@todo/form";
import { TasksViewComponent } from "@todo/view";

@Component({
  selector: "lib-tasks",
  standalone: true,
  imports: [
    AddTodoFormComponent,
    EditTodoFormComponent,
    TasksViewComponent
  ],
  templateUrl: "./tasks.component.html"
})
export class TasksComponent {}
