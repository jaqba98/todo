import type { Meta, StoryObj } from "@storybook/angular";

import { RangeComponent } from "./range.component";

const meta: Meta<RangeComponent> = {
  component: RangeComponent,
  title: "Control/RangeComponent"
};
export default meta;
type Story = StoryObj<RangeComponent>;

export const Primary: Story = {
  args: {
    value: "50"
  }
};
