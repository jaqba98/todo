import { PriorityEnum } from "@todo/store";

import { FormControlType } from "../type/form-control.type";

export interface BaseTodoFormModel {
  name: FormControlType<string>;
  description: FormControlType<string>;
  range: FormControlType<number>;
  deadline: FormControlType<string>;
  priority: FormControlType<PriorityEnum>;
  tags: FormControlType<string>;
}
