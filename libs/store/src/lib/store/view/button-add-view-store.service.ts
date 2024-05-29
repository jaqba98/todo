import { Injectable } from "@angular/core";

import { ButtonAddViewStoreModel } from "../../model/view/button-add-view-store.model";
import { BaseStoreService } from "../base/base-store.service";

@Injectable({ providedIn: "root" })
export class ButtonAddViewStoreService extends BaseStoreService<ButtonAddViewStoreModel> {
  constructor() {
    super({ isOpened: false });
  }

  changeIsOpened(isOpened: boolean) {
    this.model.isOpened = isOpened;
    this.emitModel();
  }
}
