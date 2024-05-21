import { Component } from "@angular/core";

import { ButtonComponent } from "../../control/button/button.component";

@Component({
  selector: "lib-top-nav-view",
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: "./top-nav-view.component.html",
  styleUrl: "./top-nav-view.component.scss"
})
export class TopNavViewComponent {
}
