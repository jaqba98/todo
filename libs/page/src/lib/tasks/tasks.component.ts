import { Component } from "@angular/core";

import { TasksViewComponent, ButtonAddViewComponent } from "@todo/ui";

@Component({
  selector: "lib-tasks",
  standalone: true,
  imports: [
    ButtonAddViewComponent,
    TasksViewComponent
  ],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tesk.component.scss"
})
export class TasksComponent {}
