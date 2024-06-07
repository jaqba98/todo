import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "lib-button-add-view",
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: "./button-add-view.component.html",
  styleUrl: "./button-add-view.component.scss"
})
export class ButtonAddViewComponent {
  // isOpened!: boolean;

  // subscription: Subscription;

  // constructor(private readonly store: ButtonAddViewStoreService) {
  //   this.subscription = this.store.getModel().subscribe(model => {
  //     this.isOpened = model.isOpened;
  //   });
  // }
  
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  // onClick() {
  //   this.store.switchIsOpened();
  // }
}
