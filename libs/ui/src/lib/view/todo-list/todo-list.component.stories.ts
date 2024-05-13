import type { Meta, StoryObj } from "@storybook/angular";
import { TodoListComponent } from "./todo-list.component";

import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<TodoListComponent> = {
  component: TodoListComponent,
  title: "TodoListComponent",
};
export default meta;
type Story = StoryObj<TodoListComponent>;

export const Primary: Story = {
  args: {
    title: "",
  },
};

export const Heading: Story = {
  args: {
    title: "",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/todo-list works!/gi)).toBeTruthy();
  },
};
