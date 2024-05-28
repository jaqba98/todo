import type { Meta, StoryObj } from "@storybook/angular";

import { SelectComponent } from "./select.component";

const meta: Meta<SelectComponent> = {
  component: SelectComponent,
  title: "Control/SelectComponent"
};
export default meta;
type Story = StoryObj<SelectComponent>;

export const Primary: Story = {
  args: {
    label: "Colors",
    value: "Red",
    options: ["Red", "Blue", "Green"]
  },
};
