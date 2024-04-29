import { Injectable } from "@angular/core";
import { AddTodoModel } from "../model/add-todo.model";

@Injectable({ providedIn: 'root' })
export class AddTodoStore {
    model: AddTodoModel = {
        title: { value: '' },
        description: { value: '' }
    };

    cleanModel() {
        this.model = {
            title: { value: '' },
            description: { value: '' }
        };
    }
}
