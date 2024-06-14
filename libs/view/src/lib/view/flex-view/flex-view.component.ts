import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

import { FlexDirectionType } from "../../type/flex-direction.type";
import { AlignItemsType } from "../../type/align-items.type";
import { JustifyContentType } from "../../type/justify-content.type";

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

  @Input() alignItems: AlignItemsType;

  @Input() justifyContent: JustifyContentType;

  constructor() {
    this.flexDirection = "row";
    this.gap = "0";
    this.alignItems = "stretch";
    this.justifyContent = "flex-start";
  }

  getFlexStyles() {
    return {
      "flex-direction": this.flexDirection,
      "gap": this.gap,
      "align-items": this.alignItems,
      "justify-content": this.justifyContent
    };
  }
}
