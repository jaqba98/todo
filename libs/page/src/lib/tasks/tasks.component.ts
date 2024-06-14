import { Component } from "@angular/core";

import {
  AddTodoFormComponent,
  EditTodoFormComponent,
  TopNavFormComponent
} from "@todo/form";
import { TasksViewComponent } from "@todo/view";

@Component({
  selector: "lib-tasks",
  standalone: true,
  imports: [
    AddTodoFormComponent,
    EditTodoFormComponent,
    TopNavFormComponent,
    TasksViewComponent
  ],
  templateUrl: "./tasks.component.html"
})
export class TasksComponent {}
