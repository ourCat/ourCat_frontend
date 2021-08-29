
import { Label, CheckBox, RecommendList, Profile, Card } from 'components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'actions';
import styled from 'styled-components';
export const Wrap = styled.div`
  min-height: 100vh;
`;

const Home = () => {
  const sample = {
    name: '뚱땅이',
    profileSrc: 'images/img.png',
    profileContent: [
      { id: 1, name: '팔로워', count: '1.7k' },
      { id: 2, name: '게시물', count: '182' },
      { id: 3, name: '게시자', count: '12' },
    ],
    tag: [
      { id: 1, icon: 'icon', text: '강남구' },
      { id: 1, icon: 'icon', text: '먼치킨' },
      { id: 1, icon: 'icon', text: '3살(추정)' },
    ],
    description: '츄르를 많이 좋아해요',
    createAt: '2021-02-02',
    updateAt: '2021-02-23',
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(login());
  }, []);


  return (
    <Wrap>
      <RecommendList />
      <CheckBox hasLabel isChecked>
        <Label font={14} weight="bold" margin={'0 0 0 10px'} height="1080px">
          하이
        </Label>
      </CheckBox>
      <Profile isCat={false} data={sample} />
    </>
      <Card
        title={'뚱땅이'}
        date={new Date()}
        content={'나는야 김뚱땅. 오늘도 내 짝을 찾는다. \n 대체 어디에 있을까?'}
        heartCount={230}
        commentCount={104}
        bookmarkCount={80}
      />
      <Card
        title={'둥구'}
        date={new Date()}
        content={'거기 츄르 있는 사람?\n 츄르 한대만 물자...\n 츄르 한 대 정도는 괜찮잖아?'}
        heartCount={614}
        commentCount={311}
        bookmarkCount={110}
      />
    </Wrap>
  );
};

export default Home;
