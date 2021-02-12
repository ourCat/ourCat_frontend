import styled from 'styled-components';
import { ComponentMixin } from 'common';
import { ImageProps } from './index';

export const WrapImage = styled.image<ImageProps>`
  ${ComponentMixin};
  src: ${props => props.url && props.url};
  cursor: ${props => (props.pointer ? 'pointer' : 'default')};
  object-fit: cover;
`;
