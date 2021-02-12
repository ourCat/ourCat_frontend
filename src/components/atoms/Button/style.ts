import { ComponentMixin } from 'components/common/Mixins';
import styled, { css } from 'styled-components';
import { ButtonProps } from './index';

export const Wrap = styled.button<ButtonProps>`
  ${ComponentMixin};
  cursor: pointer;
  ${props => {
    if (props.filled) {
      return css`
        color: ${props => props.theme.colors.WHITE};
        background-color: ${props => props.theme.colors.MAIN};
        border: ${props => props.theme.colors.WHITE};
      `;
    }
    if (!props.filled) {
      return css`
        color: ${props => props.theme.colors.MAIN};
        background-color: ${props => props.theme.colors.WHITE};
        border: ${props => props.theme.colors.MAIN};
      `;
    }
    if (props.disabled) {
      return css`
        color: ${props => props.theme.colors.BLACK};
        background-color: ${props => props.theme.colors.GRAY[400]};
        border: ${props => props.theme.colors.GRAY[400]};
      `;
    }
  }}
  &:hover {
    background-color: ${props => props.theme.colors.DARK};
  }
  &:focus {
    outline: none;
  }
`;
