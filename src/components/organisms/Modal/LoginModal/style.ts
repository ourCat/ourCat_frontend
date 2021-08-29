import { Label } from 'components/atoms';
import styled from 'styled-components';

/**
 *모달 컨텐츠 배경
 */
export const LoginModalWarp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 70vh;
  border-radius: 10px;
  background-color: white;
  z-index: 11;
  padding: 16px;
`;

export const LoginLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const LoginSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 16px;
`;

/**
 * space bar
 */
export const LoginSpaceBar = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.GRAY[400]};
  margin: 1rem 0;
`;
