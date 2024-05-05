import { BehaviorSubject } from "rxjs";
import { cloneDeep } from "lodash";

export class BaseFormStoreService<TModel> {
    private readonly subject = new BehaviorSubject(this.model);

    private readonly baseModel: TModel;

    constructor(private model: TModel) {
        this.baseModel = cloneDeep(model);
    }

    setModel(model: TModel) {
        this.model = model;
        this.subject.next(this.model);
    }

    getModel() {
        return this.subject.asObservable();
    }

    clearModel() {
        this.setModel(
            this.getCleanModel()
        );
    }

    getCleanModel() {
        return cloneDeep(this.baseModel);
    }
}
