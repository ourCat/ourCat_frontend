import React from 'react';
import { ThemeProvider } from 'styled-components';
import Themes from 'styles/Theme';

export const decorators = [
  Story => (
    <ThemeProvider theme={Themes}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
