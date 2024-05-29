import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TextComponent } from "../text/text.component";
import { StatusEnum } from "../../enum/status.enum";

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
    @Input() type: StatusEnum = StatusEnum.info;

    @Input({ required: true }) value = "";
}
