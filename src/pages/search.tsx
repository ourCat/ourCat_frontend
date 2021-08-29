import styled from 'styled-components';
import { SearchTemplate } from 'templates';
export const Wrap = styled.div`
  min-height: 100vh;
`;
const Search = () => {
  return (
    <Wrap>
      <SearchTemplate />
    </Wrap>
  );
};

export default Search;
