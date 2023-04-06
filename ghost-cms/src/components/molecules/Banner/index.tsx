import React from 'react';
import * as S from './style';

const Banner = () => {
  return (
    <S.Banner>
      <S.TextArea>
        <S.Title>Blog</S.Title>
        <S.Subtitle>
          Ghost gms - next.js
          <br /> SSG 블로그 개발
        </S.Subtitle>
      </S.TextArea>
    </S.Banner>
  );
};

export default Banner;
