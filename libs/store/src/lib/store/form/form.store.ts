export class FromStore<TModel> {
    constructor(private model: TModel) {
    }

    setModel(model: TModel) {
        this.model = model;
    }

    getModel(): TModel {
        return this.model;
    }
}
