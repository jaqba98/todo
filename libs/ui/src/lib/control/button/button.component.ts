import { Component, Input } from "@angular/core";

import { ButtonType } from "../../type/control.type";

@Component({
  selector: "lib-button",
  standalone: true,
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss"
})
export class ButtonComponent {
  @Input() type: ButtonType = "button";

  @Input({ required: true }) value = "";
}
