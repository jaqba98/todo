import type { Meta, StoryObj } from "@storybook/angular";

import { TodoListComponent } from "./todo-list.component";

const meta: Meta<TodoListComponent> = {
  component: TodoListComponent,
  title: "TodoListComponent"
};
export default meta;
type Story = StoryObj<TodoListComponent>;

export const Primary: Story = {
  args: {
    title: ""
  },
};

