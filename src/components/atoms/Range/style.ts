import styled from 'styled-components';

export const Wrap = styled.input`
  width: ${props => props.width && props.width};
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -4px;
    width: 4px;
    height: 12px;
    border-radius: 6px;
    background-color: ${props => props.theme.colors.MAIN};
    cursor: pointer;
  }
  &::-webkit-slider-runnable-track {
    height: 4px;
    background-color: ${props => props.theme.colors.GRAY[400]};
    border-radius: 10px;
  }
  &:focus::-ms-fill-lower {
    background-color: ${props => props.theme.colors.MAIN};
  }
`;
