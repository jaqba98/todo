import { Component } from "@angular/core";

import { TasksViewComponent, TopNavViewComponent } from "@todo/ui";

@Component({
  selector: "lib-tasks",
  standalone: true,
  imports: [
    TopNavViewComponent,
    TasksViewComponent
  ],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tesk.component.scss"
})
export class TasksComponent {}
