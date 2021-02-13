import styled from 'styled-components';
import { HeaderProps } from './index';

export const Wrap = styled.header<HeaderProps>`
  position: fixed;
  width: 100%;
  height: ${props => props.theme.layoutSizes.HEADER};
  top: 0px;
  left: 0px;
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.06);
  background-color: ${props => props.theme.colors.WHITE};
  z-index: 5;
`;

export const Content = styled.header<HeaderProps>`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;
