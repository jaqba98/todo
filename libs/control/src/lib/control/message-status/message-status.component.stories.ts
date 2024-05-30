import type { Meta, StoryObj } from "@storybook/angular";

import { MessageStatusComponent } from "./message-status.component";
import { ColorEnum } from "../../enum/color.enum";

const meta: Meta<MessageStatusComponent> = {
  component: MessageStatusComponent,
  title: "Control/MessageStatusComponent"
};
export default meta;
type Story = StoryObj<MessageStatusComponent>;

export const Primary: Story = {
  args: {
    type: ColorEnum.color__error,
    value: "Lorem ipsum"
  }
};
