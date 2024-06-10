import type { Meta, StoryObj } from "@storybook/angular";

import { AddTodoFormComponent } from "./add-todo-form.component";

const meta: Meta<AddTodoFormComponent> = {
  component: AddTodoFormComponent,
  title: "form/add-todo",
  argTypes: {
    event: { action: "event" }
  }
};
export default meta;
type Story = StoryObj<AddTodoFormComponent>;

export const Primary: Story = {};
