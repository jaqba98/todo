import type { Meta, StoryObj } from "@storybook/angular";

import { TasksComponent } from "./tasks.component";

const meta: Meta<TasksComponent> = {
  component: TasksComponent,
  title: "page/task",
  parameters: {
    layout: "fullscreen"
  }
};
export default meta;
type Story = StoryObj<TasksComponent>;

export const Default: Story = {};
