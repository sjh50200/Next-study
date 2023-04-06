import React from 'react';
import * as S from './style';

interface Props {
  header?: JSX.Element;
  banner?: React.ReactNode;
  content?: Array<JSX.Element>;
}

const Home: React.FC<Props> = (props) => {
  const { header, banner, content } = props;
  return (
    <S.Container>
      {header && header}
      {banner && banner}
      <S.ContentGrid>{content && content}</S.ContentGrid>
    </S.Container>
  );
};

export default Home;
