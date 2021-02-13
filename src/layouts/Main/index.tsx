import { Header, HeaderPC } from 'components/organisms';
import * as S from './style';

export interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = props => {
  return (
    <S.WrapMainLayout {...props}>
      <Header />
      <HeaderPC />
      {props.children}
    </S.WrapMainLayout>
  );
};
