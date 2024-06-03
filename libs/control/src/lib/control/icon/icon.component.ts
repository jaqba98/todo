import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "lib-icon",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./icon.component.html"
})
export class IconComponent {
  @Input({ required: true }) src: string;

  @Input() alt: string;

  @Input() width: number;

  @Input() height: number;

  constructor() {
    this.src = "";
    this.alt = "";
    this.width = 0;
    this.height = 0;
  }
}
