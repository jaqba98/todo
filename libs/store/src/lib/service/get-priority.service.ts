import { Injectable } from "@angular/core";

import { PriorityEnum } from "../enum/priority.enum";

@Injectable({ providedIn: "root" })
export class GetPriorityService {
  getArray() {
    return Object.values(PriorityEnum);
  }
}
