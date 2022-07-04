import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'https://cobe-blog.ghost.io',
  key: 'f6d8b2178e8be136af0a004818',
  version: 'v5.0',
});

export const getPosts = async () => {
  try {
    const result = await api.posts.browse({ limit: 'all' });
    return result;
  } catch (err) {
    console.log(err);
  }
};
