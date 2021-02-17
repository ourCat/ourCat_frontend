import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from 'components/atoms/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  filled: true,
  label: 'Button',
  height: '2rem',
};

export const NotFilled = Template.bind({});
NotFilled.args = {
  filled: false,
  label: 'Button',
  height: '2rem',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Button',
  height: '2rem',
};
