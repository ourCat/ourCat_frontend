import { Label } from 'components';
import styled from 'styled-components';
export const Wrap = styled.div`
  min-height: 100vh;
`;
const Me = () => {
  return (
    <Wrap>
      <Label font={14} weight="bold" margin={'0 0 0 10px'} height="1080px">
        마이페이지
      </Label>
    </Wrap>
  );
};

export default Me;
