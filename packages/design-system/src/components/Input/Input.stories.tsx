import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Example/Input",
  component: Input,
  parameters: {
    a11y: {
      disable: false,
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({
  initialValue,
  backgroundColor,
}) => (
  <label>
    <Input initialValue={initialValue} backgroundColor={backgroundColor} />
  </label>
);

export const Primary = Template.bind({});
Primary.args = {
  initialValue: "Primary",
  backgroundColor: "yellow",
};

export const Secondary = Template.bind({});
Secondary.args = {
  initialValue: "Secondary",
  backgroundColor: "gold",
};

export const Large = Template.bind({});
Large.args = {
  initialValue: "Large",
};

export const Small = Template.bind({});
Small.args = {
  initialValue: "Small",
};
