import styled from 'styled-components';
import { IInputProps } from '.';
import { ComponentMixin } from 'common';

export const WrapInput = styled.input<IInputProps>`
  ${ComponentMixin};
`;