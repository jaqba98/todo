import { Component, Input, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastViewStoreService } from "@todo/store";
import { Subscription } from "rxjs";

@Component({
  selector: "lib-toast-view",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./toast-view.component.html",
  styleUrl: "./toast-view.component.scss"
})
export class ToastViewComponent implements OnDestroy {
  @Input() value = "";

  isVisible = true;

  subscription: Subscription;

  constructor(private readonly toastStore: ToastViewStoreService) {
    this.subscription = this.toastStore.getModel().subscribe(model => {
      this.isVisible = model.isVisible;
      if (this.isVisible) {
        const timer = setInterval(() => {
          this.toastStore.switchIsVisible();
          clearInterval(timer);
        }, 3000);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
