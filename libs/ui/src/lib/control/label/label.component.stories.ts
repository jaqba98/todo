import type { Meta, StoryObj } from "@storybook/angular";

import { LabelComponent } from "./label.component";

const meta: Meta<LabelComponent> = {
  component: LabelComponent,
  title: "Control/LabelComponent"
};
export default meta;
type Story = StoryObj<LabelComponent>;

const baseArgs = {
  value: "Login"
};

export const Default: Story = {
  args: {
    ...baseArgs,
    isError: false
  }
};

export const Error: Story = {
  args: {
    ...baseArgs,
    isError: true
  }
};
