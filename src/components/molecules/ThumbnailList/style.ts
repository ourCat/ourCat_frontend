import styled from 'styled-components';

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.2rem;
  padding: 1rem 0;
  border-top: 1px solid ${props => props.theme.colors.GRAY[500]};
`;

export const ListContainer = styled.div``;
