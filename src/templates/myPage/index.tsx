import { useEffect } from 'react';
import * as S from './style';

interface IMyPageProps {}

export const MyPage:React.FC<IMyPageProps> = () => {
    useEffect(()=>{
        // 로그인 o => 화면 렌더링
        // 로그인 x => 로그인모달창
    },[])

    return <S.MyPageWrap></S.MyPageWrap>
}