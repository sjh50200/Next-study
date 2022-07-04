import React from 'react';
import LinkedEl from 'src/components/molecules/LinkedEl';
import * as S from './style';

const Header = () => {
  return (
    <S.NavBar>
      <S.Menu>
        <LinkedEl url={''}>Magazine</LinkedEl>
        <S.Utils>
          <LinkedEl url={''}>D</LinkedEl>
          <LinkedEl url={''}>I</LinkedEl>
          <LinkedEl url={''}>F</LinkedEl>
          <LinkedEl url={''}>Y</LinkedEl>
        </S.Utils>
      </S.Menu>
    </S.NavBar>
  );
};

export default Header;
