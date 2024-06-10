import { Meta, StoryObj } from "@storybook/angular";

import { InputComponent } from "./input.component";
import { InputEnum } from "../../enum/input.enum";

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: "control/input",
  argTypes: {
    type: {
      options: Object.values(InputEnum),
      control: {
        type: "select"
      }
    }
  }
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    type: "text",
    label: "Login",
    value: "",
    isSelected: false,
    isError: false
  }
};
