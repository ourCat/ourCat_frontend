import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import * as S from './style';

interface IModalPotalProps {
  children: React.ReactNode;
  onClickCloseModal: () => void;
}

export const ModalPortal: React.FC<IModalPotalProps> = ({ children, onClickCloseModal }) => {
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
        <div className="modal-background" onClick={onClickCloseModal} />
        <div className="modal_content">{children}</div>
      </S.ModalPotalWrap>,
      ref.current,
    );
  }

  return null;
};
