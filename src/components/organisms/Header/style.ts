import styled from 'styled-components';
import { HeaderProps } from './index';

export const Wrap = styled.div<HeaderProps>`
  position: sticky;
  width: 100%;
  height: ${props => props.theme.layoutSizes.HEADER};
  top: 0px;
  left: 0px;
  background-color: ${props => props.theme.colors.GRAY[100]};
  z-index: ${props => props.theme.zIndex.HEADER};
`;

export const Container = styled.header`
  max-width: ${props => props.theme.layoutSizes.BODY_MAX_WIDTH};
  height: 100%;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.WHITE};
`;

export const Content = styled.div`
  height: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.06);
`;
