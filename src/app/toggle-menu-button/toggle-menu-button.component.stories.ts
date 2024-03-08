import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { ToggleMenuButtonComponent } from './toggle-menu-button.component';

export default {
  title: 'Toggle Menu Button',
  component: ToggleMenuButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ToggleMenuButtonComponent],
    }),
  ],
} as Meta;

const Template: StoryFn<ToggleMenuButtonComponent> = (
  args: ToggleMenuButtonComponent
) => ({
  component: ToggleMenuButtonComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  homeButtonColor: 'blue',
  menuButtonColor: 'green',
  buttonFontSize: '16px',
  buttonBackGroundColor: '#2D333F',
};
