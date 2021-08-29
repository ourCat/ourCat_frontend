import { IComponent } from 'common';
import * as S from './style';

export interface ButtonProps extends IComponent {
  onClick?: React.MouseEventHandler<HTMLElement>;
  label?: string;
  filled: boolean;
  disabled?: boolean;
  icon?: any;
  backgroundColor?: string;
}

export const Button: React.FC<ButtonProps> = ({ label = 'Button', onClick, ...props }) => {
  return (
    <S.Wrap {...props} onClick={onClick}>
      {props.icon && props.icon}
      {label}
    </S.Wrap>
  );
};
