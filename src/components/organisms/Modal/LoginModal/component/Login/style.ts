import styled from 'styled-components';

export const LoginLabelContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 0;

  .flex_input {
    width: 100%;
    padding: 8px;
    border-bottom: 1px solid ${props => props.theme.colors.GRAY[200]};
  }
`;

export const ErrorContextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: red;
  padding: 0.5rem 0;
`;
