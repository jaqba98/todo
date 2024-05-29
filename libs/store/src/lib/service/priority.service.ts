import { Injectable } from "@angular/core";

import { PriorityEnum, PriorityHeaderEnum } from "../enum/priority.enum";

@Injectable({ providedIn: "root" })
export class PriorityService {
  getHeaders(): PriorityHeaderEnum[] {
    return Object
      .values(PriorityEnum)
      .map(priority => PriorityHeaderEnum[priority]);
  }
}
