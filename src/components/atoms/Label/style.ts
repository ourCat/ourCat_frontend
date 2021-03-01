import { ComponentMixin } from 'common';
import styled from 'styled-components';
import { ILabelProps } from './';

export const Wrap = styled.div<ILabelProps>`
  ${ComponentMixin}

  background-color: ${props => props.backgroundColor && props.backgroundColor};
  letter-spacing: ${props => props.letterSpacing && props.letterSpacing};
  text-decoration: ${props => (props.lineThrough ? 'line-through' : 'none')};
  cursor: ${props => (props.pointer ? 'pointer' : 'default')};
`;

export const LabelBox = styled.div``;
