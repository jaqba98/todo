import type { Meta, StoryObj } from '@storybook/angular';
import { ControlComponent } from './control.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ControlComponent> = {
  component: ControlComponent,
  title: 'ControlComponent',
};
export default meta;
type Story = StoryObj<ControlComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/control works!/gi)).toBeTruthy();
  },
};
