import React from 'react';
import * as S from './style';
import { IComponent } from 'common';
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
