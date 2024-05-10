import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InputType } from "../../type/control.type";

@Component({
  selector: "lib-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./input.component.html"
})
export class InputComponent {
  @Input() type: InputType = "text";

  @Input() placeholder = "";

  @Input() value = "";
}
