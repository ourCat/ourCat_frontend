import { IComponent } from 'common';
import * as S from './style';

export interface IRangeProps extends IComponent {
  onClick?: React.MouseEventHandler<HTMLElement>;
  onChange?: React.ChangeEventHandler<HTMLElement>;
  ref?: React.RefObject<HTMLInputElement>;
  defaultValue?: string | string[] | number;
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
