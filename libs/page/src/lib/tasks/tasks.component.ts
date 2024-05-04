import { Component } from "@angular/core";

import { AddTodoComponent } from "@todo/ui";

@Component({
  selector: "lib-tasks",
  standalone: true,
  imports: [AddTodoComponent],
  templateUrl: "./tasks.component.html"
})
export class TasksComponent {}
