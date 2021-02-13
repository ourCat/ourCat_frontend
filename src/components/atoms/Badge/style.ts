import { ComponentMixin, IComponent } from 'common';
import styled from 'styled-components';
export const Wrap = styled.div<IComponent>`
  ${ComponentMixin};
  display: inline-block;
  color: ${props => props.theme.colors.WHITE};
  background-color: ${props => props.theme.colors.GRAY[200]};
  border: 1px solid ${props => props.theme.colors.GRAY[200]};
  border-radius: 10px;
`;
export const Container = styled.div`
  display: flex;
  padding: 3px 2px 0 2px;
`;
export const Bar = styled.div`
  padding: 0 2px;
`;
