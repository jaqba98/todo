import type { Meta, StoryObj } from "@storybook/angular";

import { IconComponent } from "./icon.component";

const meta: Meta<IconComponent> = {
  component: IconComponent,
  title: "control/icon"
};
export default meta;
type Story = StoryObj<IconComponent>;

export const Default: Story = {
  args: {
    src: "assets/arrow_down.svg",
    alt: "Arrow down",
    width: 100,
    height: 100
  }
};
