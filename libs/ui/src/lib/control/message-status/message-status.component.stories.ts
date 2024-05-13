import type { Meta, StoryObj } from '@storybook/angular';
import { MessageStatusComponent } from './message-status.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MessageStatusComponent> = {
  component: MessageStatusComponent,
  title: 'MessageStatusComponent',
};
export default meta;
type Story = StoryObj<MessageStatusComponent>;

export const Primary: Story = {
  args: {
    type: 'info',
    value: '',
  },
};

export const Heading: Story = {
  args: {
    type: 'info',
    value: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/message-status works!/gi)).toBeTruthy();
  },
};
