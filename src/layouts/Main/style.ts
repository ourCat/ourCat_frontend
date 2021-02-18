import styled from 'styled-components';
import { MainLayoutProps } from './index';

export const WrapMainLayout = styled.div<MainLayoutProps>`
  position: relative;
  padding-top: ${props => props.theme.layoutSizes.HEADER};
  padding-bottom: ${props => props.theme.layoutSizes.BOTTOM_NAVIGATION};
  background-color: ${props => props.theme.colors.GRAY[100]};
`;

export const Container = styled.div`
  max-width: 440px;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.WHITE};
`;
