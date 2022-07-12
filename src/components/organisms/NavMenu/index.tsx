import React from 'react';
import LinkedEl from 'src/components/molecules/LinkedEl';
import * as S from './style';

interface Props {
  className?: string;
}

const NavMenu: React.FC<Props> = ({ className }) => {
  return (
    <S.Conatainer className={className}>
      <S.Menus>
        <LinkedEl url={''}>Home</LinkedEl>
        <LinkedEl url={''}>About</LinkedEl>
        <LinkedEl url={''}>Posts</LinkedEl>
      </S.Menus>
    </S.Conatainer>
  );
};

export default NavMenu;
