import { Label, CheckBox, RecommendList, Profile } from 'components';

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
  return (
    <>
      <RecommendList />
      <CheckBox hasLabel isChecked>
        <Label font={14} weight="bold" margin={'0 0 0 10px'} height="1080px">
          하이
        </Label>
      </CheckBox>
      <Profile isCat={false} data={sample} />
    </>
  );
};

export default Home;
