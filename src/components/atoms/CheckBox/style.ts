import { ComponentMixin } from 'common';
import styled from 'styled-components';
import { CheckBoxProps } from './index';

export const Wrap = styled.div`
  ${ComponentMixin};
`;

export const CheckBoxLabel = styled.label<CheckBoxProps>`
  display: flex;
`;
export const CheckBoxInput = styled.input`
  display: none;
`;
export const IconContainer = styled.div<CheckBoxProps>`
  color: ${props => props.theme.colors.MAIN};
  font-size: ${props => props.iconSize && props.iconSize};
`;
