import { Component, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Subscription } from "rxjs";

import { ButtonAddViewStoreService } from "@todo/store";

import { ButtonComponent } from "../../control/button/button.component";

@Component({
  selector: "lib-button-add-view",
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
  ],
  templateUrl: "./button-add-view.component.html",
  styleUrl: "./button-add-view.component.scss"
})
export class ButtonAddViewComponent implements OnDestroy {
  isOpened!: boolean;

  subscription: Subscription;

  constructor(private readonly store: ButtonAddViewStoreService) {
    this.subscription = this.store.getModel().subscribe(model => {
      this.isOpened = model.isOpened;
    });
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClick() {
    this.store.switchIsOpened();
  }
}
