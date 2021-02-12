import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import * as S from './style';
import { IComponent } from 'components/common/Interfaces/IComponent';

export interface CheckBoxProps extends IComponent {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  hasLabel?: boolean;
  isChecked?: boolean;
  label?: string;
  iconSize?: string;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  children,
  onClick,
  hasLabel,
  isChecked,
  label,
  ...props
}) => {
  return (
    <S.Wrap>
      <S.CheckBoxLabel {...props} onClick={onClick}>
        <S.CheckBoxInput type="checkbox" />
        {isChecked ? (
          <S.IconContainer {...props}>
            <FontAwesomeIcon icon={faCheckSquare} />
          </S.IconContainer>
        ) : (
          <S.IconContainer {...props}>
            <FontAwesomeIcon icon={faSquare} />
          </S.IconContainer>
        )}
        {hasLabel ? <>{children}</> : null}
      </S.CheckBoxLabel>
    </S.Wrap>
  );
};
