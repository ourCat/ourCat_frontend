import { ComponentMixin } from 'common';
import styled from 'styled-components';
import { ITextAreaProps } from '.';

export const WrapTextArea = styled.textarea<ITextAreaProps>`
  ${ComponentMixin};
  resize: none;
`;