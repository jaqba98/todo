import { Component } from "@angular/core";
import { ButtonComponent } from "@todo/control";
import { FlexViewComponent } from "@todo/view";

@Component({
  selector: "lib-top-nav-form",
  standalone: true,
  imports: [
    FlexViewComponent,
    ButtonComponent
  ],
  templateUrl: "./top-nav-form.component.html",
  styleUrl: "./top-nav-form.component.scss"
})
export class TopNavFormComponent {
}
