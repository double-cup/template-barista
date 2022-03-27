import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "../Input";
import Label from "./Label";

export default {
  title: "Example/Label",
  component: Label,
  parameters: {
    a11y: {
      disable: false,
    },
  },
} as ComponentMeta<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Label> = ({ children }) => (
  <Label>{children}</Label>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: (
    <>
      This is my label
      <Input />
    </>
  ),
};
