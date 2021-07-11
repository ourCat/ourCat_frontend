import styled from 'styled-components';

export const ModalPotalWrap = styled.div`
  width: 100%;
  max-width: 440px;
  height: 100%;
  display: flex;
  padding: 0 30px;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin: 0 auto;
  top: 0;
  background-color: white;
`;

export const ModalDim = styled.div`
  position: absolute;
  width: 100%;
  min-width: 440px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
