import { Component, Input } from "@angular/core";

import { ButtonType } from "../../type/control.type";

@Component({
  selector: "lib-button",
  standalone: true,
  templateUrl: "./button.component.html"
})
export class ButtonComponent {
  @Input() type: ButtonType = "button";

  @Input() value = "";
}
