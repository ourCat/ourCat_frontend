import { ComponentMixin, IComponent } from 'common';
import styled from 'styled-components';

export const Wrap = styled.div<IComponent>`
  ${ComponentMixin};
  text-align: center;
`;

export const LabelContainer = styled.div``;
