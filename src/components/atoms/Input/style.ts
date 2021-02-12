import styled from 'styled-components';
import { IInputProps } from '.';
import { ComponentMixin } from 'common/Mixins';

export const WrapInput = styled.input<IInputProps>`
  ${ComponentMixin};
`;