import React, { forwardRef } from 'react';
import * as S from './style';
import { IComponent } from 'common';
export interface IInputProps extends IComponent {
  ref?: any;
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

export const Input: React.FC<IInputProps> = forwardRef((props, ref) => {
  return (
    <S.WrapInput ref={ref} {...props}>
      {props.children}
    </S.WrapInput>
  );
});
