import { IComponent } from 'common';
import * as S from './style';

export interface ImageProps extends IComponent {
  src?: string;
  pointer?: string;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}

export const Image: React.FC<ImageProps> = ({ src, ...props }) => {
  return <S.WrapImage {...props} src={src} />;
};
