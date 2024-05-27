import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "lib-icon",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./icon.component.html"
})
export class IconComponent {
  @Input({ required: true }) src!: string;

  @Input({ required: true }) alt!: string;

  @Input({ required: true }) width!: number;

  @Input({ required: true }) height!: number;
}
