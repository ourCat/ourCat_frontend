import { ComponentMixin, IComponent } from 'common';
import { Image } from 'components';

import styled from 'styled-components';

export const Wrap = styled.div<IComponent>`
  ${ComponentMixin};
  text-align: center;
  cursor: pointer;
`;

export const RecommendImage = styled(Image)`
  min-width: 50px;
  object-fit: cover;
`;

export const LabelContainer = styled.div``;
