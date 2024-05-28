import type { Meta, StoryObj } from "@storybook/angular";

import { IconComponent } from "./icon.component";

const meta: Meta<IconComponent> = {
  component: IconComponent,
  title: "Control/IconComponent"
};
export default meta;
type Story = StoryObj<IconComponent>;

export const Default: Story = {
  args: {
    src: "assets/arrow_down.svg",
    alt: "Arrow down",
    width: 20,
    height: 20
  }
};
