import { Component, EventEmitter, Input, Output } from "@angular/core";

import { ButtonType } from "../../type/control.type";

@Component({
  selector: "lib-button",
  standalone: true,
  templateUrl: "./button.component.html",
  styleUrls: [
    "../control.scss",
    "./button.component.scss"
  ]
})
export class ButtonComponent {
  @Input() type: ButtonType = "button";

  @Input({ required: true }) value = "";

  @Output() event = new EventEmitter();

  onClick() {
    this.event.emit();
  }
}
