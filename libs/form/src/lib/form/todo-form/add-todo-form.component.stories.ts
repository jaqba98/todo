import type { Meta, StoryObj } from "@storybook/angular";
import { action } from "@storybook/addon-actions";

import { AddTodoFormComponent } from "./add-todo-form.component";

const meta: Meta<AddTodoFormComponent> = {
  component: AddTodoFormComponent,
  title: "form/add-todo"
};
export default meta;
type Story = StoryObj<AddTodoFormComponent>;

export const Primary: Story = {
  parameters: {
    onSubmit: action("event")
  }
};
