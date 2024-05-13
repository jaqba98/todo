import type { Meta, StoryObj } from "@storybook/angular";
import { ButtonComponent } from "./button.component";

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: "control/ButtonComponent"
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    type: "button",
    value: "Click me!"
  }
};