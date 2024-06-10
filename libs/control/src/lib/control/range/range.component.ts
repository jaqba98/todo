import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { LabelComponent } from "../label/label.component";

@Component({
  selector: "lib-range",
  standalone: true,
  imports: [FormsModule, LabelComponent],
  templateUrl: "./range.component.html",
  styleUrl: "./range.component.scss"
})
export class RangeComponent {
  @Input() label: string;

  @Input() isError: boolean;

  @Input() value: number;

  constructor() {
    this.label = "";
    this.isError = false;
    this.value = 0;
  }

  getLabel() {
    return `${this.label}: ${this.value}%`;
  }
}
