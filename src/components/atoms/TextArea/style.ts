import { ComponentMixin } from 'components/common/Mixins';
import styled from 'styled-components';
import { ITextAreaProps } from '.';

export const WrapTextArea = styled.textarea<ITextAreaProps>`
  ${ComponentMixin};
  resize: none;
`;