import type { Meta, StoryObj } from "@storybook/angular";

import { TopNavViewComponent } from "./top-nav-view.component";

const meta: Meta<TopNavViewComponent> = {
  component: TopNavViewComponent,
  title: "View/TopNavViewComponent",
  parameters: {
    layout: "fullscreen"
  }
};
export default meta;
type Story = StoryObj<TopNavViewComponent>;

export const Primary: Story = {};
