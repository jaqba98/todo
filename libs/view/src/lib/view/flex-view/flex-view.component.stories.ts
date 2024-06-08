import type { Meta, StoryObj } from "@storybook/angular";

import { FlexViewComponent } from "./flex-view.component";

const meta: Meta<FlexViewComponent> = {
  component: FlexViewComponent,
  title: "view/flex"
};
export default meta;
type Story = StoryObj<FlexViewComponent>;

export const Primary: Story = {};
