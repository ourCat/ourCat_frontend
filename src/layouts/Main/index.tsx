import { BottomNavigation, Header } from 'components/organisms';
import * as S from './style';

export interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = props => {
  return (
    <S.WrapMainLayout {...props}>
      <S.Container>
        <Header />
        {props.children}
        <BottomNavigation />
      </S.Container>
    </S.WrapMainLayout>
  );
};
