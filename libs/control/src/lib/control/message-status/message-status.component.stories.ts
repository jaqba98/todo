import { Meta, StoryObj } from "@storybook/angular";

import { MessageStatusComponent } from "./message-status.component";
import { ColorEnum } from "../../enum/color.enum";

const meta: Meta<MessageStatusComponent> = {
  component: MessageStatusComponent,
  title: "control/message status",
  argTypes: {
    color: {
      options: Object.values(ColorEnum),
      control: {
        type: "select"
      }
    }
  }
};
export default meta;
type Story = StoryObj<MessageStatusComponent>;

export const Primary: Story = {
  args: {
    value: "Lorem ipsum",
    color: ColorEnum.colorError
  }
};
