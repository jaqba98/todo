import type { Meta, StoryObj } from "@storybook/angular";

import { SelectComponent } from "./select.component";

const meta: Meta<SelectComponent> = {
  component: SelectComponent,
  title: "control/select"
};
export default meta;
type Story = StoryObj<SelectComponent>;

export const Default: Story = {
  args: {
    label: "Colors",
    isError: false,
    value: "Red",
    options: ["Red", "Blue", "Green"]
  }
};
