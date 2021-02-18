import { ComponentMixin, IComponent } from 'common';
import Slider from 'react-slick';
import styled from 'styled-components';

export const Wrap = styled.div<IComponent>`
  ${ComponentMixin};
`;

export const ReactSlider = styled(Slider)``;
