import styled from 'styled-components';
import { MainLayoutProps } from './index';

export const MainBackgroundImage = styled.div`
  border: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
  background: url('/images/backgroundImage.svg') no-repeat center center fixed;
  background-position: center;
  background-size: cover;
`;

export const WrapMainLayout = styled.div<MainLayoutProps>`
  max-width: 440px;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.WHITE};
`;
