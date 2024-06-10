import { cloneDeep } from "lodash";
import { BehaviorSubject } from "rxjs";

export class BaseStoreService<TModel> {
  private readonly subject = new BehaviorSubject(this.model);

  private readonly baseModel: TModel;

  constructor(protected model: TModel) {
    this.baseModel = cloneDeep(model);
  }

  emitModel(model?: TModel) {
    if (model) this.model = cloneDeep(model);
    this.subject.next(this.model);
  }

  getModel() {
    return this.subject.asObservable();
  }

  cleanModel() {
    this.model = cloneDeep(this.baseModel);
    this.emitModel();
  }
}
