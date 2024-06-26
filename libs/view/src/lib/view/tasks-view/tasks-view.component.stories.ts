import type { Meta, StoryObj } from "@storybook/angular";

import { TasksViewComponent } from "./tasks-view.component";

const meta: Meta<TasksViewComponent> = {
  component: TasksViewComponent,
  title: "view/tasks",
  parameters: {
    layout: "fullscreen"
  }
};
export default meta;
type Story = StoryObj<TasksViewComponent>;

export const Primary: Story = {};
