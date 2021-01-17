import styled from 'styled-components';
import { ILabelProps } from './';

export const WrapLabel = styled.div<ILabelProps>`
  position: ${props => props.position && props.position};
  top: ${props => props.top && `${props.top}px`};
  right: ${props => props.right && `${props.right}px`};
  bottom: ${props => props.bottom && `${props.bottom}px`};
  left: ${props => props.left && `${props.left}px`};
  width: ${props => props.width && props.width};
  height: ${props => props.height && props.height};
  margin: ${props => props.margin && props.margin};
  padding: ${props => props.padding && props.padding};
  background-color: ${props => props.backgroundColor && props.backgroundColor};
  color: ${props => props.color && props.color};
  font: ${props => props.theme.fonts[props.font]};
  font-weight: ${props => props.weight ? props.theme.fontWeights[props.weight] : 400};
  letter-spacing: ${props => props.letterSpacing && props.letterSpacing};
  text-decoration: ${props => (props.lineThrough ? 'line-through' : 'none')};
  opacity: ${props => props.opacity && props.opacity};
  cursor: ${props => (props.pointer ? 'pointer' : 'default')};
`;