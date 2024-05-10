import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MessageStatusType } from "../../type/control.type";

@Component({
  selector: "lib-message-status",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./message.component.html",
  styleUrl: "./message.component.scss"
})
export class MessageStatusComponent {
  @Input() type: MessageStatusType = "info";

  @Input({ required: true }) value = "";
}
