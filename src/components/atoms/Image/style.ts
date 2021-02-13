import styled from 'styled-components';
import { ComponentMixin } from 'common';
import { ImageProps } from './index';

export const WrapImage = styled.img<ImageProps>`
  ${ComponentMixin};
  src: ${props => props.src && props.src};
  cursor: ${props => (props.pointer ? 'pointer' : 'default')};
  object-fit: cover;
`;
