import type { Meta, StoryObj } from "@storybook/angular";

import { EditTodoFormComponent } from "./edit-todo-form.component";

const meta: Meta<EditTodoFormComponent> = {
  component: EditTodoFormComponent,
  title: "form/edit-todo"
};
export default meta;
type Story = StoryObj<EditTodoFormComponent>;

export const Primary: Story = {};
