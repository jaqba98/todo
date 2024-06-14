import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonComponent } from "@todo/control";
import { FlexViewComponent } from "@todo/view";

@Component({
  selector: "lib-top-nav-form",
  standalone: true,
  imports: [
    CommonModule,
    FlexViewComponent,
    ButtonComponent
  ],
  templateUrl: "./top-nav-form.component.html",
  styleUrl: "./top-nav-form.component.scss"
})
export class TopNavFormComponent {
  isOpened: boolean;

  constructor() {
    this.isOpened = false;
  }
  
  onClick() {
    this.isOpened = !this.isOpened;
  }
}
