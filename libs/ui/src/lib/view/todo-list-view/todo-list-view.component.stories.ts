import type { Meta, StoryObj } from "@storybook/angular";

import { TodoListViewComponent } from "./todo-list-view.component";

const meta: Meta<TodoListViewComponent> = {
  component: TodoListViewComponent,
  title: "View/TodoListComponent"
};
export default meta;
type Story = StoryObj<TodoListViewComponent>;

export const Primary: Story = {
  args: {
    title: ""
  },
};

