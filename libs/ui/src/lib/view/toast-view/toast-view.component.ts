import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "lib-toast-view",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./toast-view.component.html",
  styleUrl: "./toast-view.component.scss"
})
export class ToastViewComponent {
  @Input() value = "";
}
