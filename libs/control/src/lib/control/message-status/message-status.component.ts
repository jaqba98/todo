import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ColorEnum } from "../../enum/color.enum";
import { TextComponent } from "../text/text.component";

@Component({
  selector: "lib-message-status",
  standalone: true,
  imports: [
    CommonModule,
    TextComponent
  ],
  templateUrl: "./message-status.component.html",
  styleUrl: "./message-status.component.scss"
})
export class MessageStatusComponent {
  @Input() value: string;

  @Input() isVisible: boolean;

  @Input() color: ColorEnum;

  constructor() {
    this.value = "";
    this.isVisible = true;
    this.color = ColorEnum.colorDefault;
  }

  getMessageStatusColor(): string {
    return `message-status__${this.color}`;
  }
}
