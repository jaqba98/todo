import { CommonModule } from "@angular/common";
import { Component, Renderer2 } from "@angular/core";
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

  options: string[] = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4"
  ];

  constructor(private renderer: Renderer2) {
    this.isOpened = false;
  }

  onClick() {
    this.isOpened = !this.isOpened;
  }

  onBlur(): void {
    this.renderer.listen("document", "click", (click: Event) => {
      const el = click.target as HTMLElement;
      console.log(el.classList);
      if (el.classList.contains("top-nav__control")) return;
      this.isOpened = false;
    });
  }
}
