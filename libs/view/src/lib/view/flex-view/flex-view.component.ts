import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

import { FlexDirectionType } from "../../type/flex-direction.type";

@Component({
  selector: "lib-flex-view",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./flex-view.component.html",
  styleUrl: "./flex-view.component.scss"
})
export class FlexViewComponent {
  @Input() flexDirection: FlexDirectionType;

  @Input() gap: string;

  constructor() {
    this.flexDirection = "row";
    this.gap = "0";
  }

  getFlexStyles() {
    return {
      "flex-direction": this.flexDirection,
      "gap": this.gap
    };
  }
}
