import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ColorEnum } from "../../enum/color.enum";

@Component({
  selector: "lib-text",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./text.component.html",
  styleUrl: "./text.component.scss"
})
export class TextComponent {
  @Input({ required: true }) value!: string;

  @Input() color!: ColorEnum;

  @Input() isPrimary = false;

  getTextColor(): string {
    switch(this.color) {
      case ColorEnum.color__default:
        return "text__default";
      case ColorEnum.color__primary:
        return "text__primary";
      case ColorEnum.color__success:
        return "text__success";
      case ColorEnum.color__error:
        return "text__error";
      case ColorEnum.color__warning:
        return "text__warning";
      case ColorEnum.color__info:
        return "text__info";
      default:
        throw new Error("");
    }
  }
}
