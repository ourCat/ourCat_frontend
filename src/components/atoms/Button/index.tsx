import { IComponent } from 'common/Interfaces/IComponent';
import * as S from './style';

export interface ButtonProps extends IComponent {
  onClick?: React.MouseEventHandler<HTMLElement>;
  label?: string;
  filled: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ label = 'Button', onClick, ...props }) => {
  return (
    <S.Wrap {...props} onClick={onClick}>
      {label}
    </S.Wrap>
  );
};
