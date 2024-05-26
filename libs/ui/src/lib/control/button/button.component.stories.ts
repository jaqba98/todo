import type { Meta, StoryObj } from "@storybook/angular";

import { ButtonComponent } from "./button.component";

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: "Control/ButtonComponent"
};
export default meta;
type Story = StoryObj<ButtonComponent>;

const defaultArgs: Story["args"] = {
  type: "button",
  value: "Click me!",
  fullSize: false,
  leftIconVisible: false,
  leftIconSrc: "",
  leftIconAlt: "",
  rightIconVisible: false,
  rightIconSrc: "",
  rightIconAlt: ""
};

export const Default: Story = {
  args: {
    ...defaultArgs
  }
};

export const FullSize: Story = {
  args: {
    ...defaultArgs,
    fullSize: true
  }
};

export const FullSizeWidhLeftIcon: Story = {
  args: {
    ...defaultArgs,
    fullSize: true,
    leftIconVisible: true,
    leftIconSrc: "assets/arrow_down.svg",
    leftIconAlt: "Arrow Down Left"
  }
};

export const FullSizeWidhRightIcon: Story = {
  args: {
    ...defaultArgs,
    fullSize: true,
    rightIconVisible: true,
    rightIconSrc: "assets/arrow_down.svg",
    rightIconAlt: "Arrow Down Right"
  }
};

export const FullSizeWidhBothIcons: Story = {
  args: {
    ...defaultArgs,
    fullSize: true,
    leftIconVisible: true,
    leftIconSrc: "assets/arrow_down.svg",
    leftIconAlt: "Arrow Down Left",
    rightIconVisible: true,
    rightIconSrc: "assets/arrow_down.svg",
    rightIconAlt: "Arrow Down Right"
  }
};

export const NormalWidhBothIcons: Story = {
  args: {
    ...defaultArgs,
    leftIconVisible: true,
    leftIconSrc: "assets/arrow_down.svg",
    leftIconAlt: "Arrow Down Left",
    rightIconVisible: true,
    rightIconSrc: "assets/arrow_down.svg",
    rightIconAlt: "Arrow Down Right"
  }
};
