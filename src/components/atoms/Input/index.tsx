import React from 'react';
import * as S from './style';
import { IComponent } from 'components/common/Interfaces/IComponent';
export interface IInputProps extends IComponent {
  ref?: React.RefObject<HTMLInputElement>;
  type?: string;
  defaultValue?: string | string[] | number;
  placeholder?: string;
  maxLength?: number;
  autoComplete?: string;
  disabled?: boolean;

  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<IInputProps> = props => {
  return <S.WrapInput {...props}>{props.children}</S.WrapInput>;
};
