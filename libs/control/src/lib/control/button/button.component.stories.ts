import type { Meta, StoryObj } from "@storybook/angular";

import { ButtonComponent } from "./button.component";

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: "control/button"
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
  rightIconAlt: "",
  isPrimary: true
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
    leftIconSrc: "assets/home.svg",
    leftIconAlt: "Home Left"
  }
};

export const FullSizeWidhRightIcon: Story = {
  args: {
    ...defaultArgs,
    fullSize: true,
    rightIconVisible: true,
    rightIconSrc: "assets/home.svg",
    rightIconAlt: "Home Right"
  }
};

export const FullSizeWidhBothIcons: Story = {
  args: {
    ...defaultArgs,
    fullSize: true,
    leftIconVisible: true,
    leftIconSrc: "assets/home.svg",
    leftIconAlt: "Home Left",
    rightIconVisible: true,
    rightIconSrc: "assets/home.svg",
    rightIconAlt: "Home Right"
  }
};

export const NormalWidhBothIcons: Story = {
  args: {
    ...defaultArgs,
    leftIconVisible: true,
    leftIconSrc: "assets/home.svg",
    leftIconAlt: "Home Left",
    rightIconVisible: true,
    rightIconSrc: "assets/home.svg",
    rightIconAlt: "Home Right"
  }
};

export const Secondary: Story = {
  args: {
    ...defaultArgs,
    isPrimary: false
  }
};
