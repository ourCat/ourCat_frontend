import styled from 'styled-components';

export const LoginModalWarp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: 70vh;
  border-radius: 10px;
  background-color: white;
  z-index: 11;

  .login-title {
    width: 60%;
    padding: 30px 10px;
    object-fit: cover;
  }
`;
