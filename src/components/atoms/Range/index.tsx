import { fontType } from 'components';
import * as S from './style';

export interface IRangeProps {
  id?: string;
  name?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onChange?: React.ChangeEventHandler<HTMLElement>;
  ref?: React.RefObject<HTMLInputElement>;
  defaultValue?: string | string[] | number;
  maxLength?: number;
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
  maxStep?: string;
  minStep?: string;
  step?: string;
}

export const Range: React.FC<IRangeProps> = ({
  maxStep = '100',
  minStep = '0',
  step = '10',
  ...props
}) => {
  return <S.Wrap type="range" min={minStep} max={maxStep} step={step} {...props} />;
};
