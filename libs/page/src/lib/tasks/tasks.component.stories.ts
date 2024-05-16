import type { Meta, StoryObj } from "@storybook/angular";

import { TasksComponent } from "./tasks.component";

const meta: Meta<TasksComponent> = {
  component: TasksComponent,
  title: "View/TasksComponent",
};
export default meta;
type Story = StoryObj<TasksComponent>;

export const Primary: Story = {
  args: {}
};
