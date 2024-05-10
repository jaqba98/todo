import { Component } from "@angular/core";

import { AddTodoFormComponent } from "@todo/ui";

@Component({
  selector: "lib-tasks",
  standalone: true,
  imports: [
    AddTodoFormComponent
  ],
  templateUrl: "./tasks.component.html"
})
export class TasksComponent {}
