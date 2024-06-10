import { PriorityEnum } from "../../enum/priority.enum";

export interface TodoBaseStoreModel {
  name: string;
  description: string;
  completion: number;
  deadline: Date;
  priority: PriorityEnum;
  tags: string;
}
