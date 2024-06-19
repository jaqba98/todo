import {
  Component,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { TextComponent } from "../text/text.component";
import { ColorEnum } from "../../enum/color.enum";

@Component({
  selector: "lib-label",
  standalone: true,
  imports: [CommonModule, TextComponent],
  templateUrl: "./label.component.html",
  styleUrl: "./label.component.scss"
})
export class LabelComponent {
  @Input() value: string;

  @Input() isError: boolean;

  @Input() isRequired: boolean;

  @Input() className: string;

  @Output() event: EventEmitter<boolean>;

  constructor() {
    this.value = "";
    this.isError = false;
    this.isRequired = false;
    this.className = "";
    this.event = new EventEmitter<boolean>();
  }

  onClick(event: boolean) {
    this.event.emit(event);
  }

  getLabelColor() {
    return this.isError
      ? ColorEnum.colorError
      : ColorEnum.colorDefault;
  }

  getStartColor() {
    return ColorEnum.colorWarning;
  }
}
