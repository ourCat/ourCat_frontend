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
  margin-bottom: 3rem;
`;

export const LoginSocialContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

/**
 * space bar
 */
export const LoginModalSpaceContainer = styled.div`
  width: 100%;
  display: flex;
  color: ${props => props.theme.colors.GRAY[200]};
  margin: 2rem 0;

  .space_text {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const LoginSpaceBar = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.GRAY[400]};
`;
