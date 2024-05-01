import { BehaviorSubject } from "rxjs";

export class FormStore<TModel> {
    private subject = new BehaviorSubject<TModel>(this.model);

    model$ = this.subject.asObservable();

    constructor(private model: TModel) {
    }

    setModel(model: TModel) {
        this.model = model;
        this.subject.next(this.model);
    }
    
    getModel(): TModel {
        return this.model;
    }
}
