import ghostApi from '.';

export const getPosts = async () => {
  try {
    const result = await ghostApi.posts.browse({
      // include: ['tags', 'authors'],
      limit: 9,
    });
    return result;
  } catch (err) {
    console.error(err);
    return;
  }
};

export const getSinglePost = async (postSlug: string) => {
  try {
    const result = await ghostApi.posts.read({ slug: postSlug });
    return result;
  } catch (err) {
    console.error(err);
  }
};
