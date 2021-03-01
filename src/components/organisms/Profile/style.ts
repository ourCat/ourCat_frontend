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
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.MAIN};
  }
`;
export const ProfileCounter = styled.div`
  font: ${props => props.theme.fonts[20]};
  text-align: center;
`;
export const ProfileText = styled.div`
  font: ${props => props.theme.fonts[13]};
`;

// Content
export const ProfileContentContainer = styled.div`
  margin: 1rem 0;
`;
export const ProfileName = styled.div`
  margin-bottom: 0.5rem;
  font: ${props => props.theme.fonts[18]};
`;
export const TagContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font: ${props => props.theme.fonts[14]};
`;
export const Tag = styled.div``;
export const Description = styled.div`
  margin-bottom: 0.5rem;
  font: ${props => props.theme.fonts[14]};
`;
export const UpdateAt = styled.div`
  font: ${props => props.theme.fonts[14]};
  color: ${props => props.theme.colors.GRAY[200]};
`;

// Button
export const ProfileButtonContainer = styled.div`
  display: flex;
`;
