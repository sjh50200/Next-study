import styled from 'styled-components';

export const Container = styled.div`
  padding: 11vw 92px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: block;
`;

export const Title = styled.h1`
  display: block;
  max-width: 740px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 16px;
`;

export const Content = styled.article`
  width: 100%;
  .kg-image {
    width: 100%;
    height: auto;
  }
  figure {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
    figcaption {
      text-align: center;
    }
  }
  p {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-top: 32px;
    font-size: 20px;
  }
  h1 {
    margin-top: 32px;
  }
`;

export const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 740px;
`;

// "<p>ghost api를 가지고 올 때 html 파일을 가져온다.</p>
// <p>이 것을 테스트 하기 위해 글을 쓴다.</p>
// <figure class="kg-card kg-image-card kg-card-hascaption">
// <img src="https://cobe-blog.ghost.io/content/images/2022/07/----1.jpeg" class="kg-image" alt="코카스파니엘 아기 때 모습" loading="lazy" width="700" height="550" srcset="https://cobe-blog.ghost.io/content/images/size/w600/2022/07/----1.jpeg 600w, https://cobe-blog.ghost.io/content/images/2022/07/----1.jpeg 700w">
// <figcaption>코카스파니엘!</figcaption></figure>
// <p>사진도 올려본다.</p><p>너무 귀여운 코카</p><!--kg-card-begin: markdown--><p>README.md</p>
// <h1 id="next-js-ghost-api">next js + ghost api</h1>
// <p>md 파일 성공적으로 가져가라</p>
// <!--kg-card-end: markdown--><hr><p>끝.</p>"
