import { Component, Input } from "@angular/core";

@Component({
  selector: "lib-label",
  standalone: true,
  templateUrl: "./label.component.html",
  styleUrl: "./label.component.scss"
})
export class LabelComponent {
  @Input({ required: true }) for = "";

  @Input({ required: true }) value = "";
}
