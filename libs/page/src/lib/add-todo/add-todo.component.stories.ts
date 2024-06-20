import type { Meta, StoryObj } from "@storybook/angular";

import { AddTodoComponent } from "./add-todo.component";

const meta: Meta<AddTodoComponent> = {
  component: AddTodoComponent,
  title: "page/add-todo",
  parameters: {
    layout: "fullscreen"
  }
};
export default meta;
type Story = StoryObj<AddTodoComponent>;

export const Default: Story = {};
