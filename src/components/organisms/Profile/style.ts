import { ComponentMixin, IComponent } from 'common';
import styled from 'styled-components';

export const Wrap = styled.div<IComponent>`
  ${ComponentMixin};
  padding: 1rem 2rem;
`;
// Img
export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileTextContianer = styled.div`
  text-align: center;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.MAIN};
  }
`;

// Content
export const ProfileContentContainer = styled.div`
  margin: 1rem 0;
`;
export const TagContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
  font: ${props => props.theme.fonts[14]};
`;
export const Tag = styled.div``;

// Button
export const ProfileButtonContainer = styled.div`
  display: flex;
`;
