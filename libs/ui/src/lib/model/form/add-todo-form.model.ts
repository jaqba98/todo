import { FormControlType } from "../../type/control.type";

export interface AddTodoFormModel {
    name: FormControlType;
    description: FormControlType;
    deadline: FormControlType;
    priority: FormControlType;
    tags: FormControlType;
}
