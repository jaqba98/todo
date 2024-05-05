import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LogStatusType } from "../../type/control.type";

@Component({
  selector: "lib-log-status",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./log-status.component.html",
  styleUrl: "./log-status.component.scss"
})
export class LogStatusComponent {
  @Input() type: LogStatusType = "info";

  @Input() value = "";
}
