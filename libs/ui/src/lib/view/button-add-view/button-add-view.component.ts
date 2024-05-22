import { Component } from "@angular/core";

import { ButtonAddViewStoreService } from "@todo/store";

import { ButtonComponent } from "../../control/button/button.component";

@Component({
  selector: "lib-button-add-view",
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: "./button-add-view.component.html",
  styleUrl: "./button-add-view.component.scss"
})
export class ButtonAddViewComponent {
  constructor(private readonly store: ButtonAddViewStoreService) {
  }

  onClick() {
    this.store.switchIsOpened();
  }
}
