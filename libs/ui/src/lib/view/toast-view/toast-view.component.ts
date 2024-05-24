import { Component, Input, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Subscription } from "rxjs";

import { ToastViewStoreService } from "@todo/store";

import { StatusEnum } from "../../enum/status.enum";

@Component({
  selector: "lib-toast-view",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./toast-view.component.html",
  styleUrl: "./toast-view.component.scss"
})
export class ToastViewComponent implements OnDestroy {
  @Input() value = "";

  @Input() isVisible = true;

  @Input() status: StatusEnum = StatusEnum.success;

  subscription: Subscription;

  timer = 0;

  constructor(private readonly toastStore: ToastViewStoreService) {
    this.subscription = this.toastStore.getModel().subscribe(model => {
      this.isVisible = model.isVisible;
      if (this.isVisible) {
        this.timer = setInterval(() => {
          this.toastStore.switchIsVisible();
          clearInterval(this.timer);
        }, 3000);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClick() {
    this.toastStore.switchIsVisible();
    clearInterval(this.timer);
  }
}
