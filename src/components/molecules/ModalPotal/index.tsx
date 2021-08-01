import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import * as S from './style';

interface IModalPotalProps {
  children: React.ReactNode;
  handleCloseModal: () => void;
}

export const ModalPortal: React.FC<IModalPotalProps> = ({ children, handleCloseModal }) => {
  const ref = useRef<Element | null>();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    if (document) {
      const dom = document.querySelector('#root-modal');
      ref.current = dom;
    }
  }, []);

  if (ref.current && mounted) {
    return createPortal(
      <S.ModalPotalWrap>
        <S.ModalDim onClick={handleCloseModal} />
        {children}
      </S.ModalPotalWrap>,
      ref.current,
    );
  }

  return null;
};
