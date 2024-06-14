import { CommonModule } from "@angular/common";
import {
  moduleMetadata,
  type Meta,
  type StoryObj
} from "@storybook/angular";

import { FlexViewComponent } from "./flex-view.component";
import { FlexDirectionEnum } from "../../enum/flex-direction.enum";

const meta: Meta<FlexViewComponent> = {
  component: FlexViewComponent,
  title: "view/flex",
  decorators: [
    moduleMetadata({
      imports: [CommonModule]
    })
  ],
  argTypes: {
    flexDirection: {
      options: Object.values(FlexDirectionEnum),
      control: {
        type: "select"
      }
    }
  }
};
export default meta;
type Story = StoryObj<FlexViewComponent>;

export const Primary: Story = {
  render: arg => {
    console.log(arg);
    return {
      template: `
        <lib-flex-view
          flexDirection="${arg.flexDirection}"
          gap="${arg.gap}"
        >
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </lib-flex-view>
      `
    };
  },
  args: {
    flexDirection: "row",
    gap: "0",
    alignItems: "stretch",
    justifyContent: "flex-start"
  }
};
