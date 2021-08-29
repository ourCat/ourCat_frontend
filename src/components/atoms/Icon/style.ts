import styled from 'styled-components';
import { IconProps } from './index';

export const IconWrap = styled.div<IconProps>`
  width: ${props => (props.width ? props.width : '100%')};
  background: url(${props => props.src});
  color: ${props => props.color};
`;
