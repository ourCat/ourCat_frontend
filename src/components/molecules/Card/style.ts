import styled from 'styled-components';

export const Wrap = styled.div`
  padding-bottom: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  & > div {
    display: flex;
    align-items: center;

    & > img:first-of-type {
      margin-right: 0.7rem;
      border-radius: 30%;
    }
  }
`;

export const Content = styled.div`
  & > :not(:first-child) {
    padding: 0.5rem 1rem;
    display: flex;
  }
`;

export const TagBox = styled.div`
  display: flex;
  align-items: center;

  & > :first-child {
    margin-right: 0.2rem;
  }
`;

export const FirstLayer = styled.div`
  & > div {
    :not(:last-of-type) {
      margin-right: 1rem;
    }
    :last-of-type {
      margin-left: auto;
    }
  }
`;

export const SecondLayer = styled.div`
  & > span:last-of-type {
    margin-left: 1rem;
  }
`;
export const ThirdLayer = styled.div`
  & > {
    img {
      margin-right: 0.5rem;
    }
    input {
      border-bottom: 1px solid ${props => props.theme.colors.GRAY[400]};
    }
  }
`;
