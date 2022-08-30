import React from 'react';
import * as S from './style';

interface Props {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const Hamburger: React.FC<Props> = ({ isOpen, onClick, className }) => {
  return (
    <>
      <S.Container isOpen={isOpen} onClick={onClick} className={className}>
        <div className="bar bar1" />
        <div className="bar bar2" />
        <div className="bar bar3" />
      </S.Container>
    </>
  );
};

export default Hamburger;
