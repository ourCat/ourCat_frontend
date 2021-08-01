import styled from 'styled-components';

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

export const LoginLabelContainer = styled.div`
  display: flex;
  padding: 4px 0;
  .flex_label {
    flex: 1;
  }
  .flex_input {
    flex: 2;
  }
`;

export const LoginSpaceBar = styled.div`
  width: 100%;
  height: 1px;
  background-color: gray;
  margin: 8px 0;
`;

export const LoginSocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
