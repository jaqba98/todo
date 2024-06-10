import { Injectable } from "@angular/core";

import { PriorityEnum } from "../enum/priority.enum";

@Injectable({ providedIn: "root" })
export class PriorityService {
  getHeaders(): PriorityEnum[] {
    return Object.values(PriorityEnum);
  }
}
