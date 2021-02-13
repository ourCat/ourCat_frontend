import styled from 'styled-components';
import { HeaderPCProps } from './index';

export const WrapHeaderPC = styled.header<HeaderPCProps>`
    ${props => props.theme.viewSizes.MB} {
        display: none;
    }
`;
