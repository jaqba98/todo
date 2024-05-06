import { PriorityEnum } from "@todo/store";

import { FormControlType } from "../../type/form.type";

export interface AddTodoFormModel {
    name: FormControlType<string>;
    description: FormControlType<string>;
    deadline: FormControlType<Date>;
    priority: FormControlType<PriorityEnum>;
    tags: FormControlType<string>;
}
