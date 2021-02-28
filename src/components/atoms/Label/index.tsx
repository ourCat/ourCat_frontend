import React from 'react';
import * as S from './style';
import { IComponent } from 'common';
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
      {isNewLine ? (
        isViewOneLine ? (
          String(children)
            ?.split(/\n/g)
            .map((line, idx) => (
              <S.Wrap key={idx} display={'block'} {...rest}>
                {line}
              </S.Wrap>
            ))
        ) : (
          <S.Wrap {...rest}>{String(children)?.split(/\n/g)[0]}</S.Wrap>
        )
      ) : (
        <S.Wrap {...rest}>{children}</S.Wrap>
      )}
    </>
  );
};
