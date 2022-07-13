import { PostOrPage, PostsOrPages } from '@tryghost/content-api';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Content from 'src/components/organisms/Content';
import Header from 'src/components/organisms/Header';
import Home from 'src/components/templates/home';
import { getPosts } from 'src/utils/api/ghostApi';

export const getStaticProps = async () => {
  const posts = await getPosts();
  posts!.forEach((post, index) => {
    if (post.excerpt && post.excerpt?.length > 100) {
      const shortener = post.excerpt?.substring(0, 100) + '...';
      posts![index].excerpt = shortener;
    }
  });

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
      content={
        posts &&
        posts.map((post: PostOrPage) => {
          console.log(post);
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
// interface Props {
//   posts: PostsOrPages | undefined;
// }

// const index: NextPage<Props> = (props) => {
//   const { posts } = props;
//   const [contents, setContents] = useState<ContentsInfo[]>([]);
//   console.log(props.posts);
//   useEffect(() => {
//     if (contents.length === 0) {
//       if (posts) {
//         const contentsInfos: ContentsInfo[] = posts.map((data, index) => {
//           return {
//             uuid: data.uuid,
//             title: data.title,
//             excerpt: data.excerpt,
//             blogId: data.slug,
//           };
//         });
//         setContents(contentsInfos);
//       }
//     }
//   }, []);
//   return (
//   );
// };

export default IndexPage;
