import { ComponentMixin, IComponent } from 'common';
import styled from 'styled-components';

export const Wrap = styled.div<IComponent>`
  ${ComponentMixin};
  text-align: center;
  box-sizing: border-box;
`;

export const LabelContainer = styled.div``;
