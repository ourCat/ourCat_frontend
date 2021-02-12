import { ComponentMixin } from 'common';
import { IRangeProps } from './index';
import styled from 'styled-components';

export const Wrap = styled.input<IRangeProps>`
  ${ComponentMixin};
  cursor: pointer;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -4px;
    width: 4px;
    height: 12px;
    border-radius: 6px;
    background-color: ${props => props.theme.colors.MAIN};
  }
  &::-webkit-slider-runnable-track {
    height: 4px;
    background-color: ${props => props.theme.colors.GRAY[400]};
    border-radius: 10px;
  }
`;
