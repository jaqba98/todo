import {
  moduleMetadata,
  type Meta,
  type StoryObj
} from "@storybook/angular";

import { EditTodoFormComponent } from "./edit-todo-form.component";
import { PriorityEnum, TodosCoreStoreService } from "@todo/store";

class MockTodosCoreStoreService extends TodosCoreStoreService {
  constructor() {
    super();
    this.model.todos.set("1", {
      name: "Name",
      description: "Description",
      completion: 50,
      deadline: new Date(),
      priority: PriorityEnum.doItFirst,
      tags: "Tag1, Tag2",
      isEdited: false
    });
    this.emitModel();
  }
}

const meta: Meta<EditTodoFormComponent> = {
  component: EditTodoFormComponent,
  title: "form/edit-todo",
  decorators: [
    moduleMetadata({
      providers: [{
        provide: TodosCoreStoreService,
        useClass: MockTodosCoreStoreService
      }]
    })
  ],
  argTypes: {
    event: { action: "event" }
  }
};
export default meta;
type Story = StoryObj<EditTodoFormComponent>;

export const Primary: Story = {
  args: { id: "1" }
};
