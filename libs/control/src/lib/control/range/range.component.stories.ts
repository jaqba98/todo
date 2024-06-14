import {
  moduleMetadata,
  type Meta,
  type StoryObj
} from "@storybook/angular";

import { RangeComponent } from "./range.component";
import { LabelComponent } from "../label/label.component";

const meta: Meta<RangeComponent> = {
  component: RangeComponent,
  title: "control/range",
  decorators: [
    moduleMetadata({
      imports: [LabelComponent]
    })
  ]
};
export default meta;
type Story = StoryObj<RangeComponent>;

export const Default: Story = {
  args: {
    label: "Label",
    isError: false,
    value: 0,
    isRequired: false
  }
};
