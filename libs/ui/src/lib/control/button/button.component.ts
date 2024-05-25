import {
  Component,
  EventEmitter,
  Input,
  Output
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { ButtonType } from "../../type/control.type";

@Component({
  selector: "lib-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss"
})
export class ButtonComponent {
  @Input() type: ButtonType = "button";

  @Input({ required: true }) value = "";

  @Input() fullSize = false;

  @Input() leftIconVisible = false;

  @Input() leftIconSrc = "";

  @Input() leftIconAlt = "";

  @Input() rightIconVisible = false;

  @Input() rightIconSrc = "";

  @Input() rightIconAlt = "";

  @Output() eventClick = new EventEmitter();

  @Output() eventBlur = new EventEmitter();

  onClick() {
    this.eventClick.emit();
  }

  onBlur() {
    this.eventBlur.emit();
  }
}
