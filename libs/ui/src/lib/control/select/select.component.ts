import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "lib-select",
  standalone: true,
  imports: [CommonModule ,FormsModule],
  templateUrl: "./select.component.html"
})
export class SelectComponent {
  @Input() options: string[] = [];

  @Input() value = "";
}
