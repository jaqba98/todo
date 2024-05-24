import type { Meta, StoryObj } from "@storybook/angular";

import { LabelComponent } from "./label.component";

const meta: Meta<LabelComponent> = {
  component: LabelComponent,
  title: "Control/LabelComponent"
};
export default meta;
type Story = StoryObj<LabelComponent>;

export const Primary: Story = {
  args: {
    for: "login",
    value: "Login"
  }
};
