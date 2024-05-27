import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MessageStatusType } from "../../type/control.type";
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
  @Input() type: MessageStatusType = "info";

  @Input({ required: true }) value = "";
}
