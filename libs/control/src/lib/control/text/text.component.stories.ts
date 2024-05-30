import type { Meta, StoryObj } from "@storybook/angular";

import { TextComponent } from "./text.component";
import { ColorEnum } from "../../enum/color.enum";

const meta: Meta<TextComponent> = {
  component: TextComponent,
  title: "Control/TextComponent",
  argTypes: {
    color: {
      options: Object.values(ColorEnum),
      control: { type: "select" }
    }
  }
};
export default meta;
type Story = StoryObj<TextComponent>;

export const Default: Story = {
  args: {
    value: "Lorem ipsum",
    color: ColorEnum.color__default
  }
};

export const Primary: Story = {
  args: {
    value: "Lorem ipsum",
    isPrimary: true
  }
};
