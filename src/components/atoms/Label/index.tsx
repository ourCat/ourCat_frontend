import { IComponent } from 'components/common/Interfaces/IComponent';
import React from 'react';
import * as S from './style';
export interface ILabelProps extends IComponent {
  onClick?: React.MouseEventHandler<HTMLElement>;

  backgroundColor?: string;
  lineThrough?: boolean;
  letterSpacing?: string;
  pointer?: boolean;
}

export const Label: React.FC<ILabelProps> = props => {
  return <S.WrapLabel {...props}>{props.children}</S.WrapLabel>;
};
