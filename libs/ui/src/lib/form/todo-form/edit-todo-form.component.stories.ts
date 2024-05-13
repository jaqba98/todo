import type { Meta, StoryObj } from '@storybook/angular';
import { EditTodoFormComponent } from './edit-todo-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<EditTodoFormComponent> = {
  component: EditTodoFormComponent,
  title: 'EditTodoFormComponent',
};
export default meta;
type Story = StoryObj<EditTodoFormComponent>;

export const Primary: Story = {
  args: {
    id: '',
  },
};

export const Heading: Story = {
  args: {
    id: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/edit-todo-form works!/gi)).toBeTruthy();
  },
};
