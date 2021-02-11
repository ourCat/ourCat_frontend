import React from 'react';
import * as S from './style';

export type fontType =
  | 48
  | 36
  | 32
  | 28
  | 24
  | 20
  | 18
  | 16
  | 14
  | 13
  | 12
  | 10;
export type fontWeightType = 'light' | 'regular' | 'bold';

export interface ILabelProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  position?: string;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  font: fontType;
  weight?: fontWeightType;
  backgroundColor?: string;
  color?: string;
  lineThrough?: boolean;
  letterSpacing?: string;
  pointer?: boolean;
  opacity?: number;
}

export const Label: React.FC<ILabelProps> = (props) => {
  console.log(props);
  return <S.WrapLabel {...props}>{props.children}</S.WrapLabel>;
};
