import React, { FunctionComponent } from 'react';
import * as S from './style';

interface Props {
  title: string | undefined;
  category?: string | undefined;
  excerpt: string | undefined;
}

const Content: FunctionComponent<Props> = (props) => {
  const { title, category, excerpt } = props;
  return (
    <S.Container>
      <S.Image src="" alt="image" />
      {category && <S.Category>{category}</S.Category>}
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Content;
