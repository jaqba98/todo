import type { Meta, StoryObj } from "@storybook/angular";

import { ToastViewComponent } from "./toast-view.component";

const meta: Meta<ToastViewComponent> = {
  component: ToastViewComponent,
  title: "View/ToastViewComponent",
  parameters: {
    layout: "fullscreen"
  }
};
export default meta;
type Story = StoryObj<ToastViewComponent>;

export const Primary: Story = {
  args: {
    value: "Lorem"
  }
};
