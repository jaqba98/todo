import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "lib-icon",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./icon.component.html"
})
export class IconComponent {
  @Input() visible?: boolean;

  @Input() src?: string;

  @Input() alt?: string;

  @Input() width?: number;

  @Input() height?: number;
}
