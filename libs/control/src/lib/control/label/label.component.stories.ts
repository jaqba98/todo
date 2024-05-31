import { Meta, StoryObj } from "@storybook/angular";
import { within, userEvent } from "@storybook/test";

import { LabelComponent } from "./label.component";

const meta: Meta<LabelComponent> = {
  component: LabelComponent,
  title: "control/label",
  argTypes: {
    event: {
      action: "event"
    }
  }
};
export default meta;
type Story = StoryObj<LabelComponent>;

const labelDefault = {
  value: "Hello",
  isError: false
};

export const Default: Story = {
  args: {
    ...labelDefault
  }
};

export const Error: Story = {
  args: {
    ...labelDefault,
    isError: true
  }
};

export const Function: Story = {
  args: {
    ...labelDefault
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByRole("text");
    await userEvent.click(text);
  }
};
