import * as S from './style';

export interface ImageProps {
  id?: string;
  className?: string;
  width?: string;
  margin?: string;
  padding?: string;
  url?: string;
  borderRadius?: string;
}

export const Image: React.FC<ImageProps> = ({ url, ...props }) => {
  return <S.Wrap {...props} url={url} />;
};
