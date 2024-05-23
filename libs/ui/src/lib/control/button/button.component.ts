import {
  Component,
  EventEmitter,
  Input,
  Output
} from "@angular/core";

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

  @Input() value = "";

  @Input() size: "small" | "big" = "small";

  @Input() fullSize = false;

  @Output() event = new EventEmitter();

  onClick() {
    this.event.emit();
  }
}
