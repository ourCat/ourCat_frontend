import { IComponent } from 'common';
import * as S from './style';

export interface IconProps extends IComponent {
  src: string;
}

export const Icon: React.FC<IconProps> = props => {
  return <S.IconWrap {...props} />;
};
