import {
  Component,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

import { TextComponent } from "../text/text.component";
import { ColorEnum } from "../../enum/color.enum";

@Component({
  selector: "lib-label",
  standalone: true,
  imports: [TextComponent],
  templateUrl: "./label.component.html",
  styleUrl: "./label.component.scss"
})
export class LabelComponent {
  @Input() value: string;

  @Input() isError: boolean;

  @Output() event: EventEmitter<boolean>;

  constructor() {
    this.value = "";
    this.isError = false;
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
}
