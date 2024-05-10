import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "lib-range",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./range.component.html"
})
export class RangeComponent {
  value = "";
}
