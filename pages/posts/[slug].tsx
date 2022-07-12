import { PostOrPage, PostsOrPages } from '@tryghost/content-api';
import { NextPage } from 'next';
import React from 'react';
import Header from 'src/components/organisms/Header';
import Post from 'src/components/templates/post';
import { getPosts, getSinglePost } from 'src/utils/api/ghostApi';

interface Props {
  post: PostOrPage | undefined;
}

export const getStaticProps = async (context: any) => {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
};

export const getStaticPaths = async () => {
  const posts: PostsOrPages | undefined = await getPosts();

  if (posts) {
    const paths = posts.map((post: PostOrPage) => ({
      params: { slug: post.slug },
    }));
    return { paths, fallback: false };
  } else return;
};

const PostPage: NextPage<Props> = ({ post }) => {
  return post ? (
    <Post header={<Header className="on-off" />} post={post} />
  ) : null;
};

export default PostPage;