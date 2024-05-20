import type { Meta, StoryObj } from "@storybook/angular";

import { MessageStatusComponent } from "./message-status.component";

const meta: Meta<MessageStatusComponent> = {
  component: MessageStatusComponent,
  title: "MessageStatusComponent"
};
export default meta;
type Story = StoryObj<MessageStatusComponent>;

export const Primary: Story = {
  args: {
    type: "info",
    value: ""
  },
};
