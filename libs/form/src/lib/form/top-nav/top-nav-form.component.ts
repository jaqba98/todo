import { CommonModule } from "@angular/common";
import { Component, HostListener, Renderer2 } from "@angular/core";
import { ButtonComponent } from "@todo/control";

@Component({
  selector: "lib-top-nav-form",
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
  ],
  templateUrl: "./top-nav-form.component.html",
  styleUrl: "./top-nav-form.component.scss"
})
export class TopNavFormComponent {
  isOpened: boolean;

  iconSrc: string;

  iconAlt: string;

  isMobile: boolean;

  options: string[] = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4"
  ];

  constructor(private readonly renderer: Renderer2) {
    this.isOpened = false;
    this.iconSrc = "assets/menu.svg";
    this.iconAlt = "menu";
    this.isMobile = this.getIsMobile();
    this.isOpened = !this.isMobile;
  }

  onClick() {
    this.isOpened = !this.isOpened;
    this.switchHamburgerIcon();
  }

  onClickOption() {
    if (!this.getIsMobile()) return;
    this.isOpened = false;
    this.switchHamburgerIcon();
  }

  onBlur(): void {
    this.renderer.listen("document", "click", (click: Event) => {
      if (!this.getIsMobile()) return;
      const el = click.target as HTMLElement;
      if (el.classList.contains("top-nav__control")) return;
      this.isOpened = false;
      this.switchHamburgerIcon();
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 834;
    if (window.innerWidth > 834) {
      this.isOpened = true;
    }
  }

  private getIsMobile() {
    return window.innerWidth < 834;
  }

  private switchHamburgerIcon() {
    if (this.isOpened) {
      this.iconSrc = "assets/close.svg";
      this.iconAlt = "close";
      return;
    }
    this.iconSrc = "assets/menu.svg";
    this.iconAlt = "menu";
  }
}
