export class FromStore<TModel> {
    constructor(private model: TModel) {
    }

    setMode(model: TModel) {
        this.model = model;
    }

    getModel(): TModel {
        return this.model;
    }
}
