import Link from 'next/link';
import React, { FunctionComponent, useEffect, useState } from 'react';
import LinkedEl from 'src/components/molecules/LinkedEl';
import * as S from './style';

interface Props {
  className: string;
}

const Header: FunctionComponent<Props> = (props) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { className } = props;

  return (
    <S.NavBar name={className}>
      <S.Menu>
        <Link href="/">Home</Link>
        <S.Utils className="sns">
          <LinkedEl url={''}>D</LinkedEl>
          <LinkedEl url={''}>I</LinkedEl>
          <LinkedEl url={''}>F</LinkedEl>
          <LinkedEl url={''}>Y</LinkedEl>
        </S.Utils>
        <S.MenuIcon onClick={() => setOpen(!isOpen)} isOpen={isOpen} />
      </S.Menu>
    </S.NavBar>
  );
};

export default Header;
