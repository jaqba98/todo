import type { Meta, StoryObj } from "@storybook/angular";

import { TextComponent } from "./text.component";
import { StatusEnum } from "../enum/status.enum";

const meta: Meta<TextComponent> = {
  component: TextComponent,
  title: "Control/TextComponent",
  argTypes: {
    type: {
      options: Object.values(StatusEnum),
      control: { type: "select" }
    }
  }
};
export default meta;
type Story = StoryObj<TextComponent>;

export const Default: Story = {
  args: {
    value: "Lorem ipsum",
    type: StatusEnum.info
  }
};

export const Primary: Story = {
  args: {
    value: "Lorem ipsum",
    isPrimary: true
  }
};
