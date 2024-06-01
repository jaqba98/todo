import { Meta, StoryObj } from "@storybook/angular";

import { InputComponent } from "./input.component";

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: "control/input"
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    type: "text",
    label: "Login",
    value: "",
    isError: false
  }
};
