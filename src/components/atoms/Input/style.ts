import styled from 'styled-components';
import { IInputProps } from '.';

export const WrapInput = styled.input<IInputProps>`
  position: ${props => props.position && props.position};
  top: ${props => props.top && `${props.top}px`};
  right: ${props => props.right && `${props.right}px`};
  bottom: ${props => props.bottom && `${props.bottom}px`};
  left: ${props => props.left && `${props.left}px`};
  width: ${props => props.width && props.width};
  height: ${props => props.height && props.height};
  margin: ${props => props.margin && props.margin};
  padding: ${props => props.padding && props.padding};
  border: ${props => props.border && props.border};
  color: ${props => props.color && props.color};
  opacity: ${props => props.opacity && props.opacity};
  font: ${props => props.font && props.theme.fonts[props.font]};

  border-radius: 2px;
`;