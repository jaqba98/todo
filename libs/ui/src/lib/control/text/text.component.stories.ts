import type { Meta, StoryObj } from "@storybook/angular";

import { TextComponent } from "./text.component";

const meta: Meta<TextComponent> = {
  component: TextComponent,
  title: "Control/TextComponent"
};
export default meta;
type Story = StoryObj<TextComponent>;

export const Default: Story = {
  args: {
    value: "Lorem ipsum"
  }
};
