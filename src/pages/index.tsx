import { Label, CheckBox, Recommend } from 'components';

const Home = () => {
  return (
    <>
      <CheckBox hasLabel isChecked>
        <Label font={14} weight="bold" margin={'0 0 0 10px'}>
          하이
        </Label>
      </CheckBox>
      <Recommend img={'/images/img.png'} label={'cat'} width={'80px'} font={24} />
    </>
  );
};

export default Home;
