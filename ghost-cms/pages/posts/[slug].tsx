import { PostOrPage, PostsOrPages } from '@tryghost/content-api';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';
import Header from 'src/components/organisms/Header';
import Post from 'src/components/templates/post';
import { getPosts, getSinglePost } from 'src/utils/api/posts';

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

  const paths = posts!.map((post: PostOrPage) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
};

const PostPage: NextPage<Props> = ({ post }) => {
  return post ? (
    <>
      <Post header={<Header className="on-off" />} post={post} />
    </>
  ) : null;
};

export default PostPage;
