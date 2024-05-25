import type { Meta, StoryObj } from "@storybook/angular";

import { ButtonComponent } from "./button.component";

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: "Control/ButtonComponent"
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    type: "button",
    value: "Click me!",
    fullSize: false,
    leftIconVisible: false,
    leftIconSrc: "",
    leftIconAlt: "",
    rightIconVisible: false,
    rightIconSrc: "",
    rightIconAlt: "",
  }
};

export const FullSize: Story = {
  args: {
    type: "button",
    value: "Click me!",
    fullSize: true,
    leftIconVisible: false,
    leftIconSrc: "",
    leftIconAlt: "",
    rightIconVisible: false,
    rightIconSrc: "",
    rightIconAlt: ""
  }
};

export const FullSizeWidhLeftIcon: Story = {
  args: {
    type: "button",
    value: "Click me!",
    fullSize: true,
    leftIconVisible: true,
    leftIconSrc: "assets/arrow_down.svg",
    leftIconAlt: "Arrow Down Left",
    rightIconVisible: false,
    rightIconSrc: "",
    rightIconAlt: ""
  }
};

export const FullSizeWidhRightIcon: Story = {
  args: {
    type: "button",
    value: "Click me!",
    fullSize: true,
    leftIconVisible: false,
    leftIconSrc: "",
    leftIconAlt: "",
    rightIconVisible: true,
    rightIconSrc: "assets/arrow_down.svg",
    rightIconAlt: "Arrow Down Right"
  }
};

export const FullSizeWidhBothIcons: Story = {
  args: {
    type: "button",
    value: "Click me!",
    fullSize: true,
    leftIconVisible: true,
    leftIconSrc: "assets/arrow_down.svg",
    leftIconAlt: "Arrow Down Left",
    rightIconVisible: true,
    rightIconSrc: "assets/arrow_down.svg",
    rightIconAlt: "Arrow Down Right"
  }
};