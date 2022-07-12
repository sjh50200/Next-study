import React, { FunctionComponent } from 'react';
import * as S from './style';

interface Props {
  header: JSX.Element;
  post: any;
}

const Post: FunctionComponent<Props> = ({ post, header }) => {
  console.log(post);
  return (
    <>
      {header && header}
      <S.Container>
        <S.Title>{post.title}</S.Title>
        <S.Content>
          <S.ContentWrapper
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></S.ContentWrapper>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Post;
