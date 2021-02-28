import { ComponentMixin } from 'common';
import styled, { css } from 'styled-components';
import { ButtonProps } from './index';

export const Wrap = styled.button<ButtonProps>`
  ${ComponentMixin};
  ${props => {
    if (props.disabled) {
      return css`
        &:disabled {
          color: ${props => props.theme.colors.BLACK};
          background-color: ${props => props.theme.colors.GRAY[400]};
          border: ${props => props.theme.colors.GRAY[400]};
        }
      `;
    } else {
      if (props.filled) {
        return css`
          color: ${props => props.theme.colors.WHITE};
          background-color: ${props => props.theme.colors.MAIN};
          border: ${props => props.theme.colors.WHITE};
          cursor: pointer;
          &:hover {
            background-color: ${props => props.theme.colors.DARK};
          }
        `;
      }
      if (!props.filled) {
        return css`
          color: ${props => props.theme.colors.MAIN};
          background-color: ${props => props.theme.colors.WHITE};
          border: ${props => props.theme.colors.MAIN};
          cursor: pointer;
          &:hover {
            background-color: ${props => props.theme.colors.MAIN};
            color: ${props => props.theme.colors.WHITE};
          }
        `;
      }
    }
  }}

  &:focus {
    outline: none;
  }
`;
