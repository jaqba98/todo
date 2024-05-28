import { Injectable } from "@angular/core";

import { BaseStoreService } from "../base/base-store.service";
import { ToastViewStoreModel } from "../../model/view/toast-view-store.model";

@Injectable({ providedIn: "root" })
export class ToastViewStoreService extends BaseStoreService<ToastViewStoreModel> {
  constructor() {
    super({
      isVisible: false
    });
  }

  switchIsVisible() {
    this.model.isVisible = !this.model.isVisible;
    this.setModel(this.model);
  }
}
