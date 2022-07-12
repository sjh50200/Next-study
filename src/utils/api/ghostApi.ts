/* eslint-disable @typescript-eslint/no-non-null-assertion */
import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: process.env.GHOST_URL!,
  key: process.env.GHOST_KEY!,
  version: 'v5.0',
});

export const getPosts = async () => {
  try {
    const result = await api.posts.browse({ limit: 9 });
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const getSinglePost = async (postSlug: string) => {
  try {
    const result = await api.posts.read({ slug: postSlug });
    return result;
  } catch (err) {
    console.error(err);
  }
};
