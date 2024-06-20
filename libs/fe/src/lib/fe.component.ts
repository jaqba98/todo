import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TopNavFormComponent } from "@todo/form";

@Component({
  selector: "lib-fe",
  standalone: true,
  imports: [
    TopNavFormComponent,
    RouterOutlet
  ],
  templateUrl: "./fe.component.html"
})
export class FeComponent {}
