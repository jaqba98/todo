import { Meta, StoryObj } from "@storybook/angular";

import { TextareaComponent } from "./textarea.component";

const meta: Meta<TextareaComponent> = {
  component: TextareaComponent,
  title: "control/textarea"
};
export default meta;
type Story = StoryObj<TextareaComponent>;

export const Default: Story = {
  args: {
    label: "Lorem ipsum",
    value: "",
    isSelected: false,
    isError: false
  }
};
