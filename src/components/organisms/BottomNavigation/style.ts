import styled from 'styled-components';
import { BottomNavigationProps } from './index';

export const Wrap = styled.div<BottomNavigationProps>`
  position: fixed;
  width: 100%;
  height: ${props => props.theme.layoutSizes.BOTTOM_NAVIGATION};
  bottom: 0px;
  left: 0px;
  background-color: ${props => props.theme.colors.GRAY[100]};
  z-index: ${props => props.theme.zIndex.BOTTOM_NAVIGATION};
`;

export const Container = styled.div`
  max-width: ${props => props.theme.layoutSizes.BODY_MAX_WIDTH};
  height: 100%;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.GRAY[500]};
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & > svg {
    cursor: pointer;

    :hover {
      color: ${props => props.theme.colors.MAIN};
    }
  }
`;
