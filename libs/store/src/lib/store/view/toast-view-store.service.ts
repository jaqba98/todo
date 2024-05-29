import { Injectable } from "@angular/core";

import { ToastViewStoreModel } from "../../model/view/toast-view-store.model";
import { BaseStoreService } from "../base/base-store.service";

@Injectable({ providedIn: "root" })
export class ToastViewStoreService extends BaseStoreService<ToastViewStoreModel> {
  constructor() {
    super({ isVisible: false });
  }

  changeIsVisible(isVisible: boolean) {
    this.model.isVisible = isVisible;
    this.emitModel();
  }
}
