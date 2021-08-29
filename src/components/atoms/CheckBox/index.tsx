import { fontType } from 'components/atoms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import * as S from './style';

export interface CheckBoxProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  hasLabel?: boolean;
  isChecked?: boolean;
  label?: string;
  disabled?: boolean;
  width?: string;
  margin?: string;
  padding?: string;
  fontSize?: fontType;
  iconSize?: string;
  color?: string;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  children,
  onClick,
  hasLabel,
  isChecked,
  label,
  fontSize = 16,
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
