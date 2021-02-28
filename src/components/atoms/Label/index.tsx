import React from 'react';
import { IComponent } from 'common';
import * as S from './style';

export interface ILabelProps extends IComponent {
  onClick?: React.MouseEventHandler<HTMLElement>;

  backgroundColor?: string;
  lineThrough?: boolean;
  letterSpacing?: string;
  pointer?: boolean;
  isNewLine?: boolean;
  isViewOneLine?: boolean;
}

export const Label: React.FC<ILabelProps> = ({ isNewLine, isViewOneLine, children, ...rest }) => {
  /**
   *  '\n'을 기준으로 개행..
   */
  return (
    <>
      {isNewLine && !isViewOneLine && (
        <S.LabelBox>
          {String(children)
            ?.split(/\n/g)
            .map((line, idx) => (
              <S.Wrap key={idx} display={'block'} {...rest}>
                {line}
              </S.Wrap>
            ))}
        </S.LabelBox>
      )}
      {isNewLine && isViewOneLine && <S.Wrap {...rest}>{String(children)?.split(/\n/g)[0]}</S.Wrap>}
      {!isNewLine && <S.Wrap {...rest}>{children}</S.Wrap>}
    </>
  );
};
