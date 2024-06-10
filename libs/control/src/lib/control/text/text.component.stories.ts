import { Meta, StoryObj } from "@storybook/angular";
import { within, userEvent } from "@storybook/test";

import { ColorEnum } from "../../enum/color.enum";
import { TextComponent } from "./text.component";

const meta: Meta<TextComponent> = {
  component: TextComponent,
  title: "control/text",
  argTypes: {
    color: {
      options: Object.values(ColorEnum),
      control: {
        type: "select"
      }
    },
    event: {
      action: "event"
    }
  }
};
export default meta;
type Story = StoryObj<TextComponent>;

const textDefault = {
  value: "Hello",
  color: ColorEnum.colorDefault,
  isUnderline: false,
  isClickable: false
};

export const Default: Story = {
  args: {
    ...textDefault
  }
};

export const Function: Story = {
  args: {
    ...textDefault,
    isClickable: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByRole("text");
    await userEvent.click(text);
  }
};
