import { BehaviorSubject } from "rxjs";
import { cloneDeep } from "lodash";

export class BaseStoreService<TModel> {
  private readonly subject = new BehaviorSubject(this.model);

  private readonly baseModel: TModel;

  constructor(protected model: TModel) {
    this.baseModel = cloneDeep(model);
  }

  setModel(model: TModel) {
    this.model = cloneDeep(model);
    this.subject.next(this.model);
  }

  getModel() {
    return this.subject.asObservable();
  }

  cleanModel() {
    this.setModel(this.baseModel);
  }
}
