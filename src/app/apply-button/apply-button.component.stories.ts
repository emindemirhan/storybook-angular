import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { ApplyButtonComponent } from './apply-button.component';

export default {
  title: 'Apply Button',
  component: ApplyButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ApplyButtonComponent],
    }),
  ],
} as Meta;

const Template: StoryFn<ApplyButtonComponent> = (
  args: ApplyButtonComponent
) => ({
  component: ApplyButtonComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Apply',
  buttonTextColor: 'white',
  buttonFontSize: '14px',
};
