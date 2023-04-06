import Link from 'next/link';
import React from 'react';
import LinkedEl from 'src/components/molecules/LinkedEl';
import * as S from './style';

interface Props {
  className?: string;
}

const NavMenu: React.FC<Props> = ({ className }) => {
  return (
    <S.Container className={className}>
      <S.Menus>
        <Link href={'/'}>Home</Link>
        <LinkedEl url={''}>About</LinkedEl>
        <LinkedEl url={''}>Posts</LinkedEl>
      </S.Menus>
    </S.Container>
  );
};

export default NavMenu;
