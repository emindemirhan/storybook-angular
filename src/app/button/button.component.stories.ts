import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
    }),
  ],
} as Meta;

const Template: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const WithContent = Template.bind({});
WithContent.args = {
  content: 0,
  contentColor: 'red',
};

export const WithContentTen = Template.bind({});
WithContentTen.args = {
  content: 10,
  contentColor: 'green',
};

export const WithContentTwenty = Template.bind({});
WithContentTwenty.args = {
  content: 20,
  contentColor: 'red',
};
