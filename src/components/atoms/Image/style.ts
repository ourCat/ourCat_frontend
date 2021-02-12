import styled from 'styled-components';
import { ImageProps } from './index';

export const Wrap = styled.image<ImageProps>`
  width: ${props => props.width && props.width};
  margin: ${props => props.margin && props.margin};
  padding: ${props => props.padding && props.padding};
  border-radius: ${props => props.borderRadius && props.borderRadius};
  object-fit: cover;
`;
