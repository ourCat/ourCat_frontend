import styled from 'styled-components';
import { HeaderProps } from './index';

export const Wrap = styled.header<HeaderProps>`
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  background-color: ${props => props.theme.colors.WHITE};
  z-index: 5;
`;

export const Content = styled.header<HeaderProps>`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
