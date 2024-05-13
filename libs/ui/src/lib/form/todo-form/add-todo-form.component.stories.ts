import type { Meta, StoryObj } from '@storybook/angular';
import { AddTodoFormComponent } from './add-todo-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AddTodoFormComponent> = {
  component: AddTodoFormComponent,
  title: 'AddTodoFormComponent',
};
export default meta;
type Story = StoryObj<AddTodoFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/add-todo-form works!/gi)).toBeTruthy();
  },
};
