import * as S from "./style";

export interface ButtonProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  label?: string;
  filled: boolean;
  disabled?: boolean;
  width?: string;
  margin?: string;
  padding?: string;
  fontSize?: number;
  color?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label = "Button",
  onClick,
  ...props
}) => {
  return (
    <S.Wrap {...props} onClick={onClick}>
      {label}
    </S.Wrap>
  );
};
