import { Injectable } from "@angular/core";
import { AddTodoModel } from "../model/add-todo.model";

@Injectable({ providedIn: 'root' })
export class AddTodoStore {
    model: AddTodoModel = {
        title: '',
        description: ''
    };

    cleanModel() {
        this.model = {
            title: '',
            description: ''
        };
    }
}
