import React from 'react';
import { fontType } from 'components/atoms';
import * as S from './style';

export interface IInputProps {
  id?: string;
  name?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
  onChange?: React.ChangeEventHandler<HTMLElement>;
  onBlur?: React.ChangeEventHandler<HTMLElement>;
  ref?: React.RefObject<HTMLInputElement>;
  type?: string;
  defaultValue?: string | string[] | number;
  placeholder?: string;
  maxLength?: any;
  autoComplete?: string;
  disabled?: boolean;
  font?: fontType;
  position?: string;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  border?: string;
  color?: string;
  pointer?: boolean;
  opacity?: number;
}

export const Input: React.FC<IInputProps> = (props) => {
  console.log(props);
  return <S.WrapInput {...props}>{props.children}</S.WrapInput>;
};
