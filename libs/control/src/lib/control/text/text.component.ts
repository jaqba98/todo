import { CommonModule } from "@angular/common";
import {
  Component,
  EventEmitter,
  Input,
  Output
} from "@angular/core";

import { ColorEnum } from "../../enum/color.enum";

@Component({
  selector: "lib-text",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./text.component.html",
  styleUrl: "./text.component.scss"
})
export class TextComponent {
  @Input({ required: true }) value: string;

  @Input() color: ColorEnum;
  
  @Input() isUnderline: boolean;
  
  @Input() isClickable: boolean;

  @Input() isTitle: boolean;

  @Input() className: string;

  @Output() event: EventEmitter<boolean>;

  constructor() {
    this.value = "";
    this.color = ColorEnum.colorDefault;
    this.isUnderline = false;
    this.isClickable = false;
    this.isTitle = false;
    this.className = "";
    this.event = new EventEmitter<boolean>();
  }

  onClick() {
    if (!this.isClickable) return;
    this.event.emit(true);
    return true;
  }

  getTextColor(): string {
    return `text__${this.color}`;
  }
}
