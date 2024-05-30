import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StatusEnum } from "../enum/status.enum";

@Component({
  selector: "lib-text",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./text.component.html",
  styleUrl: "./text.component.scss"
})
export class TextComponent {
  @Input({ required: true }) value!: string;

  @Input() type!: StatusEnum;

  @Input() isPrimary = false;

  getTextColor(): string {
    return `text__${this.type}`;
  }
}
