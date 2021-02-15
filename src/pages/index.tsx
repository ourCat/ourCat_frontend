import { Label, CheckBox, RecommendList } from 'components';

const Home = () => {
  return (
    <>
      <CheckBox hasLabel isChecked>
        <Label font={14} weight="bold" margin={'0 0 0 10px'} height="1080px">
          하이
        </Label>
      </CheckBox>
      <RecommendList />
    </>
  );
};

export default Home;
