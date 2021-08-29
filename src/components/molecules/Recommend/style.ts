import { ComponentMixin, IComponent } from 'common';
import styled from 'styled-components';

export const Wrap = styled.div<IComponent>`
  ${ComponentMixin};
`;

export const LabelContainer = styled.div`
  text-align: center;
`;
