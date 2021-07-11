import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
`;

export const Map = styled.div<{ height?: string; isError?: string }>`
  display: ${props => props.isError && 'none'};
  width: 100%;
  height: ${props => (props.height ? props.height : '48rem')};
  border-radius: 0.3rem;
`;

export const CatDescription = styled.div`
  position: absolute;

  z-index: 1;
  left: 0px;
  bottom: 30px;

  width: 100%;
  height: 80px;
  padding: 0 30px;

  display: flex;
  justify-content: center;
`;

export const CatDescriptionContent = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.WHITE};
  border-radius: 15px;
  padding: 10px;

  display: flex;
  align-items: center;
`;
