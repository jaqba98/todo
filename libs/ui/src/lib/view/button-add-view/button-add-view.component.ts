import { Component } from "@angular/core";

import { ButtonComponent } from "../../control/button/button.component";

@Component({
  selector: "lib-button-add-view",
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: "./button-add-view.component.html",
  styleUrl: "./button-add-view.component.scss"
})
export class ButtonAddViewComponent {
  onClick() {
    alert("Hello!");
  }
}
