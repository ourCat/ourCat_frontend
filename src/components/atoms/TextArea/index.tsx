import React from 'react';
import * as S from './style';
import { IComponent } from 'common/Interfaces/IComponent';

export interface ITextAreaProps extends IComponent {
  ref?: React.RefObject<HTMLTextAreaElement>;
  defaultValue?: string | string[] | number;
  placeholder?: string;
  maxLength?: number;
  autoComplete?: string;
  disabled?: boolean;

  onClick?: React.MouseEventHandler<HTMLElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
  onChange?: React.ChangeEventHandler<HTMLElement>;
  onBlur?: React.ChangeEventHandler<HTMLElement>;
}

export const TextArea: React.FC<ITextAreaProps> = props => {
  return <S.WrapTextArea {...props}>{props.children}</S.WrapTextArea>;
};
