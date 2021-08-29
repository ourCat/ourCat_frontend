import styled from 'styled-components';

export const Wrap = styled.div``;

export const Map = styled.div<{ height?: string }>`
  width: 100%;
  height: ${props => (props.height ? props.height : '28rem')};
  border-radius: 0.3rem;
`;
