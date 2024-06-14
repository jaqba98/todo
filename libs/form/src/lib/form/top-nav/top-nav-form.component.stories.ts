import type { Meta, StoryObj } from "@storybook/angular";

import { TopNavFormComponent } from "./top-nav-form.component";

const meta: Meta<TopNavFormComponent> = {
  component: TopNavFormComponent,
  title: "form/top-nav"
};
export default meta;
type Story = StoryObj<TopNavFormComponent>;

export const Primary: Story = {};
