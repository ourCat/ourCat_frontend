import * as S from './style';

export interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = props => {
  return <S.WrapMainLayout {...props}>{props.children}</S.WrapMainLayout>;
};
