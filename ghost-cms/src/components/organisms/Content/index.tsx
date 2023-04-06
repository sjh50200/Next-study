import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import * as S from './style';

interface Props {
  title: string | undefined;
  category?: string | undefined;
  excerpt: string | undefined;
  slug?: string | undefined;
  src?: string | undefined;
}

const Content: FunctionComponent<Props> = (props) => {
  const { title, category, excerpt, slug, src } = props;
  return (
    <Link href={`/posts/${slug}`}>
      <S.Container>
        <S.Image src={src} alt="image" />
        {category && <S.Category>{category}</S.Category>}
        <S.Title>{title}</S.Title>
        <S.Excerpt>{excerpt}</S.Excerpt>
      </S.Container>
    </Link>
  );
};

Content.defaultProps;

export default Content;
