import React from 'react';

import Button from '@/components/elements/button';

export default {
  title: 'Elements',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <Button {...args}>Button</Button>;

export const TempButton = Template.bind({});
TempButton.args = {
  buttonType: 'primary',
};
