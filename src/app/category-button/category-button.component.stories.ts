import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { CategoryButtonComponent } from './category-button.component';

export default {
  title: 'Category Button',
  component: CategoryButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [CategoryButtonComponent],
    }),
  ],
} as Meta;

const Template: StoryFn<CategoryButtonComponent> = (
  args: CategoryButtonComponent
) => ({
  component: CategoryButtonComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Category',
  buttonBackground: 'blue',
  buttonTextColor: 'white',
  buttonFontSize: '16px',
};
