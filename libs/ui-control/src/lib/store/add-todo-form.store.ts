import { Injectable } from "@angular/core";

import { FromStore } from "./form.store";
import { AddTodoStoreModel } from "../model/add-todo-store.model";

@Injectable({ providedIn: 'root' })
export class AddTodoFromStore extends FromStore<AddTodoStoreModel> {
    constructor() {
        super({
            title: { value: '' },
            description: { value: '' }
        });
    }

    clearModel() {
        this.setMode({
            title: { value: '' },
            description: { value: '' }
        });
    }
}
