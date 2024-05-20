import type { Meta, StoryObj } from "@storybook/angular";

import { TasksViewComponent } from "./tasks-view.component";

const meta: Meta<TasksViewComponent> = {
  component: TasksViewComponent,
  title: "View/TasksViewComponent"
};
export default meta;
type Story = StoryObj<TasksViewComponent>;

export const Primary: Story = {};