import { IComponent } from 'common';
import * as S from './style';

export interface ImageProps extends IComponent {
  url?: string;
  pointer?: string;
  onClick?: React.MouseEventHandler<SVGImageElement>;
}

export const Image: React.FC<ImageProps> = ({ url, ...props }) => {
  return <S.WrapImage {...props} url={url} />;
};
