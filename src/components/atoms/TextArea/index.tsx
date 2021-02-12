import React from 'react';
import { fontType } from 'components/atoms';
import * as S from './style';

export interface ITextAreaProps {
  id?: string;
  name?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
  onChange?: React.ChangeEventHandler<HTMLElement>;
  onBlur?: React.ChangeEventHandler<HTMLElement>;

  defaultValue?: string | string[] | number;
  placeholder?: string;
  maxLength?: number;
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
  opacity?: number;

  ref?: React.RefObject<HTMLTextAreaElement>;
}

export const TextArea: React.FC<ITextAreaProps> = props => {
  return <S.WrapTextArea {...props}>{props.children}</S.WrapTextArea>;
};
