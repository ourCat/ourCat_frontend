import styled from 'styled-components';
import { MainLayoutProps } from './index';

export const WrapMainLayout = styled.div<MainLayoutProps>`
  position: relative;
  padding-top: ${props => props.theme.layoutSizes.HEADER};
`;

export const Content = styled.div``;
