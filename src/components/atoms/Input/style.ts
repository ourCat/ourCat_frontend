import styled from 'styled-components';
import { IInputProps } from '.';
import { ComponentMixin } from 'common';

export const WrapInput = styled.input<IInputProps>`
  ${ComponentMixin};

  display: ${props => (props.display ? props.display : 'block')};
  padding: ${props => props.padding && props.padding};
  width: 100%;
  height: ${props => props.height && props.height};
  font: ${props => props.theme.fonts[14]};
  letter-spacing: -1px;
  border: ${props => props.border && props.border};

  &::placeholder {
    font: inherit;
    letter-spacing: inherit;
    color: ${props => props.theme.colors.GRAY4};
  }
`;
