import { Injectable } from "@angular/core";

import { BaseStoreService } from "../base/base-store.service";
import { ButtonAddViewStoreModel } from "../../model/view/button-add-view-store.model";

@Injectable({ providedIn: "root" })
export class ButtonAddViewStoreService extends BaseStoreService<ButtonAddViewStoreModel> {
    constructor() {
        super({
            isOpened: false
        });
    }

    switchIsOpened() {
        this.model.isOpened = !this.model.isOpened;
        this.setModel(this.model);
    }
}
