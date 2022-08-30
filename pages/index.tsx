import { PostOrPage, PostsOrPages } from '@tryghost/content-api';
import { NextPage } from 'next';
// import Image from 'next/image';
import Banner from 'src/components/molecules/Banner';
// import Banner from 'src/static/images/banner2.png';
import Content from 'src/components/organisms/Content';
import Header from 'src/components/organisms/Header';
import Home from 'src/components/templates/home';
import { getPosts } from 'src/utils/api/posts';

export const getStaticProps = async () => {
  const posts = await getPosts();
  // posts!.forEach((post, index) => {
  //   if (post.excerpt && post.excerpt?.length > 100) {
  //     const shortener = post.excerpt?.substring(0, 100) + '...';
  //     posts![index].excerpt = shortener;
  //   }
  // });

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
};

interface Props {
  posts: PostsOrPages;
}

const IndexPage: NextPage<Props> = ({ posts }) => {
  return (
    <Home
      header={<Header className="on-off" />}
      banner={
        <Banner />
        // <Image
        //   src={Banner}
        //   alt="cobe's blog banner image"
        //   style={{ objectFit: 'contain', width: '100%' }}
        // />
      }
      content={
        posts &&
        posts.map((post: PostOrPage) => {
          return post.feature_image ? (
            <Content
              key={post.uuid}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              src={post.feature_image}
            ></Content>
          ) : (
            <Content
              key={post.uuid}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
            ></Content>
          );
        })
      }
    />
  );
};

export default IndexPage;
