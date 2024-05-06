export interface AddTodoFormStoreModel {
    name: string;
    description: string;
    deadline: Date;
    priority: "high" | "medium" | "low";
    tags: string;
}
