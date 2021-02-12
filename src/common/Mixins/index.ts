import { css } from 'styled-components';
import { IComponent } from 'common/Interfaces/IComponent';

export const ComponentMixin = css<IComponent>`
  position: ${props => props.position && props.position};
  top: ${props => props.top && props.top};
  right: ${props => props.right && props.right};
  bottom: ${props => props.bottom && props.bottom};
  left: ${props => props.left && props.left};
  width: ${props => props.width && props.width};
  height: ${props => props.height && props.height};
  margin: ${props => props.margin && props.margin};
  padding: ${props => props.padding && props.padding};
  border: ${props => props.border && props.border};
  border-radius: ${props => props.borderRadius && props.borderRadius};
  color: ${props => props.color && props.color};
  opacity: ${props => props.opacity && props.opacity};
  font: ${props => props.font && props.theme.fonts[props.font]};
  font-weight: ${props => props.weight ? props.theme.fontWeights[props.weight] : 400};
`;