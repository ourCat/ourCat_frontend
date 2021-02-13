import styled from 'styled-components';
import { HeaderProps } from './index';

export const WrapHeader = styled.header<HeaderProps>`
    ${props => props.theme.viewSizes.PC} {
        display: none;
    }
`;
