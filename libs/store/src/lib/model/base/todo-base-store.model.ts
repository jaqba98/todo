import { PriorityEnum } from "../../enum/priority.enum";

export interface TodoBaseStoreModel {
  name: string;
  description: string;
  range: number;
  deadline: Date;
  priority: PriorityEnum;
  tags: string;
}
